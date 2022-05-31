const express = require("express");
const path = require("path");
const app = express();
app.set('view engine','ejs'); //definindo o ejs
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: false })); // essa linha de codigo nos permite acessar as informações mandadas pelo post do nosso formulario no ejs

const imagens =  [
    "https://media.istockphoto.com/photos/british-shorthair-kitten-sleeping-picture-id1317253625?k=20&m=1317253625&s=612x612&w=0&h=WDCPZJPZcT90m7r0JQ9g4IxSIk01TJREoqlGKc5s4EM=",
    "https://media.istockphoto.com/photos/funny-winking-kitten-picture-id1267021092?k=20&m=1267021092&s=612x612&w=0&h=yzwxZXklHn5NwDTgKmbq2Ojtg3pga6j8K3oT7lLneAY=",
    "https://media.istockphoto.com/photos/kitten-plays-with-toy-mouse-picture-id157512060?k=20&m=157512060&s=612x612&w=0&h=nSN8ERNV-NrJ5QPUvYNWq_Md3MUPDVfScagm1fwgrdM=",
    "https://media.istockphoto.com/photos/kitten-with-his-paw-up-picture-id149052633?k=20&m=149052633&s=612x612&w=0&h=UXr8bpB1vLTj3oaKkBqd8wTC2zX0EYJnwMSBseXfvV4=",
    "https://media.istockphoto.com/photos/funny-kitten-picture-id91626487?k=20&m=91626487&s=612x612&w=0&h=uuAFAxfam5qPG4A9cvJe_LY28M37F_zgW8YI2uKUwz8=",
  ];

let src = imagens[0]
let message = ''

app.get('/',(req,res)=>{
    res.render('index',{src,message})
})
// lá no ejs mandamos as informações do formulário para esse post com a rota /trocar, assim a informação "indice" chegara no corpo da requisição (req.body) como um objeto.
app.post('/trocar',(req,res)=>{
    const {indice} = req.body
    //VALIDAÇÃO NO BACKEND
    if(indice<0 || indice>4 || indice == ''){
        message = 'valor inválido, insira um novo valor entre 0 e 4'
    }else{
        src = imagens[indice]
    }
    res.redirect('/')
})
//o primeiro valor do app.listen será a porta (valor que fica na frente do localhost:___, essa porta pode ser qualquer valor a sua escolha, mas temos alguns padrões definidos, como o 3000)
app.listen(332,()=>{
    console.log('o servidor está rodando') // esse segundo valor será uma função de callback quando o servidor está ativo, como padrão costumamos deixar uma mensagem para nos informar de que está tudo certo.
})