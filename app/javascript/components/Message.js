import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../redux/Message/messages';

const Message = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessage());
  }, []);

  const { message } = useSelector((state) => state.message_text);
  return <h1> {message.text} </h1>;
};

export default Message;
