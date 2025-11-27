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
    
    // Try to send admin notification
    try {
      sendAdminNotification(formData);
    } catch (emailError) {
      console.error('Admin email failed:', emailError);
      // Continue even if email fails
    }
    
    // Try to send user confirmation (if email provided)
    if (formData.email && formData.email.trim() !== '') {
      try {
        sendUserConfirmation(formData);
      } catch (emailError) {
        console.error('User email failed:', emailError);
        // Continue even if email fails
      }
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'message': 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Main error:', error);
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to send admin notification
function sendAdminNotification(formData) {
  const subject = `New ${formData.formType} Submission - ${formData.name}`;
  
  let body = `New form submission received:\n\n`;
  body += `Name: ${formData.name}\n`;
  body += `Email: ${formData.email}\n`;
  body += `Phone: ${formData.phone}\n`;
  body += `Form Type: ${formData.formType}\n`;
  
  if (formData.message) {
    body += `Message: ${formData.message}\n`;
  }
  
  if (formData.preferredTime) {
    body += `Preferred Time: ${formData.preferredTime}\n`;
  }
  
  if (formData.experience) {
    body += `Experience Level: ${formData.experience}\n`;
  }
  
  if (formData.goals) {
    body += `Goals: ${formData.goals}\n`;
  }
  
  body += `\nTimestamp: ${new Date().toLocaleString()}`;
  
  MailApp.sendEmail({
    to: 'elprofesorito322@gmail.com',
    subject: subject,
    body: body
  });
  
  console.log('Admin notification sent successfully');
}

// Function to send user confirmation
function sendUserConfirmation(formData) {
  const subject = `Thank you for your ${formData.formType} submission - El Profesorito`;
  
  let body = `Dear ${formData.name},\n\n`;
  body += `Thank you for submitting your ${formData.formType}. We have received your information and will get back to you soon.\n\n`;
  
  if (formData.formType === 'Exam Registration') {
    body += `We will contact you within 24 hours to schedule your level assessment exam.\n\n`;
  } else {
    body += `We will respond to your message as soon as possible.\n\n`;
  }
  
  body += `If you have any questions, please don't hesitate to contact us.\n\n`;
  body += `Best regards,\nEl Profesorito Team`;
  
  MailApp.sendEmail({
    to: formData.email,
    subject: subject,
    body: body
  });
  
  console.log('User confirmation sent successfully');
}

// Test function to verify the script works
function doGet() {
  return ContentService
    .createTextOutput('Google Apps Script is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Test function to check email permissions
function testEmailPermissions() {
  try {
    MailApp.sendEmail({
      to: 'elprofesorito322@gmail.com',
      subject: 'Test Email from Google Apps Script',
      body: 'This is a test email to verify email permissions are working.'
    });
    console.log('Test email sent successfully - permissions are working!');
    return 'SUCCESS: Email permissions are working!';
  } catch (error) {
    console.error('Test email failed:', error);
    return 'ERROR: ' + error.toString();
  }
}

// Function to test the complete flow
function testCompleteFlow() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+1234567890',
    formType: 'Contact Form',
    message: 'This is a test message from Google Apps Script'
  };
  
  try {
    // Test saving to sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const timestamp = new Date().toISOString();
    const rowData = [
      timestamp,
      testData.formType,
      testData.name,
      testData.email,
      testData.phone,
      testData.message,
      '',
      '',
      ''
    ];
    sheet.appendRow(rowData);
    console.log('Test data saved to sheet');
    
    // Test emails
    sendAdminNotification(testData);
    sendUserConfirmation(testData);
    
    console.log('Complete test successful!');
    return 'SUCCESS: Complete test passed!';
  } catch (error) {
    console.error('Complete test failed:', error);
    return 'ERROR: ' + error.toString();
  }
}
