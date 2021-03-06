import React, { useState } from 'react';

import { Fab } from '@material-ui/core';
import { Send } from '@material-ui/icons';

import { MessageEditorStyles, Input } from './message-editor.styles';

const MessageEditor = ({ sendEvent }) => {
  const [text, setText] = useState('');

  const handleInputChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    sendEvent(text);

    setText('');
  };

  const onEnterPress = event => {
    if (text.length > 0 && event.keyCode === 13 && event.shiftKey === false)
      handleSubmit(event);
  };

  return (
    <MessageEditorStyles onSubmit={handleSubmit} id=''>
      <Input
        type='text'
        value={text}
        onChange={handleInputChange}
        onKeyDown={onEnterPress}
        placeholder='Say something...'
      />
      <Fab
        type='submit'
        variant='extended'
        color='primary'
        disabled={text.length === 0}
      >
        <Send />
        Send
      </Fab>
    </MessageEditorStyles>
  );
};

export default MessageEditor;
