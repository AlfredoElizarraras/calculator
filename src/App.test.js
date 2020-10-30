import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Math magicians calculator text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Math magicians calculator/i);
  expect(linkElement).toBeInTheDocument();
});
