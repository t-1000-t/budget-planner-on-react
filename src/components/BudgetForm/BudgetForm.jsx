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

export default class BudgetForm extends Component {
  state = {
    budget: '',
  };

  handleChange = e => {
    if (e.target.value < 0) {
      toast.warn('Вводите положительное значение!', {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      return;
    }
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave(Number(this.state.budget));
    this.setState({ budget: '' });
  };

  render() {
    const { budget } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input
            type="number"
            value={budget}
            onChange={this.handleChange}
            placeholder="Number > 0 ..."
          />
        </Label>

        <Button label="Save" type="submit" />
        <ToastContainer autoClose={2500} transition={Zoom} />
      </Form>
    );
  }
}
