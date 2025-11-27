# Fix Email Sending Issue - Step by Step Guide

The email sending is not working because Google Apps Script needs proper authorization. Here's how to fix it:

## 🔧 Step 1: Update Your Google Apps Script

1. **Go to your Google Apps Script** (the one that shows "Google Apps Script is working!")
2. **Replace ALL the code** with the content from `GOOGLE_APPS_SCRIPT_SIMPLE.js`
3. **Save the script** (Ctrl+S or Cmd+S)

## 🔧 Step 2: Test Email Permissions

1. **In your Google Apps Script editor**, you'll see a dropdown menu next to the "Run" button
2. **Select "testEmailPermissions"** from the dropdown
3. **Click the "Run" button**
4. **You'll see a popup asking for permissions** - click "Review Permissions"
5. **Choose your Google account** (the one you want to send emails from)
6. **Click "Advanced"** → **"Go to [Your Project Name] (unsafe)"**
7. **Click "Allow"** to grant email permissions

## 🔧 Step 3: Test the Complete Flow

1. **Select "testCompleteFlow"** from the dropdown
2. **Click "Run"**
3. **Check your email** at `elprofesorito322@gmail.com` - you should receive a test email
4. **Check your Google Sheet** - you should see a test row added

## 🔧 Step 4: Deploy the Updated Script

1. **Click "Deploy"** → **"New deployment"**
2. **Choose "Web app"**
3. **Set:**
   - Execute as: **Me**
   - Who has access: **Anyone**
4. **Click "Deploy"**
5. **Authorize again** if prompted
6. **Copy the new Web app URL** (it might be the same or different)

## 🔧 Step 5: Update Your Environment Variable (if URL changed)

If the Web app URL changed, update it in your `.env` file:

```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbyli4IjDM4i9ylTq-2EsMgkej_2vzhNl1UAnZ8FPKZMNAsEuX4egc8nIKYVwb2ijKTUvw/exec
```

**Note:** The code reads the URL from environment variables. Make sure to restart your development server after updating the `.env` file.

## 🔧 Step 6: Test Your Website

1. **Start your development server**: `npm run dev`
2. **Fill out and submit** the contact form
3. **Fill out and submit** the exam registration form
4. **Check your email** - you should receive notifications
5. **Check your Google Sheet** - data should be saved

## 🚨 Common Issues and Solutions

### Issue: "Authorization required"
**Solution**: Follow Step 2 above to grant email permissions

### Issue: "MailApp is not defined"
**Solution**: Make sure you're using the updated script code

### Issue: "Quota exceeded"
**Solution**: Google has daily email limits. Check your Google Apps Script quotas

### Issue: "Invalid email address"
**Solution**: Make sure the email address is valid and you have permission to send to it

## 📧 Email Permissions Explained

Google Apps Script needs explicit permission to:
- **Send emails** on your behalf
- **Access your Google Sheets**
- **Execute web requests**

The authorization process grants these permissions securely.

## 🧪 Testing Functions

The updated script includes these test functions:

- **`testEmailPermissions()`** - Tests if email sending works
- **`testCompleteFlow()`** - Tests the entire process (save + email)
- **`doGet()`** - Tests if the web app is accessible

## 📊 Expected Results

After fixing:

✅ **Data saves to Google Sheets** automatically  
✅ **Admin notification** sent to `elprofesorito322@gmail.com`  
✅ **User confirmation** sent to the user's email (if provided)  
✅ **Success message** shown on the website  
✅ **Form resets** after successful submission  

## 🔍 Debugging

If emails still don't work:

1. **Check the Google Apps Script logs** (View → Execution log)
2. **Run the test functions** to isolate the issue
3. **Check your email spam folder**
4. **Verify the email address** is correct
5. **Check Google Apps Script quotas** (View → Quotas)

The most common issue is missing email permissions, which Step 2 above will fix!
