document.getElementById('btn-1').addEventListener('click', function(){
    var dado = Math.floor(Math.random() * 4) + 1;
    var dadoDOM = document.getElementById('dado-1');
    dadoDOM.style.display = 'block';
    dadoDOM.src = 'dice-' + dado + '.png';
    
    var mod = parseInt(document.getElementById('modificador-1').value);
    
    var scoreAtual = dado + mod;
    document.getElementById('atual-1').textContent = scoreAtual;
});

document.getElementById('btn-2').addEventListener('click', function () {
    var dado = Math.floor(Math.random() * 6) + 1;
    var dadoDOM = document.getElementById('dado-2');
    dadoDOM.style.display = 'block';
    dadoDOM.src = 'dice-' + dado + '.png';
    
    var mod = parseInt(document.getElementById('modificador-2').value);
    
    var scoreAtual = dado + mod;
    document.getElementById('atual-2').textContent = scoreAtual;
});

document.getElementById('btn-3').addEventListener('click', function() {
    $('#dado-3').removeClass('animated shake');
    var dado = Math.floor(Math.random() * 8) + 1;
    document.querySelector('.ponto-dado-8').textContent = dado;
    
    var mod = parseInt(document.getElementById('modificador-3').value);
    
    var scoreAtual = dado + mod;
    document.getElementById('atual-3').textContent = scoreAtual;
    
    $("#dado-3").addClass("animated shake").one('animationend webkitAnimationEnd oAnimationEnd', function() {
    $("#dado-3").removeClass();
  });
});

document.getElementById('btn-4').addEventListener('click', function() {
    var dado = Math.floor(Math.random() * 10) + 1;
    document.querySelector('.ponto-dado-10').textContent = dado;
    
    var mod = parseInt(document.getElementById('modificador-4').value);
    
    var scoreAtual = dado + mod;
    document.getElementById('atual-4').textContent = scoreAtual;
    
    console.log(dado);
});

document.getElementById('btn-5').addEventListener('click', function() {
    var dado = Math.floor(Math.random() * 12) + 1;
    document.querySelector('.ponto-dado-12').textContent = dado;
    
    var mod = parseInt(document.getElementById('modificador-5').value);
    
    var scoreAtual = dado + mod;
    document.getElementById('atual-5').textContent = scoreAtual;
    
    console.log(dado);
});

document.getElementById('btn-6').addEventListener('click', function() {
    var dado = Math.floor(Math.random() * 16) + 1;
    document.querySelector('.ponto-dado-16').textContent = dado;
    
    var mod = parseInt(document.getElementById('modificador-6').value);
    
    var scoreAtual = dado + mod;
    document.getElementById('atual-6').textContent = scoreAtual;
    
    console.log(dado);
});

document.getElementById('btn-7').addEventListener('click', function() {
    var dado = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.ponto-dado-20').textContent = dado;
    
    var mod = parseInt(document.getElementById('modificador-7').value);
    
    var scoreAtual = dado + mod;
    document.getElementById('atual-7').textContent = scoreAtual;
    
    console.log(dado);
});

document.getElementById('btn-8').addEventListener('click', function() {
    var dado = Math.floor(Math.random() * 30) + 1;
    document.querySelector('.ponto-dado-30').textContent = dado;
    
    var mod = parseInt(document.getElementById('modificador-8').value);
    
    var scoreAtual = dado + mod;
    document.getElementById('atual-8').textContent = scoreAtual;
    
    console.log(dado);
});

document.getElementById('btn-10').addEventListener('click', function() {
    var dado = Math.floor(Math.random() * 4) + 1;
    var dadoDOM = document.getElementById('dado-1');
    dadoDOM.style.display = 'block';
    dadoDOM.src = 'dice-' + dado + '.png';
    
    var mod = parseInt(document.getElementById('modificador-1').value);
    
    var scoreAtual = dado + mod;
    document.getElementById('atual-1').textContent = scoreAtual;
});

