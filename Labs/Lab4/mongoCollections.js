const dbConnection = require("./mongoConnection");

/* This will allow you to have one reference to each collection per app */
/* Feel free to copy and paste this this */
const getCollectionFn = todoItems => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await dbConnection();
      _col = await db.collection(todoItems);
    }

    return _col;
  };
};

/* Now, you can list your collections here: */
module.exports = {
  todo: getCollectionFn("todo")
};
