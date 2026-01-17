const agendamentos = [];

function salvarAgendamento(nome, data) {
    const novo = { id: Date.now(), nome, data };
    agendamentos.push(novo);
    return novo;
}
