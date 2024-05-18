import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '.';

const setup = ({ changeHandler } = {}) => render(<Search changeHandler={changeHandler} />);

describe('Search', () => {
  afterEach(() => {
    cleanup();
  });
  test('should display input', () => {
    setup();
    expect(
      screen.getByRole('textbox', { name: /search/i })
    ).toBeInTheDocument();
  });

  test('should have no initial value', () => {
    setup();
    expect(screen.getByRole('textbox', { name: /search/i })).toHaveValue('');
  });

  test('should change value on type', () => {
    const mockChangeHandler = jest.fn();
    setup({ changeHandler: mockChangeHandler});
    const searchInput = screen.getByRole('textbox', { name: /search/i });
    userEvent.type(searchInput, 'Bel');
    expect(mockChangeHandler).toHaveBeenCalled();
  });
});
