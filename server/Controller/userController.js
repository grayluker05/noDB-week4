let list = []

let id = 3

module.exports = {
    getList(req, res) {
        res.status(200).send(list);
    },

    addTodo(req, res) {
        console.log('hit add todo', req.bodys)
        const { task, description } = req.body;

        const newTodo = {
            id,
            task,
            description
        }
        id++

        list.push(newTodo);
        res.status(200).send(list)
    },

    deleteItem(req, res) {
        // console.log('hit delete', req.params)
        const { id } = req.params;
        let taskIndex = list.findIndex(task => task.id === +id)
        list.splice(taskIndex, 1)
        // console.log(list)
        res.status(200).send(list);
    },

    editItem(req, res) {
        const {id} = req.params
        const {updatedToDo} = req.body
        console.log(id, updatedToDo)
        for (let i = 0; i < list.length; i++){
            if(list[i].id === +id) {
               list[i] = {...updatedToDo, id}
            }
        }
      
        console.log(list)
        res.status(200).send(list);
    }

}