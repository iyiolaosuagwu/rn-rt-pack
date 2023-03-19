/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RTIcon from '@components/RTIcon';
import RTLayout from '@components/RTLayout';
import {RootState, useAppDispatch, useAppSelector} from '@store';
import {login} from '@store/actions';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
}

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    // dispatch actions
    const dispatch = useAppDispatch();

    // extract user infor from store (authReducer)
    const {user, token} = useAppSelector(
        (state: RootState) => state.authReducer,
    );

    const checkIt = async () => {
        return dispatch(
            login({
                password: 'string',
                phone_number: 'string',
                push_token: 'string',
            }),
        );
    };

    console.log(user, token, 'user, token');

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <RTLayout>
            <SafeAreaView style={backgroundStyle}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={backgroundStyle}>
                    <Header />
                    <RTIcon size={30} />
                    <Pressable onPress={() => checkIt()}>
                        <Text>Press it</Text>
                    </Pressable>
                    <View
                        style={{
                            backgroundColor: isDarkMode
                                ? Colors.black
                                : Colors.white,
                        }}>
                        <Section title="Step One">
                            Edit <Text style={styles.highlight}>App.tsx</Text>{' '}
                            to change this screen and then come back to see your
                            edits.
                        </Section>
                        <Section title="See Your Changes">
                            <ReloadInstructions />
                        </Section>
                        <Section title="Debug">
                            <DebugInstructions />
                        </Section>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </RTLayout>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
