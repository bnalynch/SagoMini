# SagoMini
SagoMini Programming Challenge

### Local Environment

#### Clone Repository
    git clone https://github.com/bnalynch/SagoMini.git

#### Install Prequisites (assume Node.js is installed, MongoDB Atlas service)
    npm install -g pm2@latest
    npm install -g @angular/cli

---

Each in a separate terminal window:

## Backend
    cd backend
    npm install
    pm2 start app.js

The backend service is now running at <http://localhost:4242>.

## Frontend
    cd frontend
    npm install
    ng serve
    
The frontend service is now running at <http://localhost:4200>. The app will automatically reload if you change any of the source files.

---

