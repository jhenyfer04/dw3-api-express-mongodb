// importar o Express
import express from "express";
// carregamos express
const app = express();

//configuraçao do express
app.use(express.json());

// rota principal da API
app.get("/", (req, res)=>{
    // JSON que sera retornado pela API
    const games =[
        {
            title: "Fifa 2019",
            year: 2019,
            platform: "X-bom 360",
        },

        {
            title: "the sims",
            year: 2016,
            platform: "pc (windows)",
            price: 149
        },

        {
            title: "CS GO",
            year: 2012,
            platform: "Pc (Windows)",
            price: 89
        }

    ]
    //cnfigurando o retorno do API
    res.json(games)
});

// iniciando o servidor do api
const port = 4000;

app.listen(port, (error)=>{
    if (error) {
        console.log("ocorreu um erro ao iniciar a API"+ error);
    } else {
        console.log("API iniciada com sucesso na porta " + port);
    }
});

