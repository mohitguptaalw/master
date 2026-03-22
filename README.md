# Meridian Park Bulk Order Form

Mobile-friendly web application for bulk appliance orders.

## Setup Google Sheets Integration

1. **Open your Google Sheet**: https://docs.google.com/spreadsheets/d/1puZrDZxNP8X2hd_vwicvmyX3AYNdDuQA3saRuUMGEvo

2. **Create a sheet named "Orders"** with headers:
   - Date, Time, Name, Flat Number, Mobile, Procurement Date, Appliance, Qty, Brand

3. **Create Google Apps Script**:
   - Go to Extensions → Apps Script
   - Copy content from `Code.gs`
   - Click Deploy → New Deployment
   - Select "Web app"
   - Set "Execute as": Me
   - Set "Who has access": Anyone
   - Click Deploy and copy the **Web App URL**

4. **Update the web app URL in index.html**:
   - Replace `YOUR_DEPLOYMENT_ID` in the URL with your actual deployment ID
   - Example: `https://script.google.com/macros/s/ABC123xyz/exec`

## Features

- Mobile-friendly design
- Select multiple appliances with quantity and brand
- Customer details: Name, Flat Number, Mobile, Procurement Date
- Data saved to Google Sheets
- Export to Excel with separate sheets per appliance

## Live URL

https://mohitguptaalw.github.io/master/