import React, { Component } from 'react';
import { Form, FormGroup, FormControl, HelpBlock, ControlLabel} from 'react-bootstrap';

class FormExample extends Component{
  constructor(props){
    super(props);
      this.state={
          value: ''
      }
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10){
        return 'success';
    } 
    else if (length > 5) {
        return 'warning';
    }
    else if (length > 0){
        return 'error';
    } 
  }

  render() {
      const handleChange = (e)=>{
        this.setState({ value: e.target.value });
      }
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.state.value.length>15?'warning':(this.state.value.length>10?'success':this.state.value.length>0?'error':'')}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    );
  }
};

export default FormExample;