# Supabase Keep-Alive Setup Guide

## Problem
Supabase free tier automatically pauses databases after **7 days of inactivity**. This requires manual intervention to resume the database.

## Solution
We've implemented a **triple-layer keep-alive system** to prevent auto-pause:

---

## 🔧 Implemented Fixes

### 1. **Vercel Cron Jobs** (Internal)
- ✅ **Keep-Alive Cron**: Runs every **6 hours** → `/api/cron/keep-alive`
- ✅ **Health Check Cron**: Runs every **4 hours** → `/api/health`
- Both perform database queries to maintain activity

### 2. **Public Health Endpoint** (External Monitoring)
- ✅ **Endpoint**: `https://your-domain.vercel.app/api/health`
- ✅ **No authentication required** - can be pinged by external services
- ✅ **Returns**: Database status and response time

---

## 📋 Required Setup Steps

### Step 1: Set CRON_SECRET (Optional but Recommended)
Add this to your Vercel environment variables:

```bash
# In Vercel Dashboard → Settings → Environment Variables
CRON_SECRET=your-random-secret-here-min-32-chars
```

**Generate a secure secret:**
```bash
# Option 1: Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Option 2: OpenSSL
openssl rand -hex 32

# Option 3: Online
# Visit: https://generate-secret.vercel.app/32
```

### Step 2: Deploy Changes
```bash
git add .
git commit -m "Fix Supabase auto-pause with enhanced keep-alive"
git push
```

Vercel will automatically redeploy with the new cron schedules.

---

## 🌐 External Monitoring Setup (HIGHLY RECOMMENDED)

**Why?** Vercel cron jobs can sometimes fail or be unreliable on free tier. External monitoring provides a backup.

### Option A: UptimeRobot (FREE & Recommended)

1. **Sign up**: https://uptimerobot.com (Free plan: 50 monitors, 5-min intervals)

2. **Create Monitor**:
   - Monitor Type: `HTTP(s)`
   - Friendly Name: `TerraTrust Supabase Keep-Alive`
   - URL: `https://your-domain.vercel.app/api/health`
   - Monitoring Interval: `5 minutes`
   - Click **Create Monitor**

3. **Configure Alerts** (Optional):
   - Add email notifications if the endpoint goes down
   - This alerts you if there are database issues

### Option B: Cron-Job.org (FREE Alternative)

1. **Sign up**: https://cron-job.org/en/

2. **Create Cron Job**:
   - Title: `TerraTrust Keep-Alive`
   - URL: `https://your-domain.vercel.app/api/health`
   - Execution: Every `10 minutes` (or `5 minutes`)
   - Click **Create**

### Option C: BetterStack (FREE, Modern UI)

1. **Sign up**: https://betteruptime.com (Free tier available)

2. **Create Heartbeat Monitor**:
   - Name: `TerraTrust Health`
   - URL: `https://your-domain.vercel.app/api/health`
   - Interval: `5 minutes`
   - Period: `30 seconds`

---

## 🧪 Testing Your Setup

### Test 1: Manual Health Check
```bash
curl https://your-domain.vercel.app/api/health
```

**Expected Response:**
```json
{
  "status": "healthy",
  "database": "connected",
  "responseTime": "245ms",
  "timestamp": "2026-02-08T10:30:00.000Z",
  "checks": {
    "profiles": "pass",
    "records": "pass"
  }
}
```

### Test 2: Check Vercel Cron Logs
1. Go to Vercel Dashboard → Your Project
2. Click **Deployments** → Latest Deployment
3. Click **Functions** → View logs
4. Look for keep-alive execution logs (should appear within 6 hours)

### Test 3: Monitor External Service
- After setting up UptimeRobot/Cron-Job.org, check the dashboard
- You should see successful pings every 5-10 minutes

---

## 📊 Monitoring & Verification

### Check Cron Execution
**Vercel Dashboard**:
```
Deployments → [Your Deployment] → Logs
```

Look for:
```
🔄 Keep-alive cron started: [timestamp]
✅ Keep-alive cron completed: { profiles: 'ok', records: 'ok', ... }
```

### Check External Monitor Status
- **UptimeRobot**: Dashboard shows uptime percentage (should be >99%)
- **Cron-Job.org**: Execution history shows successful runs

---

## 🎯 Expected Behavior

With this setup:
- ✅ Vercel crons ping database every **4-6 hours**
- ✅ External monitor pings every **5-10 minutes**
- ✅ Supabase sees activity **~288 times per day** (with 5-min external monitoring)
- ✅ **No more auto-pause!** 🎉

---

## 🚨 Troubleshooting

### Still Pausing?

1. **Check Vercel Logs**: Ensure cron jobs are executing
   ```
   Vercel Dashboard → Functions → Filter by "/api/cron/keep-alive"
   ```

2. **Check External Monitor**: Verify it's actually sending requests
   - UptimeRobot: Check "Response Time Graph"
   - Should show consistent activity

3. **Verify Database Connection**: 
   ```bash
   curl https://your-domain.vercel.app/api/health
   ```
   - Should return `"status": "healthy"`

4. **Check Supabase Settings**:
   - Go to Supabase Dashboard → Settings → Database
   - Verify your project is on Free tier (pausing is normal)
   - Consider upgrading to Pro ($25/month) for no auto-pause

### CRON_SECRET Issues

If you get `401 Unauthorized` on `/api/cron/keep-alive`:
1. Verify `CRON_SECRET` is set in Vercel environment variables
2. Redeploy after adding the variable
3. The `/api/health` endpoint should still work (no auth required)

---

## 💡 Best Configuration

**Recommended Setup:**
```
Vercel Crons:        Every 4-6 hours (built-in redundancy)
External Monitor:     Every 5 minutes (UptimeRobot free tier)
Total Daily Pings:    ~288 database interactions
Auto-Pause Risk:      ELIMINATED ✅
```

---

## 📝 Maintenance

- **Monthly**: Check UptimeRobot/external monitor dashboard (1 minute)
- **Quarterly**: Review Vercel cron logs to ensure execution
- **Yearly**: Consider upgrading to Supabase Pro if project grows

---

## ⚡ Quick Start Checklist

- [ ] Set `CRON_SECRET` in Vercel environment variables
- [ ] Deploy changes to Vercel
- [ ] Sign up for UptimeRobot (or cron-job.org)
- [ ] Create monitor for `https://your-domain.vercel.app/api/health`
- [ ] Set interval to 5-10 minutes
- [ ] Test with `curl https://your-domain.vercel.app/api/health`
- [ ] Wait 24 hours and verify Supabase hasn't paused
- [ ] Check monitor dashboard for successful pings

---

## 🎉 Result

**Your Supabase database will stay active indefinitely!** No more weekly manual resumes.

Questions? Check the logs or test the endpoints above.
