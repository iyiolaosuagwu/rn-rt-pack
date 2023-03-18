import {StyleSheet} from 'react-native';

export const RTLayoutStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 1,
  },
  wrapper_with_out_padding: {
    flex: 1,
  },
  networkStatusBar_container: {
    height: 50,
    backgroundColor: 'red',
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  networkStatusBar_text: {
    color: '#ffffff',
    fontSize: 17,
  },
});
