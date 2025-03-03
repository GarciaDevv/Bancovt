// Função para atualizar o relógio
function atualizarRelogio() {
    // Cria uma nova instância de Date, que contém a data e hora atual
    const agora = new Date();

    // Obtém a hora atual do objeto "agora"
    let horas = agora.getHours();
    // Obtém os minutos atuais
    let minutos = agora.getMinutes();
    // Obtém os segundos atuais
    let segundos = agora.getSeconds();

    // Formata a hora, minutos e segundos para ter 2 dígitos (ex: 09 em vez de 9)
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    // Atualiza o texto do elemento com id 'relogio' para mostrar a hora formatada
    document.getElementById("relogio").innerText = `${horas}:${minutos}:${segundos}`;
}

// Chama a função "atualizarRelogio()" a cada 1 segundo (1000 milissegundos)
setInterval(atualizarRelogio, 1000);

// Faz a requisição à API do wttr.in para obter o fuso horário de Brasília
fetch("https://wttr.in/Brasilia?format=%Z")
  .then(response => response.text())  // Aqui, a resposta da requisição será tratada como texto simples
  .then(fusoHorario => {
    // Atualiza o conteúdo do elemento com id 'fusoHorario' com o fuso horário de Brasília
    document.getElementById("fusoHorario").innerText = `Fuso horário de Brasília: ${fusoHorario}`;
  })
  .catch(erro => {
    // Se ocorrer um erro na requisição, mostra uma mensagem de erro
    document.getElementById("fusoHorario").innerText = "Erro ao carregar o fuso horário.";
    console.error("Erro na requisição:", erro); // Loga o erro no console para depuração
  });


  