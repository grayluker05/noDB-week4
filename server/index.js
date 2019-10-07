const express = require('express');
const cors = require('cors');
const port = 4200

const userCtrl = require('./Controller/userController');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/list', userCtrl.getList);
app.post('/api/list', userCtrl.addTodo);
app.delete('/api/list/:id', userCtrl.deleteItem);
app.put('/api/list/:id', userCtrl.editItem);

app.listen(4200, () => {
    console.log('Server Running on 4200!')
});

