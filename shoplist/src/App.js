import React, { Component } from 'react';

import './App.css';
import ToggleForm from './components/ToggleForm';
import ItemsList from './components/ItemsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup } from 'reactstrap';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          name: 'Book',
          amount: 2,
          price: 100,
          isCompleted: false
        },
        {
          id: 2,
          name: 'Pen',
          amount: 3,
          price: 100,
          isCompleted: false
        }
      ],
      cur_id: 0,
      completeds: []

    };
    this.handleCreateFormSubmit = this.handleCreateFormSubmit.bind(this);

  }
  handleCreateFormSubmit = (item) => {
  this.createItem(item);
  };

  createItem = (item) => {

    let cur_id = this.state.cur_id;
    this.setState({cur_id: cur_id +1})
    console.log(cur_id + "added")
    this.state.items.push({
      id: cur_id,
      name: item.name,
      price: item.price,
      amount: item.amount
  });
  };
  addToCompleted = (id) => {
    console.log(id)
    let item = this.state.items.filter((e) => e.id===id).name
    console.log(item)
    this.state.completeds.push({
      name: item.name,
      amount: item.amount,
      price: item.price,
      isCompleted: item.isCompleted
    } );
    this.setState({completeds: this.state.completeds});


  // }else {
  //   var updTasks = this.state.completeds;
  //   updTasks.splice(id, 1);
  //   //updTasks.splice(updTasks.indexOf(task), 1);
  //   this.setState({completeds: updTasks});
  // }
}

  render() {

    return (
      <div className='container'>
        <div className='toggleForm'>
          <ToggleForm onFormSubmit = {this.handleCreateFormSubmit}/>
        </div>
          <div className = "shoppinglist">
                    <h2> Shopping List</h2>
                    <ButtonGroup className="btnGroup">
                        <Button>All items</Button>
                        <Button>Current</Button>
                        <Button>Done</Button>
                    </ButtonGroup>
                    <div>
                      <ItemsList items = {this.state.items} toggleComp={this.addToCompleted}/>
                    </div>

          </div>
        </div>
    );
  }


}

export default App;
