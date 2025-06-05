import mongoose from momgoose;


const taskScehema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    status:{
        type:String,
        enum:["inprogress","completed"],
        default:"inprogress"
    },
    DueDate:{
        type:Date,
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
})


const Task = mongoose.model("tasks",taskScehema)
export default Task;