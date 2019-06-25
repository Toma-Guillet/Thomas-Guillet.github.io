import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Column from '../Column/Column';

const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Biocop' },
      'task-2': { id: 'task-2', content: 'Fleuriste' },
      'task-3': { id: 'task-3', content: 'Fleuriste' },
      'task-4': { id: 'task-4', content: 'Fleuriste' },
      'task-5': { id: 'task-5', content: 'Fleuriste' },
      'task-6': { id: 'task-6', content: 'Fleuriste' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Liste des commandes',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6'],
      },
    },
    columnOrder: ['column-1'],
  };

class List extends Component {
    state=initialData;

    onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if(!destination){
            return;
        }

        if(
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const column = this.state.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
            taskIds: newTaskIds,
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn,
            },
        };

        this.setState(newState);
    }


  render() {
    return (
        <DragDropContext
            onDragEnd={this.onDragEnd}
        >
       {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks} />
        })}
        </DragDropContext>
    );
  }
}

export default List;