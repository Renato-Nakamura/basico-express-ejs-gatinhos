const express = require("express");
const app = express();
app.set('view engine','ejs');

app.use(express.urlencoded());

const imagens =  [
    "https://media.istockphoto.com/photos/british-shorthair-kitten-sleeping-picture-id1317253625?k=20&m=1317253625&s=612x612&w=0&h=WDCPZJPZcT90m7r0JQ9g4IxSIk01TJREoqlGKc5s4EM=",
    "https://media.istockphoto.com/photos/funny-winking-kitten-picture-id1267021092?k=20&m=1267021092&s=612x612&w=0&h=yzwxZXklHn5NwDTgKmbq2Ojtg3pga6j8K3oT7lLneAY=",
    "https://media.istockphoto.com/photos/kitten-plays-with-toy-mouse-picture-id157512060?k=20&m=157512060&s=612x612&w=0&h=nSN8ERNV-NrJ5QPUvYNWq_Md3MUPDVfScagm1fwgrdM=",
    "https://media.istockphoto.com/photos/kitten-with-his-paw-up-picture-id149052633?k=20&m=149052633&s=612x612&w=0&h=UXr8bpB1vLTj3oaKkBqd8wTC2zX0EYJnwMSBseXfvV4=",
    "https://media.istockphoto.com/photos/funny-kitten-picture-id91626487?k=20&m=91626487&s=612x612&w=0&h=uuAFAxfam5qPG4A9cvJe_LY28M37F_zgW8YI2uKUwz8=",
  ];
// let i = 0
let src = imagens[0]

app.get('/',(req,res)=>{
    res.render('index',{src})
    // res.send('olá Victor')
})

app.post('/trocar',(req,res)=>{
    const corpo = req.body
    const indice = corpo.indice

    src = imagens[indice]
    console.log('##corpo da requisição',req.body)
    console.log('##corpo.indice ',req.body.indice)
    res.redirect('/')
})

app.listen(332,()=>{
    console.log('o servidor está rodando')
})