const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

async function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  const links = [
    { url: '/', changefreq: 'weekly', priority: 1.0, lastmod: today },
    { url: '/privacy.html', changefreq: 'yearly', priority: 0.6, lastmod: today },
    { url: '/diensten/dakherstellingen-hellende-daken.html', changefreq: 'yearly', priority: 0.8, lastmod: today },
    { url: '/diensten/dakherstellingen-platte-daken.html', changefreq: 'yearly', priority: 0.8, lastmod: today },
    { url: '/diensten/dakreiniging-ontmossen.html', changefreq: 'yearly', priority: 0.8, lastmod: today },
  ];

  const sitemapStream = new SitemapStream({ hostname: 'https://dakherstellingenlm.be/' });
  const writeStream = createWriteStream(path.resolve(__dirname, 'sitemap.xml'));

  sitemapStream.pipe(writeStream);

  for (const link of links) {
    sitemapStream.write(link);
  }
  sitemapStream.end();

  await streamToPromise(sitemapStream);

  console.log('Sitemap generated successfully!');
}

generateSitemap().catch(console.error);
