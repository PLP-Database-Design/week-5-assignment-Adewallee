const express = require('express')
const app = express()
const mysql = require('mysql2');
const dotenv = require('dotenv');

// app.use(express.json());
// app.use(cors());
dotenv.config(); 

// connection to the database 
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME 
});

// Check if there is a connection 
db.connect((err) => {
    // If no connection 
    if(err) {
        return console.log("Error connecting to MYSQL: ", err);
    }

    //If connect works successfully
    console.log("Connected to MYSQL as id: ", db.threadId); 
})



// Question 1 goes here
// app.get('/patients', (req, res) => {

//     // Retrieve data from database 
//     const getPatients = "SELECT patient_id, first_name, last_name, date_of_birth FROM patients"
//     db.query(getPatients, (err, data) =>{
//         if (err) {
//            return res.status(400).send('Error Retrieving data', err)
//         }
//             //Display the records to the browser 
//             res.status(200).send(data);   
//     });
// });

// Question 2 goes here
app.get('/providers', (req, res) => {

    // Retrieve data from database 
    const getPatients = "SELECT first_name, last_name, provider_specialty FROM providers"
    db.query(getPatients, (err, data) =>{
        if (err) {
           return res.status(400).send('Error Retrieving data', err)
        }
            //Display the records to the browser 
            res.status(200).send(data);   
    });
});

// Question 3 goes here
app.get('/patients_firstname', (req, res) => {

    // Retrieve data from database 
    const getPatients = "SELECT first_name FROM patients"
    db.query(getPatients, (err, data) =>{
        if (err) {
           return res.status(400).send('Error Retrieving data', err)
        }
            //Display the records to the browser 
            res.status(200).send(data);   
    });
});

// Question 4 goes here
app.get('/specialty', (req, res) => {

    // Retrieve data from database 
    const getPatients = "SELECT provider_specialty FROM providers"
    db.query(getPatients, (err, data) =>{
        if (err) {
           return res.status(400).send('Error Retrieving data', err)
        }
            //Display the records to the browser 
            res.status(200).send(data);   
    });
});


// listen to the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})