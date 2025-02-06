const changeKanbanStatusColor = () => {
  document.querySelectorAll('.crm-kanban-item-fields-item-value').forEach((statusField) => {
    let statusText = statusField.textContent?.trim().toLowerCase() || "";

    // Remove as classes de status anteriores
    statusField.classList.remove('status-analise', 'status-andamento', 'status-testes', 'status-concluido', 'status-bloqueado', 'status-cancelado');

    // Adiciona a classe conforme o status
    if (statusText.includes('em análise')) {
      statusField.classList.add('status-analise');
    } else if (statusText.includes('em andamento')) {
      statusField.classList.add('status-andamento');
    } else if (statusText.includes('em testes')) {
      statusField.classList.add('status-testes');
    } else if (statusText.includes('concluído')) {
      statusField.classList.add('status-concluido');
    } else if (statusText.includes('bloqueado')) {
      statusField.classList.add('status-bloqueado');
    } else if (statusText.includes('cancelado')) {
      statusField.classList.add('status-cancelado');
    }
  });
};

// Executa ao carregar a página
document.addEventListener("DOMContentLoaded", changeKanbanStatusColor);

// Observer para mudanças no DOM (atualizações em tempo real)
new MutationObserver(changeKanbanStatusColor).observe(document.body, { childList: true, subtree: true });
