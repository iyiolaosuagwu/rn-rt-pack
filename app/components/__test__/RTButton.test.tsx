import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import RTButton from '@components/RTButton';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

describe('RTButton', () => {
    it('renders correctly', () => {
        render(<RTButton />);
    });
});
