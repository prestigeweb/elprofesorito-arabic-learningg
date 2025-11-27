# Deployment Quick Start Checklist

A simple checklist to get your site live quickly.

## Before You Start

- [ ] Have your environment variable values ready:
  - Google Script URL
  - Contact phone number
  - Contact WhatsApp number
  - Contact email

## Step-by-Step (30-60 minutes)

### 1. Get a Domain (10 minutes)
- [ ] Go to Namecheap.com (or Google Domains)
- [ ] Search for your domain name
- [ ] Purchase domain ($10-15/year)
- [ ] Verify your email

### 2. Push Code to GitHub (5 minutes)
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 3. Deploy to Vercel (10 minutes)
- [ ] Go to vercel.com
- [ ] Sign up with GitHub
- [ ] Click "Add New Project"
- [ ] Select your repository
- [ ] Configure:
  - Framework: Vite
  - Build Command: `npm run build`
  - Output Directory: `dist`
- [ ] Add environment variables (all VITE_* variables)
- [ ] Click "Deploy"
- [ ] Wait for deployment (1-3 minutes)

### 4. Connect Domain (15 minutes)
- [ ] In Vercel: Settings → Domains
- [ ] Add your domain
- [ ] Copy the nameservers Vercel provides
- [ ] Go to your domain registrar
- [ ] Update nameservers to Vercel's
- [ ] Wait 24-48 hours for DNS propagation

### 5. Test (5 minutes)
- [ ] Visit your domain
- [ ] Test all pages
- [ ] Test contact forms
- [ ] Test on mobile

## Done! 🎉

Your site is now live at your domain.

## Need Help?

See the full guide: `docs/DEPLOYMENT_GUIDE.md`





