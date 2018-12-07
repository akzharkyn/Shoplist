import React, { Component } from 'react';
import ItemCreateForm from './ItemCreateForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

class ToggleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }

  }
  handleFormOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handleFormClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleFormSubmit = (item) => {
    this.props.onFormSubmit(item);
    this.setState({ isOpen: false });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <ItemCreateForm
        onFormSubmit={this.handleFormSubmit}
        onFormClose={this.handleFormClose} />
      );
     }else {
      return (
        <Button color="primary" size="lg" onClick={this.handleFormOpen}>New item</Button>
      );

    }
  }
}

export default ToggleForm;
