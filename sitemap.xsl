<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="uk">
      <head>
        <title>XML Sitemap — Дожити до фініша...</title>
        <meta charset="UTF-8"/>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #0f172a;
            color: #f8fafc;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
            background: #1e293b;
            padding: 32px;
            border-radius: 16px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
          }
          h1 {
            color: #10b981;
            margin-top: 0;
            font-size: 28px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          p.desc {
            color: #94a3b8;
            font-size: 15px;
            margin-bottom: 24px;
            line-height: 1.5;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          th {
            background-color: #334155;
            color: #38bdf8;
            text-align: left;
            padding: 12px 16px;
            font-size: 14px;
            border-radius: 4px;
          }
          td {
            padding: 14px 16px;
            border-bottom: 1px solid #334155;
            font-size: 14px;
          }
          tr:hover td {
            background-color: #273549;
          }
          a {
            color: #34d399;
            text-decoration: none;
            word-break: break-all;
          }
          a:hover {
            text-decoration: underline;
          }
          .badge {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 6px;
            background: #064e3b;
            color: #6ee7b7;
            font-size: 12px;
            font-weight: 600;
          }
          .lang-list {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
          }
          .lang-tag {
            background: #334155;
            color: #cbd5e1;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 11px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🗺️ XML Карта сайту (Sitemap)</h1>
          <p class="desc">
            Цей файл допомагає пошуковим системам (Google, Bing) та AI-краулерам правильно індексувати сторінки веб-сайту <strong>dozhity.space</strong>.
          </p>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>URL сторінки</th>
                <th>Мовні версії (hreflang)</th>
                <th>Останнє оновлення</th>
                <th>Пріоритет</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td><xsl:value-of select="position()"/></td>
                  <td>
                    <a href="{sitemap:loc}" target="_blank">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <div class="lang-list">
                      <xsl:for-each select="xhtml:link">
                        <span class="lang-tag">
                          <xsl:value-of select="@hreflang"/>
                        </span>
                      </xsl:for-each>
                    </div>
                  </td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                  <td>
                    <span class="badge">
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
