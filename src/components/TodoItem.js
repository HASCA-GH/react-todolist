import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {db} from '../firebase'
import {doc, updateDoc, deleteDoc} from 'firebase/firestore'

const TodoItem = ({todo, color, name}) => {

  const [editedTodo, setEditedTodo] = useState(todo.title)

  useEffect(() => {
    setEditedTodo(todo.title)
  }, [todo])

const docRef = doc(db, 'todoCategories', name, 'todos', todo.id)


const deleteTask = async () => {
  // try {
  //   await fetch(`${baseUrl}/${todo.id}`, {
  //     method: 'delete',
  //     headers: {
  //       Authorization: 'Bearer keyizU2EzXNNPSDS9',
  //     }, 
  //   })
  //   getTodos()
  // } catch (error) {
  //   console.log(error)
  // }
  await deleteDoc(docRef) 
}

const saveTodo = async () => {
  // try {
  //   await fetch(`${baseUrl}/${todo.id}`, {
  //     method: 'put',
  //     headers: {
  //       Authorization: 'Bearer keyizU2EzXNNPSDS9',
  //       'Content-Type': 'application/json',
  //     }, 
  //     body: JSON.stringify({
  //       fields: {
  //         title: editedTodo, 
  //         completed: todo.fields.completed,
  //       },
  //     })
  //   })
  //   getTodos()
  // } catch (error) {
  //   console.log(error)
  // }
  await updateDoc(docRef, {
    title: editedTodo,
  })
}
const completeTodo = async () => {
  // try {
  //   await fetch(`${baseUrl}/${todo.id}`, {
  //     method: 'put',
  //     headers: {
  //       Authorization: 'Bearer keyizU2EzXNNPSDS9',
  //       'Content-Type': 'application/json',
  //     }, 
  //     body: JSON.stringify({
  //       fields: {
  //         title: todo.fields.title, 
  //         completed: !todo.fields.completed, //if true >> false, if false >> true
  //       },
  //     })
  //   })
  //   getTodos()
  // } catch (error) {
  //   console.log(error)
  // }
  await updateDoc(docRef, {
    completed: !todo.completed,
  })
}

  return (
        <TodoListItem  >
          <Checkbox 
            className={todo.completed ? "fas fa-check-circle" : "far fa-circle"} 
            onClick={completeTodo}
            style={{color: color}}/>
          <input  
            style={{textDecoration: todo.completed ? 'line-through': 'none'}}
            value={editedTodo} 
            onChange={e => setEditedTodo(e.target.value)}/>
          {todo.title !== editedTodo && (
            <SaveTodo className="fas fa-check" onClick={saveTodo}/>
          )}
       
          <DeleteTodo className="fas fa-trash-alt" onClick={deleteTask}/>
        </TodoListItem>
  );
};

export default TodoItem;

const Checkbox = styled.i`
  font-size: 20px;
  padding: 10px 13px;
  margin-right: 5px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgb(167, 161, 83);
    transition: 0.3s;
  }
`;

const SaveTodo = styled.i`
  padding: 10px 16px;
  border-radius: 4px;
  margin-right: -12px;
  color: #42c732;
  cursor: pointer;

  &:hover {
    background-color: #2b6127;
    transition: 0.3s;
  }
`;

const DeleteTodo = styled.i`
  color: #ff1605;
  padding: 10px 16px;
  margin-left: 14px;
  border-radius: 4px;
  margin-right: -12px;
  cursor: pointer;

  &:hover {
    background-color: #7e2601;
    transition: 0.3s;
  }
`;

const TodoListItem = styled.div`
  color: yellow;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  transition: 0.3s;

  input {
    flex: 1;
    font-size: 22px;
    outline: none;
    background: none;
    border: none;
    color: white;
  }
`;
