# Content Directory Structure

This directory contains all the news articles organized by categories.

## Structure:

```
posts/
├── news/
│   ├── nasional/
│   ├── internasional/
│   └── ekonomi/
├── sport/
│   ├── sepakbola/
│   ├── motogp/
│   └── esport/
├── teknologi/
└── entertainment/
```

## Adding New Posts:

1. Create a new markdown file in the appropriate category folder
2. Use the following frontmatter template:

```markdown
---
title: "Your Article Title"
date: "2024-02-20"
category: "Category Name"
excerpt: "Brief description of the article"
image: "/path/to/image.jpg"
author: "Author Name"
tags: ["tag1", "tag2"]
---

Article content goes here...
```

3. Add your article content using markdown format
4. Images should be stored in the public/images directory