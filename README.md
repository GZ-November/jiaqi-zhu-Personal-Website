# Personal Website

Built with vanilla HTML/CSS/JS. Deploy to GitHub Pages.

## File Structure

```
├── index.html              # Homepage (single-page: About, Resume, Portfolio, Research preview, Blog preview, Contact)
├── blog/
│   ├── index.html          # Blog listing page with category filters
│   └── posts/
│       ├── template.html   # Template for new blog posts (copy & edit)
│       └── post-1.html     # Sample blog post
├── research/
│   └── index.html          # Research reports page
└── .nojekyll               # For GitHub Pages
```

## Sections

### Homepage
- **Hero** — Name, tagline, CTA
- **Skills Bar** — Key skills
- **About** — Personal bio with highlights
- **Resume** — Work experience timeline
- **Portfolio** — Project cards
- **Research** — Preview of latest research reports (links to `/research/`)
- **Blog** — Latest posts preview (links to `/blog/`)
- **Contact** — Contact info + social links

### Blog Page (`/blog/`)
- Category filtering: Engineering / Thoughts / Tutorial / Open Source / Review
- Click a category pill to filter posts
- Each post links to its own page in `blog/posts/`

### Blog Post Template (`/blog/posts/template.html`)
- Copy this file to create a new post
- Edit: title, date, category (class `cat-xxx`), content
- Link to the new post from `blog/index.html` and `index.html`

### Research Page (`/research/`)
- 2-column grid of research report cards
- Categories: 行业分析 / 趋势研究 / 深度研究 / 技术观察 / 市场分析 / 年度回顾

## How to Add a Blog Post

1. Copy `blog/posts/template.html` → rename to `post-2.html`
2. Edit title, date, category tag (change `cat-engineering` to `cat-thoughts` etc.)
3. Write your content in the `.article-body` section
4. Add the post card to `blog/index.html` (search for `复制这段来添加新文章`)
5. Optionally add a row to the blog table in `index.html`

## How to Add a Research Report

1. Copy a `.research-card` block in `research/index.html`
2. Update date, tag, title, description
3. Optionally add the card to `index.html` research section

## Customization Checklist

- [ ] Replace `Your Name` everywhere
- [ ] Update hero headline and subtitle
- [ ] Fill in About section bio
- [ ] Update Resume with real experience
- [ ] Replace Portfolio projects with yours
- [ ] Update skills bar
- [ ] Replace all `#` links with real URLs (GitHub, LinkedIn, email, etc.)
- [ ] Replace `[你的研究领域]` in Research sections

## Deploy to GitHub Pages

1. Push this entire folder to a GitHub repository
2. Settings → Pages → Source → `main` branch, `/ (root)` folder
3. Site live at `https://yourusername.github.io/repo-name/`
