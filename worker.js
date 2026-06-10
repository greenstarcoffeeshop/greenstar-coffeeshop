const BLOCKED_COUNTRIES = ["TR"];

const blockPage = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Nicht verfügbar</title>
<style>
  html,body{height:100%;margin:0}
  body{display:flex;align-items:center;justify-content:center;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    background:#0f1a12;color:#e8efe9;text-align:center;padding:24px}
  .box{max-width:480px}
  h1{font-size:1.4rem;font-weight:600;margin:0 0 12px}
  p{font-size:.95rem;line-height:1.6;color:#a9bcae;margin:6px 0}
</style>
</head>
<body>
  <div class="box">
    <h1>Diese Website ist in Ihrer Region nicht verfügbar.</h1>
    <p>This website is not available in your region.</p>
    <p>Bu web sitesi bulunduğunuz bölgede kullanılamaz.</p>
  </div>
</body>
</html>`;

export default {
  async fetch(request, env) {
    const country = request.cf && request.cf.country;
    if (BLOCKED_COUNTRIES.includes(country)) {
      return new Response(blockPage, {
        status: 451,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
    return env.ASSETS.fetch(request);
  },
};
