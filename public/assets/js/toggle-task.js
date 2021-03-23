/*const $taskForm = document.querySelector('#task-form')
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

const printTask = ({ _id, createdAt, taskDetails }) => {

    var taskTime = moment(createdAt).format('LLL');

    const taskCard = `
        <div class="card my-5">
            <div class="card-body">
                <h5 class="card-title">${taskTime}</h5>
                <p class="card-text">${taskDetails}</p>  
            </div>
        </div>
    `
    // This is the method for getting them in order from newest to oldest
    var newEl = document.createElement("div");
    newEl.innerHTML = taskCard;
    $taskList.prepend(newEl);
};


$taskForm.addEventListener('submit', handleTaskSubmit);*/

/*const $taskSection = document.querySelector('#task-section');

const handleTaskClick = event => {
    event.preventDefault();

    if (event.target.tagName === "DIV") {
        //console.log(event.target);
        const $newEl = event.target;
        //console.log($newEl.innerText);
        console.log($newEl.innerText);
        var taskDetails = "";
        var string = $newEl.innerText.split('↵↵');
        console.log(string);
    } else {
        return;
    }
}

$taskSection.addEventListener('click', handleTaskClick);*/