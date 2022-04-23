import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TimerButton from './TimerButton';

describe('TimerButton', () => {

    let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        container = shallow(
            <TimerButton
                id = {''}
                className={''}
                buttonAction={jest.fn()}
                buttonValue={''}
                disabled
            />
        )
    })
    it('should render a <button />', () => {
        expect(container.find('button').length).toBeGreaterThanOrEqual(1);
    })
});


