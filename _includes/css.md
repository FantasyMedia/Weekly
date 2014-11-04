/* Common */
html, body, div, header, aside, article, main, footer, h1, h2, h3, h4 {
    padding: 0;
    margin: 0;
    font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, FreeSerif, serif;
}

body { min-height: 100vh; font-size: 15px; position: relative; }

/* Site */
.site-header { padding: 20px 0; margin: 0 auto; width: 640px; text-align: center; border-bottom: 1px dashed rgba(20, 20, 20, 0.5); }
.site-header a { color: #333; text-decoration: none; }
.site-header h1 { margin: 10px 0; }
.site-list { width: 640px; margin: 0 auto; padding: 20px 0; }
.site-list a { color: #333; text-decoration: none; }
.site-list a:hover { color: #777; text-decoration: underline; }
.site-footer { position: absolute; bottom: 0; width: 100%; text-align: center; padding: 20px 0; font-size: 12px; color: #777; }
.site-footer a { color: #999; }
/* Article */
.article { width: 640px; margin: 0 auto; padding: 20px 0; }
.article h1 { text-align: center; }
.article .article-date { text-align: center; }
.article .others { margin: 20px 0; }
.article .others p { text-align: right; }
.article a { text-decoration: none; color: #07a; }
.article a:hover { text-decoration: underline; color: #07f; }
.article h1, .article h2, .article h3, .article h4 { line-height: 1.6; }
.article h2 { border-bottom: 1px solid #eee; }
.article pre, pre code, code { background-color: #f9f9f9; font-size: 13px; font-family: Consolas, "Liberation Mono", Courier, monospace; }
.article pre code { border: none; padding: 0; }
.article pre, code { border: 1px solid #ddd; }
.article pre { overflow: hidden; word-wrap: break-word; padding: 3px 5px; }
.article code { padding: 0 5px; border-radius: 4px; }
.article blockquote { border-left: 4px solid #d5d5d5; padding: 0 15px; color: #777; }
.article img { width: 100%; }
