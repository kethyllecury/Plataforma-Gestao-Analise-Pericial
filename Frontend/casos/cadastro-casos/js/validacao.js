function validarForm() {
    'use strict';
    const form = document.getElementById('form-cadastro-caso');
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);

    const peritoInput = document.getElementById('perito');
    const autocompleteList = document.getElementById('autocomplete-list');
    const peritos = [
        'Ana Silva',
        'Bruno Costa',
        'Carla Mendes',
        'Daniel Oliveira',
        'Elisa Souza',
        'Fábio Pereira',
        'Gabriela Lima',
        'Hugo Santos'
    ];

    function showSuggestions(value) {
        autocompleteList.innerHTML = '';
        if (!value) return;

        const filteredPeritos = peritos.filter(perito =>
            perito.toLowerCase().includes(value.toLowerCase())
        );

        filteredPeritos.forEach(perito => {
            const div = document.createElement('div');
            div.textContent = perito;
            div.addEventListener('click', () => {
                peritoInput.value = perito;
                autocompleteList.innerHTML = '';
            });
            autocompleteList.appendChild(div);
        });
    }

    peritoInput.addEventListener('input', () => {
        showSuggestions(peritoInput.value);
    });

    peritoInput.addEventListener('focus', () => {
        showSuggestions(peritoInput.value);
    });

    document.addEventListener('click', (e) => {
        if (!peritoInput.contains(e.target) && !autocompleteList.contains(e.target)) {
            autocompleteList.innerHTML = '';
        }
    });
};

validarForm();