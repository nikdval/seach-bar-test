import List from '.'
import { render, screen, cleanup } from '@testing-library/react';
import { countries } from '../../data/data';

const setup = () => render( <List countries={countries} />);

describe('List', () => {
    afterEach(() => {
        cleanup();
    });

    test('should display a list of items', () => {
        setup();
        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem').length).toEqual(countries.length);
    });

    test('should display the name of the country', () => {
        setup();
        expect(screen.getAllByRole('listitem')[0].textContent).toEqual(countries[0].name);
    });
});