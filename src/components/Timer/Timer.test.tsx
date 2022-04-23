import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Timer from './Timer';

describe('Timer', () => {
    let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => (container = shallow(<Timer />)))

    it('should render a <div />', () => {
        expect(container.find('div').length).toBeGreaterThanOrEqual(1);
    })

    it('should render instances of the TimerButton component', () => {
        expect(container.find('TimerButton').length).toEqual(3)
    })

})

describe('Render<Timer />', () => {
    afterEach(cleanup);
    

    test('Should call startTimer when start button is clicked', () => {
        let startT = jest.fn();
        render(<Timer />);
        const timerButton = screen.getByTestId('start')
        timerButton.onclick = startT;
        fireEvent.click(timerButton);
        expect(startT).toHaveBeenCalledTimes(1);
    })

    test('Should call stopTimer when stop button is clicked', () => {
        const stopT = jest.fn();
        render(<Timer />);
        const timerButton = screen.getByTestId('stop');
        timerButton.onclick = stopT;
        fireEvent.click(timerButton);
        expect(stopT).toHaveBeenCalledTimes(1);
    })

    test('Should call resetTimer when reset button is clicked', ()=>{
        const resetT = jest.fn();
        render(<Timer />);
        const resetButton = screen.getByTestId('reset');
        resetButton.onclick = resetT;
        fireEvent.click(resetButton);
        expect(resetT).toHaveBeenCalledTimes(1);
    })

    test('Should disable start button when start button is clicked',() => {
        const start = jest.fn();
        render(<Timer />);
        const startButton = screen.getByTestId('start');
        startButton.onclick = start;
        fireEvent.click(startButton);
        expect(startButton).toBeDisabled;
    })

    test('Should enable start button and disable stop button when stop button is clicked', () => {
        const stop = jest.fn();
        render(<Timer />);
        const stopButton = screen.getByTestId('stop');
        const startButton = screen.getByTestId('start');
        stopButton.onclick = stop;
        fireEvent.click(stopButton);
        expect(stopButton).toBeDisabled;
        expect(startButton).toBeEnabled;
    })

    test('Should disable start and stop button when reset  button is clicked', ()=> {
        const reset = jest.fn();
        render(<Timer />);
        const stopButton = screen.getByTestId('stop');
        const startButton = screen.getByTestId('start');
        const resetButton = screen.getByTestId('reset');
        resetButton.onclick = reset;
        fireEvent.click(resetButton);
        expect(stopButton).toBeDisabled;
        expect(startButton).toBeDisabled;
    })
})

