import React, { useState } from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Board from '../Board/Board';

import './App.scss';
import initialData from './initialData';

const Container = styled.div`
  display: flex;
`;

const App = () => {

  const [stateData, setStateData] = useState(initialData);

  const dragEndBoardListener = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    if (type === 'board') {
      const newStateData = JSON.parse(JSON.stringify(stateData));
      newStateData.splice(destination.index, 0, ...newStateData.splice(source.index, 1));
      setStateData(newStateData);
      return;
    }

    if (type === 'card') {
      const newStateData = JSON.parse(JSON.stringify(stateData));
      console.log(result);
      console.log(stateData);
      console.log('destination', newStateData[newStateData.indexOf(...newStateData.filter(board => board.id === destination.droppableId))].cards[destination.index]);
      console.log('current', newStateData[newStateData.indexOf(...newStateData.filter(board => board.id === source.droppableId))].cards[source.index]);
      newStateData[newStateData.indexOf(...newStateData.filter(board => board.id === destination.droppableId))].cards.splice(destination.index, 0,
        ...newStateData[newStateData.indexOf(...newStateData.filter(board => board.id === source.droppableId))].cards.splice(source.index, 1));
      setStateData(newStateData);
      return;
    }

  }

  return (
    <div className="App">
      <h2>To Do List</h2>
      <DragDropContext onDragEnd={dragEndBoardListener}>
        <Droppable
          droppableId="all-boards"
          direction="horizontal"
          type="board"
        >
          {provided => (
            <Container
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {stateData.map((board, index) => (
                <Board
                  boardId={board.id}
                  boardIndex={index}
                  key={board.id}
                  boardTitle={board.title}
                  boardCards={board.cards}
                />
              ))}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>

      </DragDropContext>
    </div>
  );
}

export default App;
