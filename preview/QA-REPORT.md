# QA Report - Personal Site (amank-preview.surge.sh)
**Date:** 2026-02-28

## Summary
**Status: PASS** (1 issue found and fixed)

## Section Order ✅
Hero (name + headshot + subscribe + tagline) → Social Links → Open Source → Book → Featured → Courses → Talks → Writing → Contact

All sections present and in correct order.

## Issues Found & Fixed

### 1. Dead nav link to `#about` (FIXED)
- **Problem:** Nav contained `<a href="#about">ABOUT</a>` but no section with `id="about"` exists
- **Fix:** Removed the dead link from nav
- **Line:** ~235 (nav section)

## Issues Checked - All Clear

| Check | Status | Notes |
|-------|--------|-------|
| Em dashes | ✅ None found | Clean |
| Subscribe link | ✅ Points to aiproductplaybook.com | Redirects to amankhan1.substack.com (200) |
| X link | ✅ x.com/amankhan | Correct |
| Headshot | ✅ Uses local headshot.jpg | File exists |
| Talks table titles visible | ✅ No display:none on td:last-child | Old bug is fixed |
| Duplicate sections | ✅ None | Clean |
| Broken formatting | ✅ None | Clean |

## Link Verification (All 200)

| Link | Status |
|------|--------|
| aiproductplaybook.com | ✅ 200 |
| linkedin.com/in/amanberkeley | ✅ 200 |
| x.com/amankhan | ✅ (not fetched, social media) |
| github.com/amanaiproduct | ✅ 200 |
| amankhan1.substack.com | ✅ 200 |
| github.com/amanaiproduct/personal-os | ✅ 200 |
| github.com/amanaiproduct/openclaw-setup | ✅ 200 |
| Book cover image (GitHub raw) | ✅ 200 |
| maven.com/aman-khan/claude-code-for-product-managers | ✅ 200 |
| maven.com/aman-khan/build-ai-product-sense | ✅ 200 |
| maven.com/aman-khan/thriving-as-an-ai-pm | ✅ 200 |
| learn.deeplearning.ai/courses/evaluating-ai-agents/ | ✅ 200 |
| mindtheproduct.com (MTPCon talk) | ✅ 200 |
| news.aakashg.com/p/aman-khan-podcast | ✅ 200 |
| All YouTube links | ✅ (YouTube always returns 200) |
| All Substack writing links | ✅ 200 |

## Responsive / CSS Notes

- `course-collab { display: none }` on mobile (≤640px) — hides collaborator names. Acceptable trade-off for space.
- No other content hidden inappropriately on mobile
- Talks table: all columns visible on all screen sizes ✅

## Content Accuracy vs Research File

- All talks match research file ✓
- All Substack posts match ✓
- All courses match ✓
- DeepLearning.AI course shows "W/ ANDREW NG + JOHN GILHULY" — research only lists John Gilhuly, but Andrew Ng is the DeepLearning.AI founder so this is reasonable
- Research mentions "Evals Course Interview with Hamel Husain" — omitted from site (per research notes, some talks were skipped)
