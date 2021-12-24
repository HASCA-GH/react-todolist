import React from "react";
import styled from "styled-components";
const TodoItem = () => {
  return (
    <TodoListItem>
      <Checkbox className="far fa-circle" />
      <input />
      <SaveTodo className="fas fa-check" />
      <DeleteTodo className="fas fa-trash-alt" />
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
