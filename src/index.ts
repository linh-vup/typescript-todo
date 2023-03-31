import { v4 as uuidV4 } from 'uuid';

type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const list = document.querySelector<HTMLUListElement>('#list');
const form = document.getElementById('new-task-form') as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>('#new-task-title');
const tasks: Task[] = loadTasks();
tasks.forEach(addListItem);

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  if (input?.value == '' || input?.value == null) return;

  // even if not declared as Task, as properties are the same properties as Task, TS assumes it's a Task object
  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };

  tasks.push(newTask);
  saveTasks();
  addListItem(newTask);
  input.value = '';
});

function addListItem(task: Task) {
  // TS declares item as HTMLLIElement because it checks what the created element is
  const item = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;

  if (task.completed) {
    item.classList.toggle('checked');
  }

  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
  item.classList.add('list-item');

  checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked;
    saveTasks();
    item.classList.toggle('checked');
  });
}

function saveTasks() {
  localStorage.setItem('TASKS', JSON.stringify(tasks));
}

function loadTasks(): Task[] {
  const taskJSON = localStorage.getItem('TASKS');
  if (taskJSON == null) return [];
  return JSON.parse(taskJSON);
}
