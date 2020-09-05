
import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient( process.env.dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function database(req, res, next) {
    if (!client.isConnected()) await client.connect();
    try{
        req.dbClient = client;
        req.db = client.db('jemsecet');
        return next();
    }
    catch (e){
        client.close();
        res.status(500).json({ error: e.message || "Something went wrong"});
    }
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;





// const mongoose = require('mongoose')

// const url = 'mongodb+srv://admin_emmanuel:x7cgFe00O008viTj@jemsecret.uex5e.mongodb.net/<jemsecet>?retryWrites=true&w=majority';

// const connectionParams = {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// }
// mongoose.connect(url, connectionParams)
//     .then(() => {
//         console.log('Connected to database ')
//     })
//     .catch((err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })