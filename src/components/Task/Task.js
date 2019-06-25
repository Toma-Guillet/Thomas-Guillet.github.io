import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Link } from "react-router-dom";

import imgArrow from '../../img/arrow.png';
import imgFlag from '../../img/flag.png';
import imgPin from '../../img/pin.png';
import imgBike from '../../img/bike.png';
import './task.scss';

class Task extends Component {
  render() {
    return (
        <Draggable draggableId={this.props.task.id} index={this.props.index}>
            {provided => (
                <div
                    className="containerBox"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div className="header">EN COURS DE LIVRAISON</div>
                    <div className="content">
                        <div className="infos">
                            <div className="line">
                                <div className="cardType karla"><img src={imgPin} alt="Pick up" /> PICK UP</div>
                                <div className="cardStatus">Urgent</div>
                                <div className="idDelivery karla">#50</div>
                            </div>
                            <div className="customerName karla">{this.props.task.content}</div>
                            <div className="cardAddress">6 rue des lilas,<br />44000 Nantes</div>
                            <div className="line">
                                <div className="iconTypeDelivery"><img src={imgBike} alt="Bike" /></div>
                                <div className="cardStatus">Gaspard</div>
                                <div className="cardSchedule karla">09:00 > 12:00</div>
                            </div>
                        </div>
                        <Link
                            to={{
                                pathname: "/order",
                                order: this.props.task,
                            }}>
                            <button className="goTo" type="button">
                                <img src={imgArrow} alt="Détails" />
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </Draggable>
    );
    
  }
}

export default Task;