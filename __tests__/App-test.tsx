import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../app/App';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

describe('App', () => {
    it('renders correctly', () => {
        render(<App />);
    });
});
