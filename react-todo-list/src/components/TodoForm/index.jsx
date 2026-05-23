import React from 'react';
import './TodoForm.style.css';

import { TextInput } from '../TextInput';
import { Button } from '../Button';

export function TodoForm({ onSubmit, defaultValue }) {
  return (
    <form action={onSubmit} className='todo-form'>
      <TextInput
        placeholder='Digite o item que deseja adicionar'
        name='description'
        defaultValue={defaultValue}
        required
      />
      <Button>Salvar item</Button>
    </form>
  );
}
