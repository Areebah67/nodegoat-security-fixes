🔐 Final Security Audit – NodeGoat | 

✅ Project Overview

This repository contains the final security improvements and audit for the NodeGoat application, conducted during Week 6 of the internship. Tools like OWASP ZAP, Nikto, Lynis, and Burp Suite were used to identify and mitigate vulnerabilities before deployment.

---
 🧪 Tools Used

- 🔍 OWASP ZAP – Web vulnerability scanner  
- 🛡️ Nikto – Web server scanner  
- 🧾 Lynis – Linux system security audit  
- 🧰 Burp Suite – Manual penetration testing  
- 🐳 Docker – Secure container deployment


 ⚠️ Vulnerabilities Found & Fixes

| Tool       | Vulnerability Example              | Fix Applied |
|------------|------------------------------------|-------------|
| ZAP        | Missing security headers, XSS      | Added Helmet middleware, input sanitization |
| Nikto      | Outdated server headers            | Masked headers, disabled directory listing |
| Lynis      | Weak SSH config, no firewall       | Hardened SSH, added UFW firewall |
| Burp Suite | Retested SQLi, CSRF, session flaws | All passed & secured |

---

 🚀 Secure Deployment Checklist

- [x] Enabled automatic security updates (`unattended-upgrades`)
- [x] Applied all `npm audit fix` patches
- [x] Used non-root user in Docker image
- [x] Minimized Docker image using `node:alpine`

 📂 Repository Structure

├── /report/ # Final Word-based security audit report
├── /screenshots/ # ZAP, Nikto, and Burp findings (optional)
├── /src/ # Secure NodeGoat source code
├── README.md # This file


 📄 Documentation

- 📥 [Final Security Audit Report – Week 6](./report/Final_Security_Audit_Report_Week6.docx)




Areeba
Cybersecurity Intern | Ethical Hacking Enthusiast  
Passionate about secure app development
