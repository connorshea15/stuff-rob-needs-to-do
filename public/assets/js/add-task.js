const $taskForm = document.querySelector('#task-form')
const $taskList = document.querySelector('#task-section');

const handleTaskSubmit = event => {
    event.preventDefault();

    const taskDetails = $taskForm.querySelector("#task-info").value;
    console.log("Task Details" + taskDetails);

    const formData = { taskDetails };

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
            //alert('You added a task!');
        })
        .catch(err => {
            console.log(err);
        });
};

const printTask = ({ _id, createdAt, taskDetails }) => {

    const taskCard = `
        <div class="card">
            <div class="card-body">
                ${taskDetails}
                ${createdAt}
            </div>
        </div>
    `

    $taskList.innerHTML += taskCard;
};


$taskForm.addEventListener('submit', handleTaskSubmit);