import { render, screen } from '@testing-library/react';
import { describe, expect, test } from "vitest";
import { ContentFull } from './ContentFull';

describe('ContentFull', () => {
  test('content-part component', () => {
    render(<ContentFull />);
    const linkElement = screen.getByTestId('mcf');
    expect(linkElement).toBeInTheDocument();
  });
});
