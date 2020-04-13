import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants/index';
import NewConversationForm from '../messaging/NewConversationForm';
import MessagesArea from '../messaging/MessagesArea';
import Cable from '../messaging/Cable';

class ConversationList extends React.Component {
  render() {
    return (
      <div>
        Hello from ConversationList
      </div>
    );
  };
};

export default ConversationList;

