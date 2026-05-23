import React from 'react';
import './TodoGrup.style.css';

import { SubHeading } from '../SubHeading';
import { ToDoItem } from '../ToDoItem';
import { ToDoList } from '../ToDoList';

export function TodoGroup({ items, heading }) {
  return (
    <>
      <SubHeading>{heading}</SubHeading>
      <ToDoList>
        {items.map(function (t) {
          return <ToDoItem key={t.id} item={t} />;
        })}
      </ToDoList>
    </>
  );
}
