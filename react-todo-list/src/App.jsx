import React, { use } from 'react';

import { TodoContext } from './components/TodoProvider/TodoContext';
import { ChecklistsWrapper } from './components/ChecklistsWrapper';
import { Container } from './components/Container';
import { Dialog } from './components/Dialog';
import { FabButton } from './components/FabButton';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Heading } from './components/Heading';
import { TodoForm } from './components/TodoForm';
import { TodoGroup } from './components/TodoGrup';
import { IconPlus, IconSchool } from './components/icons';
import { EmptyState } from './components/EmptyState';

function App() {
  const {
    todos,
    addTodo,
    showDialog,
    openFormTodoDialog,
    closeFormTodoDialog,
    selectedTodo,
    editTodo,
  } = use(TodoContext);

  const handleFormSubmit = (formData) => {
    if (selectedTodo) {
      editTodo(formData);
    } else {
      addTodo(formData);
    }
    closeFormTodoDialog();
  };

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <TodoGroup
            heading='Para Estudar'
            items={todos.filter((t) => !t.completed)}
          />
          {todos.length == 0 && <EmptyState />}
          <TodoGroup
            heading='Concluídas'
            items={todos.filter((t) => t.completed)}
          />
          <Footer>
            <Dialog isOpen={showDialog} onClose={closeFormTodoDialog}>
              <TodoForm
                onSubmit={handleFormSubmit}
                defaultValue={selectedTodo?.description}
              />
            </Dialog>
            <FabButton onClick={() => openFormTodoDialog()}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
