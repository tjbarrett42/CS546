const todo = require("./todo");
const connection = require("./mongoConnection");

const main = async () => {
    
    console.log("0. Clear tasks (so they don't remain when testing)\n");
    await todo.clearTasks();

    console.log("1. Create a task\n");
    const task1 = await todo.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");

    console.log("2. Log task, create new task\n");
    console.log(task1);
    const task2 = await todo.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");

    console.log("3. Query all tasks\n");
    const query1 = await todo.getAllTasks();
    console.log(query1);

    console.log("4. Remove first task\n");
    await todo.removeTask(task1._id);

    console.log("5. Query all remaining tasks\n");
    const query2 = await todo.getAllTasks();
    console.log(query2);

    console.log("6. Complete remaining tasks\n");
    const complete1 = await todo.completeTask(task2._id);
    console.log(complete1);

    const db = await connection();
    await db.serverConfig.close();
    
    console.log("Done!");

};
  
main().catch(error => {
    console.log(error);
});