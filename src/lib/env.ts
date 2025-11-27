/**
 * Environment variables configuration
 * 
 * All environment variables must be prefixed with VITE_ to be exposed to the client.
 * See: https://vitejs.dev/guide/env-and-mode.html
 */

interface EnvConfig {
  googleScriptUrl: string;
  contactPhone: string;
  contactWhatsapp: string;
  contactEmail: string;
  appEnv: string;
}

/**
 * Type-safe environment variable accessor
 * Provides defaults if environment variables are missing to allow app to load
 * Logs warnings in console for missing variables
 */
function getEnv(): EnvConfig {
  const googleScriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';
  const contactPhone = import.meta.env.VITE_CONTACT_PHONE || '';
  const contactWhatsapp = import.meta.env.VITE_CONTACT_WHATSAPP || '';
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || '';
  const appEnv = import.meta.env.VITE_APP_ENV || import.meta.env.MODE || 'development';

  // Log warnings for missing environment variables instead of throwing errors
  // This allows the app to load even if variables aren't set yet
  if (!googleScriptUrl) {
    console.warn('⚠️ VITE_GOOGLE_SCRIPT_URL is not set. Google Sheets integration will not work.');
  }

  if (!contactPhone) {
    console.warn('⚠️ VITE_CONTACT_PHONE is not set. Contact phone features may not work.');
  }

  if (!contactWhatsapp) {
    console.warn('⚠️ VITE_CONTACT_WHATSAPP is not set. WhatsApp features may not work.');
  }

  if (!contactEmail) {
    console.warn('⚠️ VITE_CONTACT_EMAIL is not set. Contact email features may not work.');
  }

  return {
    googleScriptUrl,
    contactPhone,
    contactWhatsapp,
    contactEmail,
    appEnv,
  };
}

// Export the validated environment configuration
export const env = getEnv();

// Export individual values for convenience
export const {
  googleScriptUrl,
  contactPhone,
  contactWhatsapp,
  contactEmail,
  appEnv,
} = env;

// Type guard for development mode
export const isDevelopment = () => appEnv === 'development';

// Type guard for production mode
export const isProduction = () => appEnv === 'production';


