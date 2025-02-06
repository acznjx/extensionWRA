const changeKanbanDateColor = () => {
  const kanbanItems = document.querySelectorAll('.crm-kanban-item');

  kanbanItems.forEach((item) => {
    const fields = item.querySelectorAll('.crm-kanban-item-fields-item');

    fields.forEach((field) => {
      const title = field.querySelector('.crm-kanban-item-fields-item-title-text'); 
      const value = field.querySelector('.crm-kanban-item-fields-item-value'); 

      if (title && title.textContent.trim().toLowerCase() === "task tracking" && value) {
        let taskTracking = value.textContent.trim().toLowerCase();

        // Remove classes antigas para evitar sobreposição
        item.classList.remove('task-mayra', 'task-duda');

        // Aplica a cor conforme a Task
        if (taskTracking.includes('mayra')) {
          item.classList.add('task-mayra');
        } else if (taskTracking.includes('duda')) {
          item.classList.add('task-duda');
        }
      }
    });
  });
};

// Executa a função ao carregar e monitora mudanças no DOM
document.addEventListener("DOMContentLoaded", changeKanbanDateColor);
window.addEventListener("load", changeKanbanDateColor);

// Observador para mudanças no DOM (Compatível com todos os navegadores)
const observer = new MutationObserver(() => {
  setTimeout(changeKanbanDateColor, 100); // Delay para evitar erros no Firefox
});

observer.observe(document.body, { childList: true, subtree: true });