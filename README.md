# Cypress E2E Automation – Conduit App

## Project Overview
This project is an **End-to-End test automation framework** built with **Cypress** for the **Conduit (RealWorld) application** by Bondar Academy.

The goal of this project is to demonstrate:
- practical Cypress usage
- real-world test scenarios (not demo examples)
- maintainable test structure suitable for team environments

This repository is intended as a **portfolio project** for QA Automation roles.

---

##  Application Under Test
- **UI:** https://conduit.bondaracademy.com
- **API:** https://conduit-api.bondaracademy.com

The application simulates a real blogging platform with authentication, articles, likes, feeds, and user settings.

---

##  Tech Stack
- **Cypress** (E2E testing)
- **JavaScript**
- **Node.js / npm**

---

##  Project Structure
```
cypress/
 ├─ e2e/
 │   ├─ SignInAndOut.cy.js
 │   ├─ feed.cy.js
 │   ├─ articles.cy.js
 │   ├─ settings.cy.js
 │   └─ tagsAndLikes.cy.js
 │
 ├─ support/
 │   ├─ commands.js      # custom Cypress commands (API login/register)
 │   ├─ selectors.js     # centralized UI selectors
 │   └─ e2e.js
 │
cypress.config.js
package.json
```

---

##  Test Coverage
The test suite covers the following key flows:

-  User authentication (sign in / sign out)
-  Article creation, validation, and deletion
-  Likes and tags functionality
-  Global and personal feed validation
-  User settings update

Both **UI interactions** and **API-based actions** are used where appropriate to improve test speed and reliability.

---

##  Custom Commands
Reusable logic is abstracted into custom Cypress commands:
- `apiRegister()` – registers a new user via API
- `apiLogin()` – logs in via API and stores JWT token in localStorage

This approach reduces UI dependency and speeds up test execution.

---

##  How to Run the Tests

###  Install dependencies
```bash
npm install
```

###  Open Cypress Test Runner
```bash
npx cypress open
```

###  Run tests headlessly
```bash
npx cypress run
```

---

##  Notes
- `node_modules` is intentionally excluded from the repository
- Selectors are centralized for easier maintenance
- The project structure follows common industry practices

---

##  Author
**Aleksandar Babic**

QA Automation Engineer (Cypress)

---

##  Disclaimer
This project is created for **learning and portfolio purposes**. The application under test is publicly available and maintained by Bondar Academy.

