var tasks = []
var id = 0

function getTasks() {
    return tasks
}

function addTask(dados) {
    const tarefa = {
        "id": id,
        "name": dados.name,
        "completed": dados.completed
    }
    tasks.push(...[tarefa])
    id+=1
}

function removeTask(taskId) {
    let oldTask = []
    for(i in tasks) {
        const task = tasks[i]
        if(task.id != taskId) {
            oldTask.push(task)
        }
    }
    tasks = oldTask
    return tasks
}

function updateTask(id, dados) {
    for(i in tasks) {
        const task = tasks[i]
        if(task.id == id) {
            task.name = dados.name
            task.completed = dados.completed
        }
    }
}