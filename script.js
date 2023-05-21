document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var name = document.getElementById('name').value;
    var service = document.getElementById('service').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
  
    // Aqui você pode adicionar a lógica para processar o agendamento, como enviar os dados para um servidor, armazená-los em um banco de dados, etc.
  
    alert('Agendamento realizado com sucesso!');
  
    // Você também pode adicionar outras ações, como limpar o formulário ou redirecionar o usuário para uma página de confirmação.
  });
   //sub