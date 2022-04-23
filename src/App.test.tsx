import { shallow } from 'enzyme';
import App from './components/App/App';

 
test('renders the component', () => {
  const component = shallow(<App />);
  expect(component.find('div').length).toEqual(2);
});