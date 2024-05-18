import { render, screen, cleanup, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const setup = () => render(<App />);

describe('App', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    cleanup();
  });

  test('should search input change value on type', async () => {
    setup();
    const searchInput = screen.getByRole('textbox', { name: /search/i });
    await userEvent.type(searchInput, 'Bel');
    expect(searchInput).toHaveValue('Bel');
  });

  test('should filter countries list on search input value change', async () => {
    setup();
    const searchInput = screen.getByRole('textbox', { name: /search/i });
    await userEvent.type(searchInput, 'Bel');
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getAllByRole('listitem').length).toEqual(1);
    expect(screen.getAllByRole('listitem')[0].textContent).toEqual('Belgium');
  });
});
