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

        it('should render correctly in "debug" mode to show "rock"', () => {
            const testing = render(<App />);
            expect(testing.getByText('rock')).toHaveTextContent('rock');
        });

        it('should render correctly in "debug" mode to show "paper"', () => {
            const testing = render(<App />);
            expect(testing.getByText('paper')).toHaveTextContent('paper');
        });

        it('should render correctly in "debug" mode to show "scissors"', () => {
            const testing = render(<App />);
            expect(testing.getByText('scissors')).toHaveTextContent('scissors');
        });
    });
});