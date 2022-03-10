const numeroSecreto = parseInt(Math.random() * 11);
let numeroTentativas = 1;
let limiteTentativas = 3;

console.log(`NUMERO_SECRETO: ${numeroSecreto}`);
console.log(`LIMITE_TENTATIVAS ${limiteTentativas}`);
console.log('');



function chutar() {
  const numeroInserido = parseInt(document.getElementById('valor').value)
  const elementoResultado = document.getElementById('resultado');
  const elementoTentativas = document.getElementById('tentativas');
  let limite = document.querySelector('#limite')
  let dica = ''

  // Essa cadeia de if são as verificações, validações de dados.
  if (valor.value.length == 0) {
    // Se o espaço onde é inserido o numero, input, for vazio, não for inserido nada e clicarem no botão, vai dar erro e não vai executar o programa até colocarem um número.
    elementoResultado.innerHTML = `[ERROR] Digite um número!`
  } else if ((numeroInserido > 10 || numeroInserido < 0) && numeroTentativas > limiteTentativas) {
    // Se o número inserido for (maior que 10 ou menor que 0) E o numero de tentativas tenha acabado, ultrapassou os limites de tentativas, ele vai dizer que o Jogo Acabou
    elementoResultado.innerHTML = `🙏 O jogo já foi finalizado! 🙏`
  } else if (numeroInserido > 10 || numeroInserido < 0) {
    // Se o número inserido for maior que 10 ou menor que 0, ele vai dar erro e vai pedir para você inserir um número menor que 10 e maior que 0 para funcionar o programa.
    elementoResultado.innerHTML = 'você deve inserir um número de 0 a 10.';
  } else {
    // Se todas aquelas verificações, condições, validações de dados derem CERTO! CHECK! ele executa o programa normalmente
    if (numeroInserido < numeroSecreto) {
      dica = 'o número inserido é MENOR que o número secreto'
    } else {
      dica = 'o número inserido é MAIOR que o número secreto'
    }

    if (numeroTentativas <= limiteTentativas) {
      elementoTentativas.innerHTML = `<strong>${numeroTentativas}<strong>`
    }

    if (numeroTentativas <= limiteTentativas) {
      limite.innerHTML = `Limite de tentativas: <strong>${limiteTentativas - numeroTentativas}</strong>`
      // Aqui estou mudando o limite de tentativas que está exibindo considerando o numero de tentativas já feitas.
      numeroTentativas = numeroTentativas + 1
    } else if (numeroInserido === numeroSecreto) {
      elementoResultado.innerHTML = `🙏 O jogo já foi finalizado! 🙏`
    } else if (numeroInserido != numeroSecreto && numeroTentativas > limiteTentativas) {
      elementoResultado.innerHTML = `🙏 O jogo já foi finalizado! 🙏`
    } else {
      elementoResultado.innerHTML = 'Fim de Jogo! você perdeu, o número secreto era: ' + numeroSecreto;
    }

    console.log('NUMERO_TENTATIVAS', numeroTentativas - 1);
    // Isso aqui é só pra exibir o número de Tentativas como 3 no console log, ao invés de 4.

    if (numeroTentativas <= limiteTentativas) {
      if (numeroInserido === numeroSecreto) {
        elementoResultado.innerHTML = '🎆 Parabéns! 🎆 você venceu o jogo, o número secreto era: ' + numeroSecreto;
        numeroTentativas = limiteTentativas
      } else {
        elementoResultado.innerHTML = `👎 ${dica} 👎`
      }
    }
  }
}
