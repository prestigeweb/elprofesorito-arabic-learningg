import { googleScriptUrl } from './env';

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  preferredTime?: string;
  experience?: string;
  goals?: string;
  formType: 'contact' | 'exam';
  timestamp: string;
}

export const saveToGoogleSheets = async (data: FormData): Promise<boolean> => {
  try {
    // Check if Google Script URL is configured
    if (!googleScriptUrl) {
      console.warn('Google Script URL is not configured. Cannot save to Google Sheets.');
      return false;
    }

    // Prepare the data for Google Sheets
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('message', data.message || '');
    formData.append('preferredTime', data.preferredTime || '');
    formData.append('experience', data.experience || '');
    formData.append('goals', data.goals || '');
    formData.append('formType', data.formType);
    formData.append('timestamp', data.timestamp);

    console.log('Saving to Google Sheets:', data);

    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Data saved to Google Sheets successfully');
      return true;
    } else {
      console.error('Failed to save to Google Sheets:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    return false;
  }
};

// Alternative method using JSON payload
export const saveToGoogleSheetsJSON = async (data: FormData): Promise<boolean> => {
  try {
    // Check if Google Script URL is configured
    if (!googleScriptUrl) {
      console.warn('Google Script URL is not configured. Cannot save to Google Sheets.');
      return false;
    }

    console.log('Saving to Google Sheets (JSON):', data);

    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Data saved to Google Sheets successfully');
      return true;
    } else {
      console.error('Failed to save to Google Sheets:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    return false;
  }
};

// Mock function for testing (when Google Script is not set up yet)
export const saveToGoogleSheetsMock = async (data: FormData): Promise<boolean> => {
  try {
    console.log('Mock: Saving to Google Sheets:', data);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate success (you can change this to false to test error handling)
    const success = Math.random() > 0.1; // 90% success rate for testing
    
    if (success) {
      console.log('Mock: Data saved successfully');
      return true;
    } else {
      console.log('Mock: Simulated failure');
      return false;
    }
  } catch (error) {
    console.error('Mock: Error saving data:', error);
    return false;
  }
};
