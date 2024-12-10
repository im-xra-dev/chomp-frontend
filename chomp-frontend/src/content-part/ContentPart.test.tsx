import { render, screen } from '@testing-library/react';
import { ContentPart } from './ContentPart';
import * as React from 'react';

test('content-part component', () => {
    render(<ContentPart />);
    const linkElement = screen.getByTestId('mcp');
    expect(linkElement).toBeInTheDocument();
});
