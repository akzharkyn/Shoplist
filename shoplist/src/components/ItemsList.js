import React, { Component } from 'react';
import { Table } from 'reactstrap';

class ItemsList extends Component {

  mult(amount, price) {
    return amount*price;
  }

  toggleCheckBox(id) {
    console.log(id)
    this.props.toggleComp(id);
  }

  render() {
    var items = this.props.items.map(
        (item, id)=>{
        return  (
              <tr key={item.id}>
                <th scope="row"><input type = "checkbox"
                onClick = {() => this.toggleCheckBox(item.id)} /></th>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.price}</td>
                <td>{this.mult(item.amount,item.price)}</td>
              </tr>
            );
          }
     );

    return (
      <div>
      <Table bordered>
         <thead>
           <tr>
             <th></th>
             <th>Item Name</th>
             <th>Amount</th>
             <th>Price</th>
             <th>Total</th>
           </tr>
         </thead>
         <tbody>
              {items}
        </tbody>
      </Table>
    </div>
    );
  }
}


export default ItemsList;
