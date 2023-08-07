import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide todo title"]
    },
    complete: {
        type: Boolean,
        default: false
    }
}, {
    timestamp: true
});

const Todo = mongoose.models.todos || mongoose.model("todos", TodoSchema);
export default Todo;