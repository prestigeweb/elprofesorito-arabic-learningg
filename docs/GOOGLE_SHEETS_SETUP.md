# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets to automatically save form submissions from your website.

## ✅ What This Does

- **Saves form data** directly to Google Sheets
- **No email issues** - much more reliable than EmailJS
- **Easy to view** all submissions in one place
- **Automatic timestamps** for each submission
- **Works with both** contact and exam registration forms

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "El Profesorito Form Submissions"
4. Create the following columns in the first row:

```
A: Timestamp | B: Form Type | C: Name | D: Email | E: Phone | F: Message | G: Preferred Time | H: Experience Level | I: Goals
```

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Replace the default code with this:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the form data
    const formData = e.parameter;
    
    // Create timestamp
    const timestamp = new Date().toISOString();
    
    // Prepare row data
    const rowData = [
      timestamp,                                    // Timestamp
      formData.formType || 'Unknown',              // Form Type
      formData.name || '',                         // Name
      formData.email || '',                        // Email
      formData.phone || '',                        // Phone
      formData.message || '',                      // Message
      formData.preferredTime || '',                // Preferred Time
      formData.experience || '',                   // Experience Level
      formData.goals || ''                         // Goals
    ];
    
    // Add the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script works
function doGet() {
  return ContentService
    .createTextOutput('Google Apps Script is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

3. Click **Save** and give it a name like "Form Handler"

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Choose **Web app** as the type
3. Set the following:
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Authorize** the app when prompted
6. Copy the **Web app URL** (it will look like: `https://script.google.com/macros/s/AKfycbz.../exec`)

## Step 4: Set Environment Variable

Set the Google Apps Script URL in your `.env` file:

```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbyli4IjDM4i9ylTq-2EsMgkej_2vzhNl1UAnZ8FPKZMNAsEuX4egc8nIKYVwb2ijKTUvw/exec
```

**Important:** After updating the `.env` file, restart your development server.

The code automatically reads this URL from environment variables. Both forms are already using the real Google Sheets function:

```typescript
import { saveToGoogleSheets } from "@/lib/googleSheetsService";
const saved = await saveToGoogleSheets(sheetData);
```

## Step 5: Test the Setup

1. Start your development server: `npm run dev`
2. Fill out and submit the contact form
3. Fill out and submit the exam registration form
4. Check your Google Sheet - you should see new rows added automatically

## 📊 Data Structure

Your Google Sheet will look like this:

| Timestamp | Form Type | Name | Email | Phone | Message | Preferred Time | Experience Level | Goals |
|-----------|-----------|------|-------|-------|---------|----------------|------------------|-------|
| 2024-01-15T10:30:00Z | Contact Form | John Doe | john@email.com | +1234567890 | Hello, I have a question... | | | |
| 2024-01-15T10:35:00Z | Exam Registration | Jane Smith | jane@email.com | +1234567891 | | Morning | Intermediate | Travel |

## 🔧 Troubleshooting

### If data isn't saving:

1. **Check the Web app URL** - make sure it's correct
2. **Verify the script is deployed** - test the URL in browser
3. **Check browser console** for error messages
4. **Verify authorization** - make sure you authorized the app
5. **Check Google Sheet permissions** - make sure it's editable

### Common Issues:

- **CORS errors**: The script should handle this automatically
- **Authorization errors**: Re-deploy and re-authorize the script
- **URL not found**: Double-check the deployment URL

## 🚀 Advanced Features

### Email Notifications (Optional)

Add this to your Google Apps Script to send email notifications:

```javascript
// Add this inside the doPost function after saving to sheet
if (formData.email) {
  MailApp.sendEmail({
    to: formData.email,
    subject: 'Thank you for your submission - El Profesorito',
    body: `Dear ${formData.name},\n\nThank you for submitting your ${formData.formType}. We have received your information and will get back to you soon.\n\nBest regards,\nEl Profesorito Team`
  });
}
```

### Admin Email Notifications

Add this to send admin notifications:

```javascript
// Add this inside the doPost function
MailApp.sendEmail({
  to: 'elprofesorito322@gmail.com',
  subject: `New ${formData.formType} Submission - ${formData.name}`,
  body: `New form submission received:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message || 'N/A'}\nForm Type: ${formData.formType}`
});
```

## 📈 Benefits

- **Reliable**: No more template variable issues
- **Organized**: All submissions in one spreadsheet
- **Searchable**: Easy to find and filter submissions
- **Exportable**: Can export to Excel, CSV, etc.
- **Collaborative**: Multiple people can view the data
- **Free**: No monthly costs or limits

This solution is much more reliable than EmailJS and gives you better control over your form data!
