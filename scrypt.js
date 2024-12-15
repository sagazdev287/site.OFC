setInterval(() => { let rgb = "rgb(" + Math.ceil(Math.random() * 255) + ", " + Math.ceil(Math.random() * 255) + ", " + Math.ceil(Math.random() * 255) +")"; document.querySelector("nav").style.backgroundColor = rgb }, 1000)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contato-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
           // alert('Obrigado por entrar em contato! Responderei em breve.');
            form.reset(); // Limpa o formulário após o envio
        });
    }
});

var nome = window.prompt('qual é seu nome ?')
window.alert('prazer em te conhecer, '  + nome +'!!')


// Alerta ao carregar a página
window.onload = function() {
    alert("⚠️ Seu IP está sendo monitorado. Qualquer tentativa de invasão resultará em graves consequências!");
};



// Função para definir o cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Função para verificar se o cookie foi aceito
function checkCookie() {
    const cookieConsent = document.cookie.split('; ').find(row => row.startsWith('cookieConsent='));
    return cookieConsent ? cookieConsent.split('=')[1] : null;
}

// Ao carregar a página
window.onload = function() {
    // Exibe o alerta de IP
   // alert("⚠️ Seu IP está sendo monitorado. Qualquer tentativa de invasão resultará em graves consequências!");

    // Verifica o consentimento do cookie
    if (!checkCookie()) {
        document.getElementById('cookie-notice').style.display = 'block';
    }

    // Configura o botão de aceitar cookies
    document.getElementById('accept-cookies').onclick = function() {
        setCookie('cookieConsent', 'accepted', 30); // Cookie válido por 30 dias
        document.getElementById('cookie-notice').style.display = 'none'; // Oculta o aviso
    };
};
//confirmção para aceitar ou cancelar
window.confirm('Atençao ao aceitar os conteudos!')

//abre uma opção para o usuario digiar
//window.prompt('Digite seu nome:')

//window.document.write(window.document.URL)
