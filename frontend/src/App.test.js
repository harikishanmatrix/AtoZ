import { render, screen } from '@testing-library/react';
import Food from './App';

test('renders learn react link', () => {
  render(<Food />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
