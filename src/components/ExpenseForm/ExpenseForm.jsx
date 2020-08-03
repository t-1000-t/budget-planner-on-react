import React, { Component } from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

class ExpenseForm extends Component {
  state = {
    name: '',
    amount: '',
  };

  handleChange = e => {
    console.log(this.props.balance);
    if (e.currentTarget.type === 'number' && e.target.value <= 0) {
      toast.warn('Введите другое значение!', {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      return;
    }
    if (
      e.currentTarget.type === 'number' &&
      e.target.value > this.props.balance
    ) {
      toast.error('Вводите значение меньше вашего баланса!', {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      return;
    }
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSave({ ...this.state });
    this.setState({ name: '', amount: '' });
  };

  render() {
    const { name, amount } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Name"
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
            placeholder="Number > 0 ..."
          />
        </Label>

        <Button label="Add" type="submit" />
        <ToastContainer autoClose={2500} transition={Zoom} />
      </Form>
    );
  }
}

export default ExpenseForm;
