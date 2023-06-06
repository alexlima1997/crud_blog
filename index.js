import  express  from "express";
import bodyParser from "body-parser";
import { connection } from "./database/database.js";
const app = express();

//View Engine

app.set('view engine', 'ejs');

//Static
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Databse
connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita!');
    }).catch((error) => {
        console.log(error);
    });

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(8080, () => {
    console.log('Servidor rodando liso!');
});