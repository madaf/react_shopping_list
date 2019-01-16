import React from 'react';
import {ToggleableItemForm} from './ToggleableItemForm';
import {EditableItemList} from './EditableItemList'
const uuidv4 = require('uuid/v4');

const helpers = (function () {
    function newItem(attrs = {}) {
      const item = {
        title: attrs.title || 'Item',
        price: attrs.price || '0',
        id: uuidv4(),
      };
  
      return item;
    }
  
    return {
      newItem
    };
  }());

  export class ShoppingListDashboard extends React.Component {
    state = {
      items: [],
    };
  
    handleCreateFormSubmit = (item) => {
      this.addItem(item);
    };
  
    handleEditFormSubmit = (attrs) => {
      this.updateItem(attrs);
    };
  
    handleTrashClick = (itemId) => {
      this.deleteItem(itemId);
    };
  
  
    addItem = (item) => {
      const t = helpers.newItem(item);
      this.setState({
        items: this.state.items.concat(t),
      });
    };
  
    updateItem = (attrs) => {
      this.setState({
        items: this.state.items.map((item) => {
          if (item.id === attrs.id) {
            return Object.assign({}, item, {
              title: attrs.title,
              price: attrs.price,
            });
          } else {
            return item;
          }
        }),
      });
    };
  
    deleteItem = (itemId) => {
      this.setState({
        items: this.state.items.filter(t => t.id !== itemId),
      });
    };
  
  
    render() {
      return (
        <div className='ui three column centered grid'>
          <div className='column'>
            <EditableItemList
              items={this.state.items}
              onFormSubmit={this.handleEditFormSubmit}
              onTrashClick={this.handleTrashClick}
            />
            <ToggleableItemForm
              onFormSubmit={this.handleCreateFormSubmit}
            />
          </div>
        </div>
      );
    }
  }
  
  
  
  