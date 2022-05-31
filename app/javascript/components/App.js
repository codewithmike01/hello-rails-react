import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Message from './Message';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Message />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
