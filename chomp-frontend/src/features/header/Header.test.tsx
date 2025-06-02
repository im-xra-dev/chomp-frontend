import { render, screen } from '@testing-library/react';
import * as React from 'react';
import App from '../../App';

test('header component initialised', () => {
    render(<App />);
    const linkElement = screen.getByTestId('header-home');
    expect(linkElement).toBeInTheDocument();
});
