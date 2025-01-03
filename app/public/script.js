document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const loadTasks = async () => {
        try {
            const response = await fetch('/tasks');
            const tasks = await response.json();
            tasks.forEach(task => addTaskToList(task.text, task.completed));
        } catch (error) {
            console.error('Erro ao carregar tarefas:', error);
        }
    };

    const saveTasks = async () => {
        const tasks = Array.from(taskList.children).map(task => ({
            text: task.querySelector('.task-text').textContent,
            completed: task.classList.contains('completed'),
        }));
        try {
            await fetch('/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(tasks),
            });
        } catch (error) {
            console.error('Erro ao salvar tarefas:', error);
        }
    };

    const addTaskToList = (text, completed = false) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${text}</span>
            <button class="delete-btn">X</button>
        `;
        if (completed) li.classList.add('completed');

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
            saveTasks();
        });

        li.querySelector('.delete-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            li.remove();
            saveTasks();
        });

        taskList.appendChild(li);
        saveTasks();
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (taskInput.value.trim()) {
            addTaskToList(taskInput.value.trim());
            taskInput.value = '';
        }
    });

    loadTasks();
});
