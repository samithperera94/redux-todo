
import { ToDoActions } from "./todo-slice";
export const updateTodos = (todos)=> {
    return async(dispatch) => {
        const sendRequesut = async()  => {
            const response = await fetch('https://react-http-d7746-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json',{
                method:'PUT',
                body:JSON.stringify(todos)
            });


            if(!response.ok){
                throw new Error("sending data failed")
            }
        }
        try{
            await sendRequesut();
        }catch(error){
            console.error(error);
        }
    }
};

export const getTodos = () => {
    return async(dispatch) => {
        const sendRequesut = async()  => {
            const response = await fetch('https://react-http-d7746-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json');
            

            if(!response.ok){
                throw new Error("sending data failed")
            }

            const data =  response.json();
            return data
        }

        try{
            const todoList = await sendRequesut();
            dispatch(ToDoActions.replaceTodos(todoList))
        }catch(error){
            console.error(error)
        }
    }
}