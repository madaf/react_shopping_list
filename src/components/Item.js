import React from 'react';

export class Item extends React.Component {
    state = {
      bought: false
    }
  
    handleTrashClick = () => {
      this.props.onTrashClick(this.props.id);
    };
    handleBuyClick = () => {
      this.setState({
          bought: !this.state.bought
      });
  };
  
    render() {
      return (
        <div className='ui centered card'>
          <div className='content center aligned'>
            <div className='header'>
              {this.props.title}
            </div>
            <div className='meta'>
            <span>$ </span>{this.props.price}
            </div>
            <div className='extra content'>
              <span
                className='right floated edit icon'
                onClick={this.props.onEditClick}
              >
                <i className='edit icon blue' />
              </span>
              <span
                className='right floated trash icon'
                onClick={this.handleTrashClick}
              >
                <i className='trash icon red' />
              </span>
            </div>
          </div>
          <div onClick = {this.handleBuyClick}
            className={this.state.bought ? 'ui bottom attached green basic button' : 'ui bottom attached red basic button'} >
            {this.state.bought ? "Bought" : "Buy"}
          </div>
          
        </div>
        
      );
    }
  }