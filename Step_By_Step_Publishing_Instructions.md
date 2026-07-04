# Step-by-Step Instructions: Publish Everything to Your Blogger Blog

## BEFORE YOU START — IMPORTANT TIMING

- Your next AdSense review is available on: **July 7, 2026**
- Do ALL of this before that date
- Estimated time: **4-6 hours of work**

---

## PART 1: PUBLISH THE 3 ESSENTIAL PAGES (Do This First!)

Google AdSense requires these 3 pages. You MUST add them as **Pages** (not Posts).

### How to Add a Page in Blogger:

1. Go to your Blogger dashboard: https://www.blogger.com
2. Select your blog: **unifiedfarmblm.blogspot.com**
3. In the left menu, click **"Pages"**
4. Click **"New Page"**
5. Give the page a title
6. In the editor, click the ** pencil icon ** (top left of the text box) and select **"HTML View"**
7. Copy and paste the HTML content from the file
8. Click **"Publish"**
9. Repeat for all 3 pages

### Pages to Create:

| Page | Title | File to Copy |
|------|-------|-------------|
| 1 | About Us | Page_About_Us.html |
| 2 | Contact Us | Page_Contact_Us.html |
| 3 | Privacy Policy | Page_Privacy_Policy.html |

### Add Pages to Navigation Menu:

1. Go to **Layout** in your Blogger dashboard
2. Find the **Pages** gadget (or add one)
3. Click **Edit**
4. Select the 3 pages you just created
5. Arrange them in order: About Us, Contact Us, Privacy Policy
6. Save

---

## PART 2: PUBLISH THE 8 NEW BLOG POSTS

You already have 2 posts. You need to add 8 more. Here is the order to publish them:

### How to Add a Post in Blogger:

1. In Blogger dashboard, click **"Posts"** in left menu
2. Click **"New Post"**
3. Enter the **Title** (exactly as shown below)
4. In the post editor, click the **pencil icon** and select **"HTML View"**
5. Copy and paste the HTML content from the file
6. Add **Labels** (tags) — see below for each post
7. Set a **permalink** (custom URL) if desired
8. Click **"Publish"**
9. Repeat for all 8 posts

### Posts to Publish:

| # | Post Title | File to Copy | Labels/Tags |
|---|-----------|-------------|-------------|
| 3 | Understanding Chicken Vaccination Schedules in Uganda: Complete 2026 Guide | Blog_Post_03_Vaccination.html | vaccination, chicken health, Uganda poultry |
| 4 | Chicken Feeding Guide: What to Feed Your Layers and Broilers in Uganda | Blog_Post_04_Feeding.html | feeding, nutrition, poultry feed, Uganda |
| 5 | How to Build a Chicken Coop on a Budget Using Local Materials | Blog_Post_05_Coop_Building.html | chicken coop, DIY, housing, budget farming |
| 6 | Newcastle Disease in Chickens: Symptoms, Prevention, and Treatment | Blog_Post_06_Newcastle.html | Newcastle disease, chicken health, prevention |
| 7 | Starting a Poultry Business in Uganda: Licenses, Costs, and Profit Guide | Blog_Post_07_Business.html | poultry business, Uganda, startup, profits |
| 8 | Broiler vs Layer Farming: Which is More Profitable in Uganda? | Blog_Post_08_Broiler_vs_Layer.html | broiler, layer, comparison, profitability |
| 9 | Common Chicken Diseases in Uganda and How to Treat Them Naturally | Blog_Post_09_Diseases.html | diseases, natural treatment, chicken health |
| 10 | From Farm to Market: How to Sell Your Eggs and Chicken in Uganda | Blog_Post_10_Market.html | marketing, selling eggs, Uganda poultry |

---

## PART 3: ADD ADDITIONAL BLOGGER SETTINGS

### Add Contact Form:

1. Go to **Layout**
2. Find where you want the contact form (sidebar or contact page)
3. Click **"Add a Gadget"**
4. Select **"Contact Form"**
5. Save

### Enable HTTPS:

1. Go to **Settings** > **Basic**
2. Find **"HTTPS"**
3. Select **"Yes"** for HTTPS Availability and HTTPS Redirect
4. Save

### Update Blog Description:

1. Go to **Settings** > **Basic**
2. Update the blog description to:
   ```
   Unified Farm BLM - Premium poultry farming tips, guides, and products from Mpigi, Uganda. Fresh organic eggs, day-old chicks, and expert farming advice.
   ```
3. Save

---

## PART 4: UPDATE YOUR MAIN WEBSITE (unifiedfarmblm.com)

### Fix 1: Create the /about page

Your website navigation links to `/about` which shows 404. You need to either:

**Option A (Recommended):** Create a proper `/about` page
- Add a new page on your website
- Copy the content from Page_About_Us.html
- Save it at the URL: `unifiedfarmblm.com/about`

**Option B (Quick fix):** Change the navigation link
- Find where your navigation is coded
- Change the "About Us" link from `/about` to `/about-us.html`

### Fix 2: Redirect /farm/ to homepage

Add this redirect rule to your server:

**If using Apache (.htaccess file):**
```
Redirect 301 /farm/ https://www.unifiedfarmblm.com/
```

**If using Nginx:**
```
rewrite ^/farm/$ https://www.unifiedfarmblm.com/ permanent;
```

If you cannot edit server config, ask your hosting provider to add this redirect.

### Fix 3: Update sitemap.xml

Replace your current sitemap with this corrected version:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.unifiedfarmblm.com/</loc>
    <lastmod>2026-07-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.unifiedfarmblm.com/about</loc>
    <lastmod>2026-07-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.unifiedfarmblm.com/contact</loc>
    <lastmod>2026-07-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.unifiedfarmblm.com/privacy</loc>
    <lastmod>2026-07-05</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://www.unifiedfarmblm.com/blog/</loc>
    <lastmod>2026-07-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

### Fix 4: Submit Updated Sitemap to Google

1. Go to https://search.google.com/search-console
2. Select your property (unifiedfarmblm.com)
3. Go to **Sitemaps** in the left menu
4. Enter your sitemap URL: `sitemap.xml`
5. Click **Submit**

### Fix 5: Validate the 404 Fix in Search Console

1. In Google Search Console, go to **Pages**
2. Find the **"Not found (404)"** error
3. Click **"Validate Fix"**
4. Google will recheck the page

---

## PART 5: BEFORE YOU REAPPLY FOR ADSENSE

### Final Checklist:

- [ ] About Us page published on blog
- [ ] Contact Us page published on blog
- [ ] Privacy Policy page published on blog
- [ ] Navigation menu shows all 3 pages
- [ ] All 8 new posts published (10 total posts)
- [ ] Each post has labels/tags
- [ ] HTTPS enabled on blog
- [ ] Blog description updated
- [ ] /about page fixed on main website
- [ ] /farm/ redirect set up
- [ ] Sitemap updated and submitted
- [ ] 404 error validated in Search Console

### How to Reapply for AdSense:

1. Go to https://www.google.com/adsense/start
2. Sign in to your AdSense account
3. Go to **Sites**
4. Find unifiedfarmblm.blogspot.com
5. Click **"Request Review"**
6. Wait 2-14 days for Google's response

---

## FILES YOU HAVE (Quick Reference)

| File | What It Is |
|------|-----------|
| Blog_Post_03_Vaccination.html | Post 3: Vaccination guide |
| Blog_Post_04_Feeding.html | Post 4: Feeding guide |
| Blog_Post_05_Coop_Building.html | Post 5: Coop building |
| Blog_Post_06_Newcastle.html | Post 6: Newcastle disease |
| Blog_Post_07_Business.html | Post 7: Poultry business |
| Blog_Post_08_Broiler_vs_Layer.html | Post 8: Broiler vs layer |
| Blog_Post_09_Diseases.html | Post 9: Common diseases |
| Blog_Post_10_Market.html | Post 10: Selling guide |
| Page_About_Us.html | About Us page |
| Page_Contact_Us.html | Contact Us page |
| Page_Privacy_Policy.html | Privacy Policy page |
| Step_By_Step_Publishing_Instructions.md | This instruction file |

---

## TIPS FOR SUCCESS

1. **Publish posts over 2-3 days** — don't publish all at once (looks more natural)
2. **Add images to posts** — Google loves posts with images. Add photos of chickens, eggs, your farm
3. **Share posts on social media** — get some traffic before AdSense review
4. **Reply to comments** — engagement shows Google your site is active
5. **Write one more original post** — if you have time, add a personal story from your farm

---

## QUESTIONS?

If you get stuck on any step, the issue is most likely:
- **Cannot find HTML View in Blogger:** Look for the pencil icon in the top-left corner of the post editor
- **Pages not showing in menu:** Make sure you added the Pages gadget in Layout
- **Cannot edit .htaccess:** Contact your hosting provider, they can add the redirect for you

Good luck! Follow these steps exactly and your AdSense approval chances are very high.
