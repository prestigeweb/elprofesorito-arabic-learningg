# Complete Deployment Guide - First Time Setup

This guide will walk you through getting a domain, choosing a hosting provider, and deploying your Arabic learning website step by step.

## Table of Contents
1. [Domain Registration](#1-domain-registration)
2. [Choosing a Hosting Provider](#2-choosing-a-hosting-provider)
3. [Pre-Deployment Checklist](#3-pre-deployment-checklist)
4. [Deployment Options](#4-deployment-options)
5. [Connecting Your Domain](#5-connecting-your-domain)
6. [Post-Deployment Steps](#6-post-deployment-steps)

---

## 1. Domain Registration

### Step 1.1: Choose a Domain Registrar

Popular domain registrars (all are beginner-friendly):
- **Namecheap** (Recommended for beginners) - https://www.namecheap.com
- **Google Domains** - https://domains.google
- **GoDaddy** - https://www.godaddy.com
- **Cloudflare** - https://www.cloudflare.com/products/registrar

### Step 1.2: Search for Your Domain

1. Go to your chosen registrar's website
2. Enter your desired domain name (e.g., `elprofesorito-arabic.com` or `elprofesoritoeg.com`)
3. Check availability
4. If available, add it to your cart

### Step 1.3: Purchase Your Domain

1. Select the domain extension (.com, .org, .net, etc.)
   - **.com** is most common and trusted
   - Consider country-specific extensions if targeting a specific region
2. Choose registration period (1-10 years)
   - Start with 1 year if unsure
3. Add domain privacy protection (recommended - hides your personal info)
4. Complete the purchase

**Cost:** Typically $10-15/year for .com domains

### Step 1.4: Verify Your Email

After purchase, verify your email address with the registrar. This is required to manage your domain.

---

## 2. Choosing a Hosting Provider

For a React/Vite static website, you have several excellent free/affordable options:

### Option A: Vercel (Recommended - Easiest) ⭐

**Pros:**
- Free tier with generous limits
- Automatic deployments from GitHub
- Built-in SSL certificates
- Fast global CDN
- Very beginner-friendly

**Cons:**
- Free tier has some limitations (fine for most sites)

**Best for:** Beginners, small to medium websites

### Option B: Netlify

**Pros:**
- Free tier available
- Easy drag-and-drop deployment
- Automatic SSL
- Good documentation

**Cons:**
- Slightly less intuitive than Vercel for beginners

**Best for:** Static sites, form handling

### Option C: Cloudflare Pages

**Pros:**
- Free tier
- Excellent performance
- Great if you use Cloudflare for domain

**Cons:**
- Less beginner-friendly interface

**Best for:** Users already using Cloudflare

### Option D: GitHub Pages

**Pros:**
- Completely free
- Simple if you use GitHub

**Cons:**
- Requires GitHub account
- Less features than other options

**Best for:** Developers comfortable with GitHub

---

## 3. Pre-Deployment Checklist

Before deploying, make sure you have:

- [ ] Domain purchased and verified
- [ ] GitHub account (if using Vercel/Netlify)
- [ ] All environment variables ready (see below)
- [ ] Project builds successfully locally

### Prepare Environment Variables

You'll need these values for production:

```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbyli4IjDM4i9ylTq-2EsMgkej_2vzhNl1UAnZ8FPKZMNAsEuX4egc8nIKYVwb2ijKTUvw/exec
VITE_CONTACT_PHONE=+20 100 123 4567
VITE_CONTACT_WHATSAPP=201001234567
VITE_CONTACT_EMAIL=info@yourdomain.com
VITE_APP_ENV=production
```

**Important:** Replace with your actual values!

---

## 4. Deployment Options

### Option A: Deploy with Vercel (Recommended)

#### Step 4.1: Prepare Your Code

1. Make sure your code is on GitHub:
   ```bash
   # If not already on GitHub, create a repository and push:
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. Test your build locally:
   ```bash
   npm run build
   ```
   This should create a `dist` folder. If it works, you're ready!

#### Step 4.2: Sign Up for Vercel

1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub" (easiest option)
4. Authorize Vercel to access your GitHub account

#### Step 4.3: Deploy Your Project

1. In Vercel dashboard, click "Add New Project"
2. Select your GitHub repository (`elprofesorito-arabic-learning`)
3. Configure your project:
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Add Environment Variables:**
   - Click "Environment Variables"
   - Add each variable:
     - `VITE_GOOGLE_SCRIPT_URL` = (your value)
     - `VITE_CONTACT_PHONE` = (your value)
     - `VITE_CONTACT_WHATSAPP` = (your value)
     - `VITE_CONTACT_EMAIL` = (your value)
     - `VITE_APP_ENV` = `production`

5. Click "Deploy"

#### Step 4.4: Wait for Deployment

- Vercel will build and deploy your site
- This takes 1-3 minutes
- You'll get a URL like: `your-project.vercel.app`

#### Step 4.5: Test Your Site

1. Visit the provided URL
2. Test all features:
   - Navigation
   - Contact forms
   - All pages load correctly

---

### Option B: Deploy with Netlify

#### Step 4.1: Sign Up for Netlify

1. Go to https://www.netlify.com
2. Click "Sign up"
3. Choose "Sign up with GitHub"

#### Step 4.2: Deploy Your Project

1. Click "Add new site" → "Import an existing project"
2. Select your GitHub repository
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click "Show advanced" and add environment variables:
   - Add all `VITE_*` variables from your `.env` file
5. Click "Deploy site"

#### Step 4.3: Test Your Site

- Netlify will provide a URL like: `your-project.netlify.app`
- Test everything works

---

## 5. Connecting Your Domain

### Step 5.1: Get Your Hosting URL

- **Vercel:** Your site URL is `your-project.vercel.app`
- **Netlify:** Your site URL is `your-project.netlify.app`

### Step 5.2: Add Domain in Hosting Platform

#### For Vercel:

1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Enter your domain (e.g., `elprofesoritoeg.com`)
4. Click "Add"
5. Vercel will show you DNS records to add

#### For Netlify:

1. Go to "Site settings" → "Domain management"
2. Click "Add custom domain"
3. Enter your domain
4. Follow the instructions

### Step 5.3: Configure DNS Records

You need to add DNS records at your domain registrar. Here's how:

#### If using Vercel:

1. **Option A: Use Vercel's Nameservers (Easiest)**
   - In Vercel, you'll see nameservers like:
     - `ns1.vercel-dns.com`
     - `ns2.vercel-dns.com`
   - Go to your domain registrar
   - Find "DNS Settings" or "Nameservers"
   - Replace existing nameservers with Vercel's
   - Save and wait 24-48 hours for propagation

2. **Option B: Add A/CNAME Records (More Control)**
   - In your domain registrar's DNS settings, add:
     - **Type:** `A` or `CNAME`
     - **Name:** `@` (for root domain) or `www` (for www subdomain)
     - **Value:** Vercel will provide this (usually an IP or CNAME target)
   - For `www` subdomain, add:
     - **Type:** `CNAME`
     - **Name:** `www`
     - **Value:** `cname.vercel-dns.com`

#### If using Netlify:

1. Netlify will provide DNS records
2. Go to your domain registrar's DNS settings
3. Add the records Netlify provides:
   - Usually an `A` record for root domain
   - A `CNAME` record for `www` subdomain

### Step 5.4: Wait for DNS Propagation

- DNS changes can take 24-48 hours to propagate globally
- You can check status at: https://www.whatsmydns.net
- Enter your domain and check if it points to your hosting

### Step 5.5: SSL Certificate (Automatic)

- Both Vercel and Netlify automatically provide free SSL certificates
- Your site will be accessible via `https://yourdomain.com`
- This happens automatically once DNS is configured

---

## 6. Post-Deployment Steps

### Step 6.1: Verify Everything Works

Test on your actual domain:
- [ ] Site loads at `https://yourdomain.com`
- [ ] All pages work
- [ ] Contact forms submit correctly
- [ ] Images load properly
- [ ] Mobile view works
- [ ] All links work

### Step 6.2: Set Up Redirects (Optional but Recommended)

Set up redirects so both `yourdomain.com` and `www.yourdomain.com` work:

**In Vercel:**
- Go to Settings → Domains
- Add both `yourdomain.com` and `www.yourdomain.com`
- Vercel handles redirects automatically

**In Netlify:**
- Add both domains
- Set one as primary (redirects the other)

### Step 6.3: Update Environment Variables if Needed

If you need to change any environment variables:
1. Go to your hosting platform's dashboard
2. Find "Environment Variables" or "Site Settings"
3. Update the values
4. Redeploy (usually automatic, or click "Redeploy")

### Step 6.4: Set Up Automatic Deployments

Both Vercel and Netlify automatically deploy when you push to GitHub:

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```
3. Your site will automatically rebuild and deploy (usually in 1-3 minutes)

### Step 6.5: Monitor Your Site

- Check your hosting dashboard regularly
- Set up email notifications for deployment status
- Monitor site uptime (both platforms provide this)

---

## Troubleshooting

### Domain Not Working After 48 Hours

1. Check DNS propagation: https://www.whatsmydns.net
2. Verify DNS records are correct in your registrar
3. Contact your hosting provider's support

### Site Shows "Not Found" or 404

1. Check that build completed successfully
2. Verify environment variables are set correctly
3. Check that `dist` folder is being deployed
4. Review build logs in your hosting dashboard

### Environment Variables Not Working

1. Make sure all variables start with `VITE_`
2. Redeploy after adding/changing variables
3. Check variable names match exactly (case-sensitive)

### SSL Certificate Issues

- Usually resolves automatically within 24 hours
- If not, contact hosting support
- Make sure DNS is correctly configured

---

## Quick Reference: Common Commands

```bash
# Build your project locally
npm run build

# Test the production build locally
npm run preview

# Check if build works before deploying
npm run build && npm run preview
```

---

## Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Vite Deployment Guide:** https://vitejs.dev/guide/static-deploy.html

---

## Summary Checklist

- [ ] Domain purchased
- [ ] Hosting account created (Vercel/Netlify)
- [ ] Code pushed to GitHub
- [ ] Project deployed to hosting platform
- [ ] Environment variables configured
- [ ] Domain connected to hosting
- [ ] DNS records configured
- [ ] SSL certificate active (automatic)
- [ ] Site tested and working
- [ ] Automatic deployments enabled

**Congratulations! Your site should now be live at your domain! 🎉**

