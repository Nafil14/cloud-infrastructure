
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        status: 'healthy',
        application: 'Infrastructure Demo',
        version: '2.1'
    }));
    return;

    }

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Infrastructure Demo</title>
<style>
:root {
    --blue: #2563eb;
    --dark: #142b4d;
    --muted: #58708f;
    --border: #e0eaf8;
    --bg: #f5f9ff;
}
* { box-sizing: border-box; }
body {
    margin: 0;
    font-family: "Segoe UI", Arial, sans-serif;
    color: var(--dark);
    background: white;
}
nav {
    height: 76px;
    padding: 0 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--border);
}
.brand { font-size: 21px; font-weight: 700; }
.brand span { color: var(--blue); margin-right: 8px; }
.nav-tag { color: var(--muted); font-size: 14px; }
.hero {
    padding: 76px 7%;
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
    gap: 40px;
    align-items: center;
    background: linear-gradient(120deg, #f0f7ff, #fff);
}
.badge {
    display: inline-block;
    padding: 8px 13px;
    border-radius: 30px;
    background: #dcfce7;
    color: #166534;
    font-size: 13px;
    font-weight: 600;
}
h1 {
    font-size: clamp(36px, 5vw, 56px);
    letter-spacing: -1.8px;
    margin: 22px 0 12px;
}
.hero p {
    max-width: 620px;
    color: var(--muted);
    font-size: 17px;
    line-height: 1.8;
}
.actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 28px; }
.btn {
    display: inline-block;
    border: 0;
    border-radius: 9px;
    padding: 13px 19px;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
}
.primary { background: var(--blue); color: white; }
.secondary { background: white; color: var(--dark); border: 1px solid #cbdcf5; }
.art {
    text-align: center;
    font-size: 100px;
    padding: 25px;
}
.art small {
    display: block;
    font-size: 15px;
    color: var(--muted);
    margin-top: 10px;
}
main { padding: 42px 7% 55px; }
.section-title { font-size: 24px; margin: 0 0 22px; }
.cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
}
.card {
    padding: 25px;
    border: 1px solid var(--border);
    border-radius: 14px;
    background: white;
    box-shadow: 0 5px 20px rgba(35, 76, 130, 0.04);
}
.card-icon { font-size: 25px; }
.card h2 { font-size: 17px; margin: 16px 0 10px; }
.value { font-size: 20px; font-weight: 700; color: #16a34a; }
.muted { color: var(--muted); font-size: 14px; line-height: 1.7; }
.endpoint {
    padding: 8px 0;
    border-bottom: 1px solid #edf2fa;
    font-size: 14px;
}
.endpoint:last-child { border: 0; }
code {
    background: #eef4ff;
    padding: 3px 6px;
    border-radius: 5px;
    color: #1d4ed8;
}
#health-result { margin-top: 12px; font-size: 13px; }
footer {
    text-align: center;
    padding: 28px 15px;
    background: var(--bg);
    color: var(--muted);
    font-size: 13px;
    line-height: 1.8;
}
@media (max-width: 760px) {
    .hero { grid-template-columns: 1fr; padding: 45px 6%; }
    .art { font-size: 65px; padding: 5px; }
    .cards { grid-template-columns: 1fr; }
    nav { padding: 0 6%; }
    .nav-tag { display: none; }
    main { padding: 35px 6%; }
}
</style>
</head>
<body>
<nav>
    <div class="brand"><span>◆</span> Infrastructure Demo</div>
    <div class="nav-tag">Node.js · Docker · Cloud Learning Lab</div>
</nav>

<section class="hero">
    <div>
        <span class="badge">● Running in Docker</span>
        <h1>Infrastructure<br>D</h1>
        <p><strong>Application Version: 2.1</strong></p>
        <p>Deployment: Automated through GitHub Actions</p>
        <p>A simple application with a real health endpoint, built to demonstrate containerization, deployment automation and infrastructure monitoring.</p>
        <div class="actions">
            <a class="btn primary" href="#overview">Explore Project ↓</a>
            <button class="btn secondary" id="check-health">Check Health ↗</button>
        </div>
        <div id="health-result" role="status" aria-live="polite"></div>
    </div>
    <div class="art" aria-label="Cloud and server illustration">
        ☁️
        <div>🐳</div>
        <small>Application • Container • Infrastructure</small>
    </div>
</section>

<main id="overview">
    <h2 class="section-title">Application Overview</h2>
    <div class="cards">
        <article class="card">
            <div class="card-icon">◉</div>
            <h2>Application Health</h2>
            <div class="value" id="status">Checking...</div>
            <p class="muted" id="status-description">Waiting for the health check.</p>
        </article>
        <article class="card">
            <div class="card-icon">▣</div>
            <h2>Container Runtime</h2>
            <div><strong>Docker</strong></div>
            <p class="muted">Container name: infrastructure-demo-app<br>Application port: 3000</p>
        </article>
        <article class="card">
            <div class="card-icon">⌘</div>
            <h2>Available Endpoints</h2>
            <div class="endpoint"><code>/</code> — Home page</div>
            <div class="endpoint"><code>/health</code> — Health check</div>
            <p class="muted">Use the health endpoint to test application availability.</p>
        </article>
    </div>
</main>

<footer>
    <strong>Infrastructure Demo</strong> &nbsp; | &nbsp; Node.js + Docker
    <br>Built for hands-on infrastructure engineering practice.
</footer>

<script>
async function checkHealth() {
    const status = document.getElementById('status');
    const description = document.getElementById('status-description');
    const result = document.getElementById('health-result');

    status.textContent = 'Checking...';
    result.textContent = 'Contacting /health...';

    try {
        const response = await fetch('/health');
        const data = await response.json();

        if (!response.ok || data.status !== 'healthy') {
            throw new Error('Health check failed');
        }

        status.textContent = 'Healthy';
        description.textContent = 'The application responded successfully.';
        result.textContent = '✓ Health check passed at ' +
            new Date().toLocaleTimeString();
    } catch (error) {
        status.textContent = 'Unreachable';
        description.textContent = 'The health check did not succeed.';
        result.textContent = '✗ Health check failed. Check the server logs.';
    }
}

document.getElementById('check-health').addEventListener('click', checkHealth);
checkHealth();
</script>
</body>
</html>`);
        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Server listening on port 3000');
});
