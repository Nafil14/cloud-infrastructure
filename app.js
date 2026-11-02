
const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({
        status: "healthy",
        application: "Cloud Infrastructure Portfolio",
        author: "Nafil"
      })
    );
  }

  if (req.url !== "/") {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("404 - Page not found");
  }

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Nafil's Cloud Infrastructure and DevOps engineering portfolio.">
  <title>Nafil | Cloud Infrastructure Portfolio</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: Arial, sans-serif;
      background: #0b1120;
      color: #e5e7eb;
      line-height: 1.6;
    }

    header {
      padding: 22px 8%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #253047;
    }

    .logo { font-size: 21px; font-weight: bold; color: #60a5fa; }
    header span { color: #9ca3af; font-size: 13px; }

    main { max-width: 1050px; margin: auto; padding: 75px 24px; }

    .status {
      display: inline-block;
      padding: 7px 13px;
      border: 1px solid #166534;
      border-radius: 20px;
      color: #86efac;
      background: #052e16;
      font-size: 13px;
      margin-bottom: 25px;
    }

    .status::before { content: "● "; }

    h1 { font-size: clamp(36px, 6vw, 58px); line-height: 1.15; }
    h1 span { color: #60a5fa; }

    .intro {
      max-width: 690px;
      color: #aab5c5;
      font-size: 17px;
      margin: 22px 0 35px;
    }

    .section-title { font-size: 23px; margin: 55px 0 20px; }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 16px;
    }

    .card {
      background: #141e30;
      border: 1px solid #29364d;
      border-radius: 12px;
      padding: 22px;
    }

    .card h3 { color: #93c5fd; margin-bottom: 9px; }
    .card p { color: #aab5c5; font-size: 14px; }

    .tags { display: flex; flex-wrap: wrap; gap: 10px; }

    .tag {
      background: #172b46;
      border: 1px solid #29476a;
      color: #bfdbfe;
      padding: 7px 13px;
      border-radius: 7px;
      font-size: 13px;
    }

    .pipeline {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
    }

    .stage {
      background: #172b46;
      border: 1px solid #315174;
      padding: 13px 16px;
      border-radius: 8px;
      font-size: 14px;
    }

    .arrow { color: #60a5fa; font-size: 20px; }

    .contact {
      margin-top: 55px;
      padding: 25px;
      border-radius: 12px;
      background: #141e30;
      border: 1px solid #29364d;
    }

    footer {
      text-align: center;
      padding: 25px;
      color: #8290a5;
      border-top: 1px solid #253047;
      font-size: 13px;
    }

    @media (max-width: 600px) {
      header { padding: 18px 5%; }
      main { padding-top: 50px; }
      header span { font-size: 11px; }
    }
  </style>
</head>
<body>
  <header>
    <div class="logo">NAFIL.dev</div>
    <span>Cloud Infrastructure Portfolio</span>
  </header>

  <main>
    <div class="status">Application is running</div>

    <h1>Building and Automating<br><span>Cloud Infrastructure.</span></h1>

    <p class="intro">
      Hi, I'm <strong>Nafil</strong>, an Electronics and Communication
      Engineering graduate focused on IT infrastructure, cloud technologies,
      Linux systems, and DevOps automation.
      This project demonstrates how I build, deploy, and manage
      containerized applications on AWS.
    </p>

    <h2 class="section-title">Project Overview</h2>
    <div class="grid">
      <div class="card">
        <h3>Cloud Infrastructure</h3>
        <p>AWS VPC, public subnet, internet gateway, security groups,
        and EC2 provisioning using Terraform.</p>
      </div>
      <div class="card">
        <h3>Containerization</h3>
        <p>Docker-based application packaging and image publishing
        through Docker Hub.</p>
      </div>
      <div class="card">
        <h3>CI/CD Automation</h3>
        <p>GitHub Actions builds and publishes images, then deploys
        updates to EC2 through AWS Systems Manager.</p>
      </div>
      <div class="card">
        <h3>Secure Authentication</h3>
        <p>GitHub Actions authenticates to AWS using IAM
        OpenID Connect (OIDC), without long-lived AWS keys.</p>
      </div>
    </div>

    <h2 class="section-title">Technology Stack</h2>
    <div class="tags">
      <span class="tag">AWS EC2</span>
      <span class="tag">VPC</span>
      <span class="tag">Terraform</span>
      <span class="tag">Docker</span>
      <span class="tag">GitHub Actions</span>
      <span class="tag">AWS SSM</span>
      <span class="tag">IAM OIDC</span>
      <span class="tag">Linux</span>
      <span class="tag">Node.js</span>
      <span class="tag">Nginx</span>
    </div>

    <h2 class="section-title">Automated Deployment Pipeline</h2>
    <div class="pipeline">
      <div class="stage">Git Push</div>
      <span class="arrow">→</span>
      <div class="stage">GitHub Actions</div>
      <span class="arrow">→</span>
      <div class="stage">Docker Hub</div>
      <span class="arrow">→</span>
      <div class="stage">AWS OIDC</div>
      <span class="arrow">→</span>
      <div class="stage">EC2 via SSM</div>
    </div>

    <div class="contact">
      <h2>About This Project</h2>
      <p>
        This is a hands-on infrastructure project designed to demonstrate
        cloud provisioning, containerization, secure authentication,
        and automated application deployment.
      </p>
      <p style="margin-top:12px; color:#93c5fd;">
        Built and maintained by Nafil.
      </p>
    </div>
  </main>

  <footer>
    © ${new Date().getFullYear()} Nafil | Cloud Infrastructure Portfolio
  </footer>
</body>
</html>`);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(\`Portfolio application running on port \${PORT}\`);
});
