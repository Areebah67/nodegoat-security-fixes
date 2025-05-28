## Security Checklist for NodeGoat Project

1. ✅ Input Validation
   - [x] Used validator.js to validate and sanitize inputs
   - [x] Prevented malicious inputs (e.g., XSS, SQL Injection)

2. ✅ Secure Data Transmission
   - [ ] HTTPS to be used in production for secure transmission

3. ✅ Password Security
   - [x] Used bcrypt to hash and salt user passwords
   - [x] Did not store or log raw passwords

4. ✅ Security Headers
   - [x] Used helmet.js to set secure HTTP headers

5. ✅ Session & Authentication
   - [x] Used JWT tokens for session handling
   - [x] Set expiration time and secure cookies

6. ✅ Logging
   - [x] Integrated winston for logging security-related events

7. ✅ Code Best Practices
   - [x] No hardcoded passwords or secrets
   - [x] Used .env file for sensitive configs

8. ✅ Database Security
   - [x] Used secure queries (MongoDB/Mongoose)
   - [x] Avoided raw query strings to prevent injection
