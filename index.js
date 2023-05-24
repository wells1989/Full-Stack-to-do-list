export const createTodo = async (todo) => {
    try {
        const res = await fetch('api/todo/create', {
            method: 'POST',
            body: todo,
          });
          return res.json();  
    } catch (error) {
        return { error };
    }
};
// above, tries the POST fetch request to the /todo/create, which will link to the create function, which then links to the Postgres request ...

export const getTodos = async () => {
    try {
      const res = await fetch('api/todos', {
        method: 'GET',
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return { error };
    }
  };
// above, makes a GET request to the api, and at that route links to the create function, which selects all from todo postgresql table

export const removeTodo = async (id) => {
    try {
      await fetch(`api/todos/:${id}`, {
        method: 'DELETE',
      });
      return 'deleted';
    } catch (error) {
      return { error };
    }
  };

// above, links to remove function, which deletes the relevant sql row with the defined ID
  

  