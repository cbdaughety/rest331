import express from 'express';
import routes from './src/routes/routes';


const app = express();
const PORT = 3000;

routes(app);

//prints stuff to homepage
app.get('/', (req, res) => {
    res.send(`Node and express server running on port: ${PORT}`)
});


//server is listening on this port
app.listen(PORT, () => {
    console.log(`the server is up and running on localhost:${PORT}`)
});
