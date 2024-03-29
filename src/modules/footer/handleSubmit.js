import { getElement, getElementValue } from '../utils';

export const handleSubmit = socket => () => {
  const messageEl = getElement('#message-content');
  const content = messageEl.value;
  const from = getElementValue('#username');
  const to = getElementValue('#message-to');
  const type = getElementValue('#message-type');
  const date = Date.now();

  if (content) {
    const message = {
      from,
      to,
      content,
      type,
      date,
    };

    socket.emit('message', message);
    messageEl.value = '';
    messageEl.focus();
  }
};
