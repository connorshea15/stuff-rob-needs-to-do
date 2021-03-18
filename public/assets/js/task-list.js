// const $taskList = document.querySelector('#task-section');
const getTasks = () => {
    fetch('/api/tasks')
        .then(response => response.json())
        .then(taskListArr => {
            taskListArr.forEach(printTask)
            console.log(taskListArr);
        })
        .catch(err => {
            console.log(err);
        });
};

/*const printTask = ({ _id, createdAt, taskDetails }) => {

    const taskCard = `
        <div class="card">
            <div class="card-body">
                ${taskDetails}
                ${createdAt}
            </div>
        </div>
    `

    $taskList.innerHTML += taskCard;
};*/

getTasks();