# Deploy to elprofesorito.com (GoDaddy Domain)

This guide will help you deploy your project to **elprofesorito.com** using Vercel (free hosting) connected to your GoDaddy domain.

## Prerequisites

- ✅ Project builds successfully
- ✅ GoDaddy domain: elprofesorito.com
- ⬜ GitHub account (free - sign up at https://github.com)
- ⬜ Vercel account (free - sign up at https://vercel.com)

---

## Step 1: Push Code to GitHub (5 minutes)

If your code isn't on GitHub yet:

1. Go to https://github.com and sign up (if you don't have an account)
2. Create a new repository (click the "+" icon → "New repository")
   - Name: `elprofesorito` (or any name you prefer)
   - Set to "Public" or "Private" (your choice)
   - Click "Create repository"

3. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit - ready for deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/elprofesorito.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## Step 2: Deploy to Vercel (10 minutes)

### 2.1 Create Vercel Account

1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub" (easiest option)
4. Authorize Vercel to access your GitHub account

### 2.2 Deploy Your Project

1. In Vercel dashboard, click **"Add New Project"** or **"Import Project"**
2. Select your GitHub repository (`elprofesorito`)
3. Configure the project settings:
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Add Environment Variables** (IMPORTANT):
   Click "Environment Variables" and add these:

   ```
   VITE_SUPABASE_URL = https://0ec90b57d6e95fcbda19832f.supabase.co
   VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJib2x0IiwicmVmIjoiMGVjOTBiNTdkNmU5NWZjYmRhMTk4MzJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4ODE1NzQsImV4cCI6MTc1ODg4MTU3NH0.9I8-U0x86Ak8t2DGaIk0HfvTSLsAyzdnz-Nw00mMkKw
   ```

5. Click **"Deploy"**

6. Wait 2-3 minutes for the build to complete

7. You'll get a temporary URL like: `your-project.vercel.app`
   - Click on it to test your site
   - Make sure everything works!

---

## Step 3: Connect Your GoDaddy Domain (15 minutes)

### 3.1 Add Domain in Vercel

1. In your Vercel project dashboard, go to **"Settings"** → **"Domains"**
2. Click **"Add"** or enter your domain
3. Type: `elprofesorito.com`
4. Click **"Add"**
5. Also add: `www.elprofesorito.com` (recommended)

Vercel will show you DNS configuration instructions.

### 3.2 Configure DNS in GoDaddy

Now you need to update your GoDaddy DNS settings:

#### Option A: Using CNAME Record (Recommended - Faster Setup)

1. Log in to your GoDaddy account: https://dcc.godaddy.com/
2. Go to **"My Products"**
3. Find your domain `elprofesorito.com` and click **"DNS"**
4. Scroll to **"Records"** section

5. **For the root domain (@):**
   - Click **"Add"**
   - Type: **A**
   - Name: **@**
   - Value: **76.76.21.21** (Vercel's IP - check Vercel for current IP)
   - TTL: **600 seconds** (or default)
   - Click **"Save"**

6. **For www subdomain:**
   - Click **"Add"**
   - Type: **CNAME**
   - Name: **www**
   - Value: **cname.vercel-dns.com**
   - TTL: **1 Hour** (or default)
   - Click **"Save"**

#### Option B: Using Vercel Nameservers (Alternative Method)

If you prefer to let Vercel manage all DNS:

1. In Vercel, when adding the domain, select **"Use Vercel Nameservers"**
2. Vercel will show you nameservers like:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
3. In GoDaddy:
   - Go to your domain settings
   - Find **"Nameservers"** section
   - Click **"Change"**
   - Select **"I'll use my own nameservers"**
   - Enter Vercel's nameservers
   - Click **"Save"**

### 3.3 Wait for DNS Propagation

- DNS changes take **24-48 hours** to propagate worldwide
- Usually works within **2-4 hours** in practice
- You can check status at: https://www.whatsmydns.net
  - Enter: `elprofesorito.com`
  - Select type: **A** or **CNAME**
  - Check if it points to Vercel

### 3.4 SSL Certificate (Automatic)

- Vercel automatically provides a **free SSL certificate**
- Your site will be accessible via `https://elprofesorito.com`
- SSL certificate is issued automatically once DNS is configured
- This usually happens within **minutes to hours** after DNS propagation

---

## Step 4: Verify Everything Works

Once DNS has propagated (2-24 hours):

### Test Your Site:
- ✅ Visit `https://elprofesorito.com`
- ✅ Visit `https://www.elprofesorito.com` (should redirect)
- ✅ Test all pages and navigation
- ✅ Test contact forms
- ✅ Test on mobile devices
- ✅ Verify images load correctly
- ✅ Check all links work

---

## Step 5: Automatic Deployments (Bonus!)

Now, whenever you push changes to GitHub, Vercel will automatically redeploy:

```bash
# Make your changes
git add .
git commit -m "Update content"
git push origin main
```

Vercel will:
1. Detect the push
2. Build your project
3. Deploy automatically (1-3 minutes)
4. Your site at elprofesorito.com will be updated!

---

## Troubleshooting

### Domain Not Working After 48 Hours

1. Check DNS propagation: https://www.whatsmydns.net
2. Verify DNS records in GoDaddy match what Vercel shows
3. In Vercel, go to Domains and check for any error messages
4. Contact Vercel support (they respond quickly!)

### "Invalid Configuration" in Vercel

- Make sure you added both `elprofesorito.com` and `www.elprofesorito.com`
- Verify DNS records are saved in GoDaddy
- Wait at least 10-15 minutes after adding DNS records

### Environment Variables Not Working

1. In Vercel, go to **Settings** → **Environment Variables**
2. Make sure all variables start with `VITE_`
3. Click **"Redeploy"** after adding/changing variables
4. Check variable names match exactly (case-sensitive)

### SSL Certificate Not Working

- Usually resolves automatically within 24 hours
- Make sure DNS is pointing to Vercel correctly
- Check Vercel dashboard for SSL status

---

## Quick Reference: DNS Records for GoDaddy

Copy these exact values into GoDaddy DNS:

| Type  | Name | Value                | TTL     |
|-------|------|----------------------|---------|
| A     | @    | 76.76.21.21          | 600 sec |
| CNAME | www  | cname.vercel-dns.com | 1 Hour  |

**Note:** The IP address (76.76.21.21) may change. Always use the values Vercel provides in your dashboard.

---

## Summary Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project deployed to Vercel
- [ ] Environment variables added in Vercel
- [ ] Tested on temporary Vercel URL
- [ ] Domain added in Vercel (`elprofesorito.com` and `www.elprofesorito.com`)
- [ ] DNS records added in GoDaddy
- [ ] Waited for DNS propagation (24-48 hours)
- [ ] SSL certificate active (automatic)
- [ ] Site tested at https://elprofesorito.com
- [ ] Automatic deployments working

---

## Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **GoDaddy DNS Help:** https://www.godaddy.com/help/manage-dns-records-680
- **Check DNS:** https://www.whatsmydns.net
- **Vercel Support:** https://vercel.com/support

---

## Cost

- ✅ **Vercel Hosting:** FREE (generous free tier)
- ✅ **SSL Certificate:** FREE (included)
- ✅ **Bandwidth:** FREE (100GB/month on free tier)
- 💰 **Domain:** Already paid for at GoDaddy

**Total additional cost: $0/month**

---

## Next Steps After Deployment

1. Test your site thoroughly
2. Share the link with others for feedback
3. Set up Google Analytics (optional)
4. Monitor site performance in Vercel dashboard
5. Make updates by pushing to GitHub

**Congratulations! Your site will be live at https://elprofesorito.com! 🎉**
