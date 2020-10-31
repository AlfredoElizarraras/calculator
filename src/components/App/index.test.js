/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './index';

test('renders Math magicians calculator text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Math magicians calculator/i);
  expect(linkElement).toBeInTheDocument();
});
/* eslint-enable no-unused-vars */
