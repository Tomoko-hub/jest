import App from './App';
import TodoTable from "./TodoTable";
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('renders todotable',()=>{
  const row=[
    {description:'Go to coffee', date:'24.11.2022'}
  ]

  render(<TodoTable todos={row} />);
  const tableRow = screen.getByText('Go to coffee');
  expect(tableRow).toBeInTheDocument();
})

test('add todo', ()=>{
  render(<App />);

  const desc = screen.getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value: 'Go to coffee'}})
  const date = screen.getAllByPlaceholderText('Date');
  fireEvent.change(date, { target: { value: '29.11.2020'}})

  fireEvent.click(screen.getByText('Add'));
  expect(screen.getByText('Go to coffee')).toBeInTheDocument();
})