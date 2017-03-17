import { renderToString } from 'react-dom/server';

export default componentHTML => `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>FURB</title>
      </head>
      <body>
        <div id="app">${renderToString(componentHTML)}</div>
        <script type="text/javascript" src="/static/client.js"></script>
      </body>
    </html>`;
