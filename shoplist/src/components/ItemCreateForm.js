import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class ItemCreateForm extends Component {
  constructor(props){
  super(props);
  this.state = {
    name: '',
    amount: '',
    price: ''
  };
  }

    handleNameChange = (e) => {
      this.setState({
        name: e.target.value
      });
    };

    handlePriceChange = (e) => {
      this.setState({
        price: e.target.value
      });
    };
    handleAmountChange = (e) => {
      this.setState({
        amount: e.target.value
      });
    };

    handleSubmit = () => {
      this.props.onFormSubmit({
        name: this.state.name,
        price: this.state.price,
        amount: this.state.amount

      });
    };

    render() {
      return (
        <div>
        <Form>
           <FormGroup>
             <Label for="exampleName">Name</Label>
             <Input type="text" name="name" id="exampleName" placeholder="Item Name.."
             value={this.state.name}
             onChange={this.handleNameChange} />
           </FormGroup>
           <FormGroup>
              <Label for="exampleAmount">Amount</Label>
              <Input type="number" name="amount" id="exampleAmount" placeholder="Item Amount.."
              value={this.state.amount}
              onChange={this.handleAmountChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="examplePrice">Price</Label>
              <Input type="number" name="price" id="examplePrice" placeholder="Item Price.."
              value={this.state.price}
              onChange={this.handlePriceChange}/>
            </FormGroup>
         </Form>
            <div className="createBtns">
              <Button color="success" onClick={this.handleSubmit}>Create</Button>{' '}
              <Button color="danger" onClick={this.props.onFormClose}>Cancel</Button>{' '}
            </div>
          </div>
          );
        }
}
export default ItemCreateForm;
