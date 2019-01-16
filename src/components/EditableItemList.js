import React from 'react';
import {EditableItem} from './EditableItem';

export class EditableItemList extends React.Component {
    render() {
      const items = this.props.items.map((item) => (
        <EditableItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          onFormSubmit={this.props.onFormSubmit}
          onTrashClick={this.props.onTrashClick}
        />
      ));
      return (
        <div id='items'>
          {items}
        </div>
      );
    }
  }