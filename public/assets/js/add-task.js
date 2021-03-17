const $taskForm = document.querySelector('#task-form')

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
            alert('You added a task!');
            console.log(postResponse);
        })
        .catch(err => {
            console.log(err);
        });
};


$taskForm.addEventListener('submit', handleTaskSubmit);