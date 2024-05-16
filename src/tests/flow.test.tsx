import { expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { nodesResult } from './data';
import Flow from '../components/Flow';

it('should render the component Flow Component correctly', () => {
  const ResizeObserverMock = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));

  vi.stubGlobal('ResizeObserver', ResizeObserverMock);

  const { nodes, edges } = nodesResult;
  const { getByText, getByAltText } = render(
    <Flow nodes={nodes} edges={edges} />
  );

  expect(getByText(/Jek Tono Porkins/i)).toBeInTheDocument();
  expect(getByAltText(/A New Hope/i)).toBeInTheDocument();
  expect(getByText(/T-65 X-wing/i)).toBeInTheDocument();
});
