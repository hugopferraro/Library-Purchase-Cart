const fs = require('fs');

const browserCandidates = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
].filter(Boolean);

const executablePath = browserCandidates.find((candidate) =>
  fs.existsSync(candidate)
);

module.exports = {
  basedir: process.cwd(),
  dest: 'docs/documentacao.pdf',
  stylesheet: ['docs/pdf.css'],
  body_class: ['documentacao'],
  document_title: 'Documentação — Carrinho de Compras de Livraria',
  page_media_type: 'print',
  launch_options: {
    headless: true,
    ...(executablePath ? { executablePath } : {})
  },
  pdf_options: {
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: `
      <div style="box-sizing:border-box;width:100%;padding:0 18mm;color:#64748b;font-family:Arial,sans-serif;font-size:8px;text-align:right;">
        Página <span class="pageNumber"></span> de <span class="totalPages"></span>
      </div>
    `,
    margin: {
      top: '18mm',
      right: '18mm',
      bottom: '20mm',
      left: '18mm'
    }
  }
};
