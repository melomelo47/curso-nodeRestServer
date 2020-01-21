require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser')


    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false })); // El app.use --> son middlewares
    // parse application/json
    app.use(bodyParser.json());


app.get('/usuario',  (req, res) =>  {
  res.json('get Usuario'); // Porque vamos a trabajar con JSON y em MIME ahora aparecerá como JSON y no html cuando se le da con la función .send()
});

app.post('/usuario',  (req, res) =>  { // Cuando la URL viene con el id del usuario
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({ // Error 400 es bad request --> cuando no se manda la información como el servicio lo espera
            ok: false,
            mensaje: 'No se tiene un nombre válido'
        });
    } else {
        res.json({
            body
        });
    }
    

    

});
 
app.put('/usuario/:id',  (req, res) =>  {
    let id = req.params.id;
    res.json({
        id
    }); 
});

app.delete('/usuario',  (req, res) =>  {
    res.json('delete Usuario'); 
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando por el puerto ${ process.env.PORT }`);
});

