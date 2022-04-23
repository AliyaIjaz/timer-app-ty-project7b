import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';
import Timer from '../Timer/Timer';
import Header from '../Header/Header';

describe('App', ()=>{

    let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(()=>(container = shallow(<App/>)))

    it('should render a <div />', ()=>{
        expect(container.find('div').length).toEqual(2);
    });

    it('should render Header component', ()=>{
        expect(container.containsMatchingElement(<Header />)).toEqual(true);
    });

    it('should render Timer component', ()=>{
        expect(container.containsMatchingElement(<Timer />)).toEqual(true);
    });
});