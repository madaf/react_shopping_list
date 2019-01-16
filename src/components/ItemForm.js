import React from 'react';

export class ItemForm extends React.Component {
    state = {
      title: this.props.title || '',
      price: this.props.price || '',
    };
  
    handleTitleChange = (e) => {
      this.setState({ title: e.target.value });
    };
  
    handlePriceChange = (e) => {
      this.setState({ price: e.target.value });
    };
  
    handleSubmit = () => {
      this.props.onFormSubmit({
        id: this.props.id,
        title: this.state.title,
        price: this.state.price,
      });
    };
  
    render() {
      const submitText = this.props.id ? 'Update' : 'Create';
      return (
        <div className='ui centered card'>
          <div className='content'>
            <div className='ui form'>
              <div className='field'>
                <label>Title</label>
                <input
                  type='text'
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                />
              </div>
              <div className='field'>
                <label>Price</label>
                <input
                  type='number'
                  value={this.state.price}
                  onChange={this.handlePriceChange}
                />
              </div>
              <div className='ui two bottom attached buttons'>
                <button
                  className='ui basic blue button'
                  onClick={this.handleSubmit}
                >
                  {submitText}
                </button>
                <button
                  className='ui basic red button'
                  onClick={this.props.onFormClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  