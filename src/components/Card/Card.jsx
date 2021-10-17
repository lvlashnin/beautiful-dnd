import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

import './Card.scss'

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color:'lightgreen';
`;

const Card = ({ cardContent, cardId, cardIndex }) => {
    return (

        <Draggable
            draggableId={cardId}
            index={cardIndex}
        >

            {(provided, snapshot) => (
                <Container                 
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                isDragging={snapshot.isDragging}
                >
                    {cardContent}
                </Container>
            )}

        </Draggable>

    )
}

export default Card;