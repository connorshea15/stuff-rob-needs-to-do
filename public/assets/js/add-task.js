const $taskForm = document.querySelector('#task-form')
const $taskList = document.querySelector('#task-section');


const handleTaskSubmit = event => {
    event.preventDefault();

    const taskDetails = $taskForm.querySelector("#task-info").value;

    const formData = { taskDetails };

    $taskForm.querySelector("#task-info").value = '';

    fetch('/api/tasks', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(postResponse => {
            printTask(postResponse);
        })
        .catch(err => {
            console.log(err);
        });
};

const printTask = ({ _id, createdAt, taskDetails, completed }) => {

    var taskTime = moment(createdAt).format('LLL');

    const taskCard = `
                <h5>${taskTime}</h5>
                <p>${taskDetails}</p>
    `
    // This is the method for getting them in order from newest to oldest
    var newEl = document.createElement("div");
    // set the html so the card displays the time and details of the task
    newEl.innerHTML = taskCard;
    // set the data-id to the tasks id so I can use it to toggle the task
    newEl.setAttribute("data-id", _id);
    if (completed) {
        newEl.className = "completed-task card";
    } else {
        newEl.className = "card";
    }
    $taskList.prepend(newEl);
    newEl.addEventListener('click', toggleTask);
};

// function to handle toggling of completed variable when a task is clicked
const toggleTask = event => {
    // collects the div/task that is clicked on
    const selectedTask = event.currentTarget;
    // grabs the id of the selected task
    const taskId = selectedTask.getAttribute("data-id");
    // adjust the value for 'completed' in the database
    fetch(`/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .catch(err => {
            console.log(err);
        });

        // sets the class of the task div to reflect whether or not the task is completed
        if (selectedTask.getAttribute("class") === "card") {
            selectedTask.className = "completed-task card";
        } else {
            selectedTask.className = "card";
        }
};

$taskForm.addEventListener('submit', handleTaskSubmit);