import React, { Component } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from '../Task/Task';

const Container = styled.div`
    margin: 0px;
    margin-top: 107px;
    margin-bottom: 100px;
`;
const TaskList = styled.div`
    padding: 0px;
`;

class Column extends Component {
  render() {
    return (
        <Container>
            <Droppable droppableId={this.props.column.id}>
                {provided => (
                    <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                        {this.props.tasks.map((task, index) => (
                            <Task key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
    );
  }
}

export default Column;