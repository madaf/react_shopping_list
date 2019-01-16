import React from 'react';
import {ItemForm} from './ItemForm';
import {Item} from './Item';

export class EditableItem extends React.Component {
    state = {
      editFormOpen: false,
    };
  
    handleEditClick = () => {
      this.openForm();
    };
  
    handleFormClose = () => {
      this.closeForm();
    };
  
    handleSubmit = (item) => {
      this.props.onFormSubmit(item);
      this.closeForm();
    };
  
    closeForm = () => {
      this.setState({ editFormOpen: false });
    };
  
    openForm = () => {
      this.setState({ editFormOpen: true });
    };
  
    render() {
      if (this.state.editFormOpen) {
        return (
          <ItemForm
            id={this.props.id}
            title={this.props.title}
            price={this.props.price}
            onFormSubmit={this.handleSubmit}
            onFormClose={this.handleFormClose}
          />
        );
      } else {
        return (
          <Item
            id={this.props.id}
            title={this.props.title}
            price={this.props.price}
            onEditClick={this.handleEditClick}
            onTrashClick={this.props.onTrashClick}
          />
        );
      }
    }
  }