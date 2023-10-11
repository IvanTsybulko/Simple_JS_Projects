const tasks =[];
      
      function AddToTasks()
      {
        const inputElement = document.querySelector('.task-input');
        const dateElement = document.querySelector('.task-date');

        const name = inputElement.value;
        const dueDate = dateElement.value;

        tasks.push({name: name, dueDate: dueDate});
        inputElement.value = '';
        dateElement.value = 'dd-mm-yyyy'
      }

      function DisplayTasks()
      {
        const listElement = document.querySelector('.js-listElement');

        let text = '';

        for(i = 0; i < tasks.length; i++)
        {
          const todoObject = tasks[i];
          const name = todoObject.name;
          const dueDate = todoObject.dueDate;

          text+=`<div>${name}</div> <div>${dueDate}</div> <button onclick ="tasks.splice(${i},1); DisplayTasks();" class ="deleate-button">Deleate</button>`;
        }

        listElement.innerHTML = text;
      }