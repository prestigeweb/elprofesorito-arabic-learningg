# Environment Variables Setup

This project uses environment variables to securely manage sensitive configuration and credentials.

## Setup Instructions

1. **Copy the example file:**
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` file** with your actual values:
   ```env
   # Google Sheets Integration
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbyli4IjDM4i9ylTq-2EsMgkej_2vzhNl1UAnZ8FPKZMNAsEuX4egc8nIKYVwb2ijKTUvw/exec

   # Contact Information
   VITE_CONTACT_PHONE=+20 100 123 4567
   VITE_CONTACT_WHATSAPP=201001234567
   VITE_CONTACT_EMAIL=info@elprofesoritoeg.com

   # Development Settings
   VITE_APP_ENV=development
   ```

## Environment Variables

### Required Variables

- **`VITE_GOOGLE_SCRIPT_URL`**: The URL of your deployed Google Apps Script Web App
  - Get this from your Google Apps Script deployment
  - See `docs/GOOGLE_SHEETS_SETUP.md` for setup instructions

- **`VITE_CONTACT_PHONE`**: Contact phone number (with country code)
  - Format: `+[country code][number]`
  - Example: `+20 100 123 4567`

- **`VITE_CONTACT_WHATSAPP`**: WhatsApp number (digits only, no spaces or special characters)
  - Format: `[country code][number]`
  - Example: `201001234567`

- **`VITE_CONTACT_EMAIL`**: Contact email address
  - Example: `info@elprofesoritoeg.com`

### Optional Variables

- **`VITE_APP_ENV`**: Application environment
  - Values: `development`, `production`, `staging`
  - Defaults to `development` if not set

## Security Notes

⚠️ **Important Security Considerations:**

1. **Never commit `.env` file** - It's already in `.gitignore`
2. **Use `.env.example`** as a template for documentation
3. **Different environments** should have different `.env` files:
   - `.env.development` - Local development
   - `.env.production` - Production deployment
   - `.env.staging` - Staging environment

4. **Vite Environment Variables:**
   - All client-side environment variables must be prefixed with `VITE_`
   - Variables without `VITE_` prefix are not exposed to the client
   - This is a security feature to prevent accidentally exposing server-side secrets

## Accessing Environment Variables

Environment variables are accessed through the type-safe utility:

```typescript
import { 
  googleScriptUrl, 
  contactPhone, 
  contactWhatsapp, 
  contactEmail,
  isDevelopment,
  isProduction 
} from '@/lib/env';
```

The `env.ts` file validates that all required variables are set and provides helpful error messages if any are missing.

## Deployment

When deploying to production:

1. Set environment variables in your hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables
   - Other platforms: Check their documentation

2. Ensure all `VITE_*` variables are set in production

3. Restart/redeploy your application after adding environment variables

## Troubleshooting

**Error: "VITE_GOOGLE_SCRIPT_URL is required but not set"**
- Make sure you have a `.env` file in the project root
- Verify the variable name is exactly `VITE_GOOGLE_SCRIPT_URL`
- Restart your development server after creating/updating `.env`

**Variables not updating:**
- Restart the Vite development server
- Clear browser cache
- Verify the variable name starts with `VITE_`

