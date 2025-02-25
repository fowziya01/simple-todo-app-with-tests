const Todo = require('../models/Todo');

// Create Todo
exports.createTodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json({message:todo});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// Get All Todos
exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Update Todo
exports.updateTodo = async (req,res)=>{
    try{
const id=req.params.id;
const todo = await Todo.findByIdAndUpdate(id,req.body,{new:true});
res.status(200).json(todo);

    }catch(error){
        res.status(400).json({ error: error.message });
    }
};
exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Todo deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


