import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Seamless MD JSON Parser/i);
  expect(linkElement).toBeInTheDocument();
});
