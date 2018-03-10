# SagoMini Programming Challenge
by Brendan Lynch

![Sago Mini Programming Challenge](https://www.dropbox.com/s/fzuzrwwin75anaa/screenshot1.png?raw=1)

## LIVE DEMO! <http://ec2-52-91-1-54.compute-1.amazonaws.com>
*Requires port 80 and 4242 to be accessible from your network*

---

## Local Environment Setup

#### Clone Repository
    git clone https://github.com/bnalynch/SagoMini.git

#### Install Prerequisites (assume Node.js is installed, using MongoDB Atlas service)
    npm install -g pm2@latest
    npm install -g @angular/cli

---

*Note: Backend / Frontend should each have a separate terminal window:*

### Backend
    cd backend
    npm install
    pm2 start app.js

The backend service is now running at <http://localhost:4242>. Refer to [PM2 documentation](http://pm2.keymetrics.io/docs/usage/quick-start/) for monitoring and restarting the service.

### Frontend
    cd frontend
    npm install
    ng serve --aot

The frontend service is now running at <http://localhost:4200>. The app will automatically reload if you change any of the source files.

---

## How to Use

Enter a build identifier for lookup (such as com.sagomini.ProgrammingChallenge). Press enter or click the 'lookup' button to continue...

![Lookup](https://www.dropbox.com/s/cu3j4tgwo74idti/screenshot2.png?raw=1)

The build is displayed. Press 'set' to force a build number update (note: must be larger than existing), or 'bump' to increment the build number by 1. Press 'back' to return to the lookup (or previous) page.

![Build](https://www.dropbox.com/s/evwai4f6bj7b3ij/screenshot3.gif?raw=1)

If the entered identifier does not exist in MongoDB, **a new build is created**. Pressing 'set' or 'bump' function the same in that case!

Errors are displayed for invalid input and builds not found.

![Error](https://www.dropbox.com/s/v8kq43urroeoxxl/screenshot4.png?raw=1)

---

## API Routes

**/api/read** GET  
Returns Build data for a given `bundle_id`. 404 error if build does not exist.  
*Parameters*  
`bundle_id` (string)  

**/api/set** POST  
Sets Build data. If the `bundle_id` does not exist, create a new build (build_number 0). Else overwrite the build number if the new one is larger.  
*Parameters*  
`bundle_id` (string)  
`new_build_number` (int)

**/api/bump** POST  
Bumps (increments) the build number. If the `bundle_id` does not exist, create a new build (build_number 0). Else bump the build number by 1.  
*Parameters*  
`bundle_id` (string)  

## Frontend Routes

**/** or **/lookup**  
Default lookup view

**/build**  
Ready to create a new build

**/build/:identifier**  
Load a build directly by bundle identifier (for example [/build/com.sagomini.ProgrammingChallenge](http://localhost:4200/build/com.sagomini.ProgrammingChallenge))

## MongoDB

The database is hosted by the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) service. You can connect to the cluster using this string in software like [MongoDB Compass](https://www.mongodb.com/products/compass).

    mongodb://clusteradmin:r6azB28kfoLvUy5K@cluster0-shard-00-00-s5aog.mongodb.net:27017,cluster0-shard-00-01-s5aog.mongodb.net:27017,cluster0-shard-00-02-s5aog.mongodb.net:27017/admin?replicaSet=Cluster0-shard-0&ssl=true

The backend service is connected via a separate account and uses [Mongoose](http://mongoosejs.com) object modeling. The build data is stored in the **builds** collection in the **sagomini** database. Example data:

![MongoDB](https://www.dropbox.com/s/8o3j8ej5d2crt4z/screenshot5.png?raw=1)

# Thanks for checking out my app and code!