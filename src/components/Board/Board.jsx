import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import Card from '../Card/Card';

import './Board.scss'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  padding: 8px;
`;

const CardList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color:'lightgrey';
  flex-grow: 1;
  min-height: 100px;
`;

const Board = ({ boardTitle, boardCards, boardId, boardIndex }) => {

    return (
        <Draggable
            draggableId={boardId}
            index={boardIndex}
        >
            {provided => (
                <Container
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <Title {...provided.dragHandleProps}>
                        {boardTitle}
                    </Title>

                    <Droppable
                        droppableId={boardId}
                        index={boardIndex}
                        type="card"
                    >
                        {(provided, snapshot) => (
                            <CardList                                
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                                
                            >
                                {boardCards.map((card, index) => {
                                    return  <Card
                                    key={card.id}
                                    cardId={card.id}
                                    cardIndex={index}
                                    cardContent={card.content}
                                    />
                                })}
                            {provided.placeholder}
                            </CardList>
                        )}

                    </Droppable>
                </Container>
            )}
        </Draggable>


    )
}

export default Board;



// <Droppable 
        // droppableId={String(boardId)}  
        // index={boardIndex}
        // >

        //     {(provided) => (
        //         <div className='board'
        //         {...provided.droppableProps}
        //         ref={provided.innerRef}
        //         >
        //             <h3>{boardTitle}</h3>
        //             {boardCards.map((card, index) => (
        //                 <Card
        //                     key={card.id}
        //                     boardId={boardId}
        //                     cardId={card.id}
        //                     cardIndex={index}
        //                     cardContent={card.content}
        //                 />
        //             ))}
        //             {provided.placeholder}
        //         </div>
        //     )}

        // </Droppable>
