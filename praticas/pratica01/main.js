import { getTasks, addTask, removeTask, updateTask } from 'tasks'

function listarTarefas() {
    for(i in getTasks()) {
        let pessoa = getTasks[i]
        console.log(pessoa.id)
        console.log(pessoa.name)
        console.log(pessoa.completed)
    }
}

listarTarefas()

for(i=0;i<10;i++) {
    addTask({name:"Eduardo", completed:true})
}

removeTask(1)
updateTask(4, {name:"Reginaldo", completed: true})

listarTarefas()