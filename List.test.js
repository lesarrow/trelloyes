import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List';
import { exportAllDeclaration } from '@babel/types';

describe('List Component', () => {
    it ('renders without crashing', () => {

        const div = document.createElement('div');
        ReactDOM.render(<List header="Header" cards={[]}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('renders ui as expected', () => {

        const tree = renderer.create(<List header="Header" cards={[]} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});