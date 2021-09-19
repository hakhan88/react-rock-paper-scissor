import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Test Wrapper', () => {
    beforeEach(() => {
        // console.log('testing');
    })

    describe('App', () => {
        it('should render correctly in "debug" mode', () => {
            const testing = render(<App />);
            expect(testing.getByText('Please select your choice')).toHaveTextContent('Please select your choice');
        });
    });
});