# Getting Started with Create React App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project is used to calculate rewards point based on transaction done by user in last three months.

To calculate rewards point you can create rewards array and used transaction.js file import all transaction with array of object in below format

{
"date": "01/02/2023",
    "amount": 220
}

date format should be mm/dd/yyyy and amount should be transaction amount done by user for a particular trasaction

once you have run the project you will see the calculated rewards points over the brawser for last three month and total rewards point