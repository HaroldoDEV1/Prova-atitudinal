import { palavrasFutebol, palavrasMundialPalmeiras, palavrasRegras, palavrasTimeGosta, mostProbablyQuestion } from './can-i-answer.js'
// O que ele vai poder responder?
// - O  ele mais gosta?
// - Palmeiras tem munque é futebol? 
// - Quais as regras do futebol?
// - Que timedial?
// - PAPO FURADO?

console.log(palavrasFutebol)

// TENSIONAR ALGUM DOS PONTOS
palavrasFutebol.matched = 4

// Verfica quem foi mais tensionado
console.log(mostProbablyQuestion())


// Separe a frase em uma array de palavras
let pergunta = "Minha pergunta é essa";
pergunta = pergunta.split(' ')

// Ande pela array de palavras
  // Veja se a palavra existe no banco X, 
  // senão, veja no Y, 
  // senão, veja no Z...TEM NO Z? tensione (aumente o matched em 1)

  var perguntaPalmeiras = 'O palmeiras tem mundial, chatbot?'

  if(perguntaPalmeiras)
  {
    console.log('Não')
  }
  else{
    console.log('Pergunta inválida')
  }