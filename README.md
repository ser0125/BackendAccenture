# BackendAccenture
========================

This is a repository for a backend test in Accenture

## Steps to run the project
#### Step 1. Set up the Development Environment 

The first thing is install Node.js and npm if they are not already on your machine.

* https://nodejs.org/en/download/

#### Step 2. Clone the repository and install the dependecies

The next thing you need to do is to clone this repository with the console.

  ```
git clone https://github.com/ser0125/BackendAccenture
  ```

Then with the console go to the folder of the project and run the next command
  ```
npm install 
  ```

#### Step 3. Create the local database

After that you need to create the database with this settings:

```
"username": "root",
"password": null,
"database": "bank_system",
```

#### Step 4. Serve the application

Finally the last step is to launch the server with this command.

 ```
npm start
  ```

#### Endpoints of the application

* http://localhost:3000/users  -- To get all the users

* http://localhost:3000/users/:identification  -- To get a user by id

* http://localhost:3000/users/ -- To save a user (sending the body) 

 ```
Example: {
	"identification": 1152209874,
	"name": "Jorge",
	"lastName": "Mendoza",
	"birthDate": "11/10/1987"
}
 ```




