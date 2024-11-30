import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todos:[ //todos ki value yaha se ayegi
        {
            id:1,
            todo:"Learn React",
            completed:false

        }
    ],
    addTodo: (todo) =>{}, //ye function hai aisa bata denge-ye kya karega ye hub App.js mai bataenje
    updatedTodo: (id,todo) =>{},
    deleteTodo: (id) => {},
    toggleComplete:(id) =>{}
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider