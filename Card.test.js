import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';

describe('Card component', () => {

    it ('renders without crashing', () => {

        const div = document.createElement('div');
        ReactDOM.render(<Card title="Title" content="card 1" />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('renders ui as expected', () => {

        const tree = renderer.create(<Card title="Title" content="Content" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});