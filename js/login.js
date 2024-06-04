const defaultLayout = document.querySelector('main').innerHTML;

function logged() {
    document.querySelector('main').innerHTML = `
        <h1>Você está logado</h1>

        <div class='logged'>
            <div>
                <p>Email: ${localStorage.getItem('EMAIL')}</p>
                <p>Senha: ${localStorage.getItem('PASSWORD')}</p>
            </div>

            <p>Deseja sair?</p>

            <button id='close'>Sair</button>
        </div>
    `;

    const closeButton = document.querySelector('#close');
    closeButton.onclick = () => logout();
}

function logout() {
    localStorage.removeItem('EMAIL');
    localStorage.removeItem('PASSWORD');

    document.querySelector('main').innerHTML = defaultLayout;
}

if (localStorage.getItem('EMAIL') && localStorage.getItem('PASSWORD')) {
    logged();
} else {
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const confirmButton = document.querySelector('button');

    confirmButton.onclick = () => {
        if (email.value && password.value) {
            localStorage.setItem('EMAIL', email.value);
            localStorage.setItem('PASSWORD', password.value);

            logged();
        }
    };
}