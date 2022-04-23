import { render, cleanup } from '@testing-library/react';
import Header from './Header';

describe('Test for Header', () => {
    afterEach(cleanup);

    it('Renders Header Component',() => {
        render(<Header />);
    })

    it('Renders Header Title', () => {
        const { getByText }  = render(<Header />);
        const header = getByText(/timer app/i);
        expect(header).toBeInTheDocument;
    })
})
