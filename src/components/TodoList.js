import React, {useState, useEffect} from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import {db} from '../firebase.js'
import {collection, orderBy, onSnapshot, query, addDoc, serverTimestamp} from 'firebase/firestore'


// {
//   id: 1,
//   title: 'cleaning',
//   completed: 'false'
// }

const TodoList = ({name, color, icon}) => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])


  // const baseUrl = `https://api.airtable.com/v0/appKtuPDRIuy8sZG1/${name}`

  // const getTodos = async () => {
  //   try {
  //     const todoData = await fetch(baseUrl, {
  //       method: 'get',
  //       headers: {
  //         Authorization: 'Bearer keyizU2EzXNNPSDS9',
  //       }
        
  //     })

  //     const todoJson = await todoData.json()
  //     setTodos(todoJson.records)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  console.log(todos)

  // useEffect(() => {
  //   getTodos()
  // }, [todo])

  useEffect(() => {
    const todoListQuery = query(
      collection(db, 'todoCategories', name, 'todos'),
      orderBy('createdAt', 'desc'),
    )
    // create the listener unsub:
    const unsub = onSnapshot(todoListQuery, querySnapshot => {
    const todoItems = []

    querySnapshot.forEach(doc => {
      todoItems.push({
        ...doc.data(),
        id: doc.id,
      })
    })

    setTodos(todoItems)
    })
    //detaching the listener in order to make the code more cleaner, so use return in the useEffect. This is the optional cleanup mechanism for effects
    return unsub
  }, [])

   const addButtonHandler = async () => {
    // try {
    //   await fetch(baseUrl, {
    //     method: 'post',
    //     headers: {
    //       Authorization: 'Bearer keyizU2EzXNNPSDS9',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       records: [
    //         {
    //           fields: {
    //             title: todo,
    //             completed: false
    //           }
    //         },
    //       ]
    //     }),
    //   })

    //   setTodo('')
    // } catch (error) {
    //   console.log(error)
    // }
    const collectionRef = collection(db, 'todoCategories', name, 'todos')
    await addDoc(collectionRef, {
      title: todo,
      completed: false,
      createdAt: serverTimestamp(),
    })

    setTodo('')
  }

  return (
    <Wrapper>
      <TodoCategoryHeader>
        <CategoryIcon style={{background: color}}>
          <i className={icon} />
        </CategoryIcon>
        <Title>{name}</Title>
        <TodoInput value={todo} onChange={e => setTodo(e.target.value)} />
        <AddTodo className="fas fa-plus" onClick={addButtonHandler}  />
      </TodoCategoryHeader>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          todo = {todo} 
          color={color}
          name = {name}
          // baseUrl={baseUrl}
          // name={name}
          // getTodos={getTodos}
        />
      ))}
      </Wrapper>
  );
};

export default TodoList;

const Wrapper = styled.div`
  background-color: #20212d;
  margin-bottom: 30px;
  border-radius: 20px;
  overflow: hidden;
`;

const TodoCategoryHeader = styled.div`
  background-color: #272833;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
`;

const CategoryIcon = styled.div`
  background-color: #fd76a1;
  height: 30px;
  width: 30px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Title = styled.div`
  flex: 1;
  font-size: 18px;
  font-weight: 600;
`;

const TodoInput = styled.input`
  height: 30px;
  font-size: 18px;
  outline: none;
  border: none;
  background-color: #20212d;
  border-radius: 4px;
  color: white;
  padding: 4px 10px;
  margin-right: 4px;
`;

const AddTodo = styled.i`
  padding: 10px 16px;
  border-radius: 4px;
  margin-right: -12px;
  cursor: pointer;

  &:hover {
    background-color: #20212d;
    transition: 0.3s;
  }
`;