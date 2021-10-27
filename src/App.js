import React from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';

function App() {
  return (
    <>
      <Alert></Alert>
      <ExpenseForm></ExpenseForm>
      <ExpenseList></ExpenseList>
    </>
  );
}

export default App;
