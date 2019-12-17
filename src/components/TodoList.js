import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="dddddddd" done={true} />
      <TodoItem text="aaaaaaaa" done={true} />
      <TodoItem text="bbbbbbbbb" done={false} />
      <TodoItem text="cccccccc" done={true} />
    </TodoListBlock>
  )
}

export default TodoList;