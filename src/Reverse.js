
import ToDo from './ToDo';
import { useState } from 'react';

function Reverse(){
    const [todos,setTodos]=useState([{
        id:'todo1',
        createdAt:'18.00',
    },
    {
        id:'todo2',
        createdAt:'16.00',
    }]);

    const reverseOrder = ()=>{
        //reverse is a mutative operation, so we need to create a new array first
        setTodos([...todos].reverse());
    }

    return(
        <div>
            <button onClick={(reverseOrder)}>Reverse the list</button>
            <table>
                <tbody>
                    {todos.map((todo,index)=>(
                        <ToDo  key={index} id={todo.id} createdAt={todo.createdAt}/>

                    ))}
                </tbody>
            
            </table>
        </div>
      
    )

}

export default Reverse;