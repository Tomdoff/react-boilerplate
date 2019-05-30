import React from 'react';
import { shallow } from 'enzyme';
import Contracts from './Contracts';

describe('<Contracts />', () => {
    test('renders', () => {
        const wrapper = shallow(<Contracts />);
        expect(wrapper).toMatchSnapshot();
    });
});
