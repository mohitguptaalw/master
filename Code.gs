// Google Apps Script for Meridian Park Bulk Order Form
// To deploy:
// 1. Go to https://script.google.com
// 2. Create new project
// 3. Paste this code
// 4. Click Deploy > New Deployment
// 5. Select "Web app"
// 6. Set: Execute as: "Me", Who has access: "Anyone"
// 7. Click Deploy and copy the URL

const SPREADSHEET_ID = '1puZrDZxNP8X2hd_vwicvmyX3AYNdDuQA3saRuUMGEvo';
const SHEET_NAME = 'Meridian Park Bulk Order Form';

function doPost(e) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME) || SpreadsheetApp.openById(SPREADSHEET_ID).insertSheet(SHEET_NAME);
  
  if (!sheet.getLastRow()) {
    sheet.appendRow(['Date', 'Time', 'Name', 'Flat Number', 'Mobile', 'Procurement Date', 'Appliance', 'Qty', 'Brand']);
  }
  
  const data = JSON.parse(e.postData.contents);
  const now = new Date();
  const dateStr = now.toLocaleDateString();
  const timeStr = now.toLocaleTimeString();
  
  if (data.appliances && Array.isArray(data.appliances)) {
    data.appliances.forEach(app => {
      sheet.appendRow([dateStr, timeStr, data.name, data.flatNumber, data.mobile, data.procurementDate, app.name, app.qty, app.brand]);
    });
  }
  
  return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    return ContentService.createTextOutput(JSON.stringify([])).setMimeType(ContentService.MimeType.JSON);
  }
  
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const rows = data.slice(1);
  
  const result = rows.map(row => {
    const obj = {};
    headers.forEach((header, i) => {
      obj[header] = row[i];
    });
    return obj;
  });
  
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}