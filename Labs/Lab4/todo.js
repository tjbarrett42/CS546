const mongoCollections = require("./mongoCollections");
const todo = mongoCollections.todo;
const uuidv4 = require('uuid/v4');

module.exports = {

    async createTask(title, description){
        if(!title){
            throw "Title does not exist, null, or undefined";
        }
        if(typeof title != "string"){
            throw "Title is not string";
        }
        if(!description){
            throw "Description does not exist, null, or undefined";
        }
        if(typeof description != "string"){
            throw "Description is not string";
        }

        let uuid = uuidv4();

        const taskCollection = await todo();

    
        var newTask = {
            _id : uuid, //generate using uuid package
            title : title,
            description : description,
            completed : false,
            completedAt : null
        };

        const insertInfo = await taskCollection.insertOne(newTask);
        if (insertInfo.insertedCount === 0) throw "Could not add task";

        return newTask;
    },
    
    async getAllTasks(){

        const taskCollection = await todo();

        const task = await taskCollection.find({}).toArray();

        return task;
    },
    
    async getTask(id){
        if(!id){
            throw "ID does not exist, null, or undefined";
        }
        if(typeof id != "string"){
            throw "Id is not string";
        }
        const taskCollection = await todo();

		const task = await taskCollection.findOne({_id:id});
		if(task === null){
            throw "No item found with that id";
        }

		return task;
    },
    
    async completeTask(taskId){
        if(!taskId){
            throw "TaskId does not exist, null, or undefined";
        }
        if(typeof taskId != "string"){
            throw "TaskId is not string";
        }
        
        const taskCollection = await todo();
        
        var completionDate = new Date().toLocaleString(); //Proper timezone

        const updatedTask = {
            $set: { // Atomic operator workaround ?? (Not sure why this works)
                completed: true,
                completedAt: completionDate
            }
        };
        
        const updateInfo = await taskCollection.updateOne({_id:taskId}, updatedTask);
		if(updateInfo.modifiedCount === 0) throw "Could not update task";

		return await this.getTask(taskId);

    },
    
    async removeTask(id){
        if (!id){
            throw "Id does not exist, null, or undefined";
        } 
        if(typeof id != "string"){
            throw "Description is not string";
        }

        const taskCollection = await todo();
        const deletionInfo = await taskCollection.removeOne({ _id: id });

        if (deletionInfo.deletedCount === 0) {
            throw `Could not delete task with id of ${id}`;
        }
    },

    async clearTasks(){

        const taskCollection = await todo();
        await taskCollection.remove({});
    }
};
