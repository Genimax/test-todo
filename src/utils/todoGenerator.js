const generateRandomTasks = () => {
  const tasks = [];
  const numTasks = Math.floor(Math.random() * 11); // Генерация случайного числа от 0 до 10

  const randomTaskNames = [
    "Выполнить проект",
    "Отправить отчет",
    "Позвонить клиенту",
    "Сделать покупки",
    "Подготовить презентацию",
    "Встретиться с коллегами",
    "Записать видеоурок",
    "Подготовить отзывы",
    "Организовать мероприятие",
    "Написать доклад"
  ];

  for (let i = 0; i < numTasks; i++) {
    const randomIndex = Math.floor(Math.random() * randomTaskNames.length); // Генерация случайного индекса из массива названий задач
    const task = {
      id: i,
      task: randomTaskNames[randomIndex],
      done: !(Math.random() > 0.5)
    };
    tasks.push(task);
  }

  return tasks;
};

const generateTodoLists = (numberOfUsers) => {
  const todoLists = {};

  for (let i = 0; i < numberOfUsers; i++) {
    todoLists[i] = generateRandomTasks();
  }

  return todoLists;
};

export default generateTodoLists;
