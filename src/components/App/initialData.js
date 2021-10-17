import { v4 as uuidv4 } from 'uuid';

const initialData = [
    { id: uuidv4(), title: 'Board 1', cards: [{ id: uuidv4(), content: 'Make money 1' }, { id: uuidv4(), content: 'Make money 2' }, { id: uuidv4(), content: 'Make money 3' }] },
    { id: uuidv4(), title: 'Board 2', cards: [{ id: uuidv4(), content: 'Make money 4' }, { id: uuidv4(), content: 'Make money 5' }, { id: uuidv4(), content: 'Make money 6' }] },
    { id: uuidv4(), title: 'Board 3', cards: [{ id: uuidv4(), content: 'Make money 7' }, { id: uuidv4(), content: 'Make money 8' }, { id: uuidv4(), content: 'Make money 9' }] }
];


// const initialData = {
//     cards: {
//       'card-1': { id: 'card-1', content: 'Take out the garbage' },
//       'card-2': { id: 'card-2', content: 'Watch my favorite show' },
//       'card-3': { id: 'card-3', content: 'Charge my phone' },
//       'card-4': { id: 'card-4', content: 'Cook dinner' },
//     },
//     boards: {
//       'board-1': {
//         id: 'board-1',
//         title: 'To do',
//         cardIds: ['card-1', 'card-2', 'card-3', 'card-4'],
//       },
//     },    
//     boardOrder: ['board-1'],
//   };

//   console.log(initialData.boards['board-1'])

export default initialData;