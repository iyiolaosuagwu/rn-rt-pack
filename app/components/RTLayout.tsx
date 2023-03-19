/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import {
    View,
    PanResponder,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import {RTLayoutStyle} from '@assets/styles';

interface RTLayoutProps {
    style?: object;
    children?: React.ReactNode;
    scrollable?: Boolean;
    canTimeout?: Boolean;
    useSafeArea?: Boolean;
}

// this is in milliseconds
const screen_ttl = 1000;

const RTLayout = (props: RTLayoutProps) => {
    const {style, children} = props;
    const netInfo = useNetInfo();

    const start = true;
    const lastInteraction = useRef(new Date());
    const [timeWentInactive, setTimeWentInactive] = useState<Date | null>(null);
    const inactivityTimer = useRef<boolean | number>(false);
    const waitForInactivity = useRef<number>(0);

    useEffect(() => {
        if (start) {
            //  180 secs
            const autologoutTime = 180;
            waitForInactivity.current = autologoutTime * 1000;
        }
    }, [start]);

    const performAutoLogout = useCallback(() => {
        // navigate to login screen / welcome screen
        console.log({
            idle: 'idle',
            logout: 'yesy',
        });
    }, []);

    const checkInactive = useCallback(() => {
        if (inactivityTimer.current) {
            return;
        }
        inactivityTimer.current = setInterval(() => {
            if (
                Math.abs(
                    new Date().valueOf() - lastInteraction.current.valueOf(),
                ) >= waitForInactivity.current
            ) {
                setIsInactive();
            }
        }, screen_ttl);
    }, []);

    useEffect(() => {
        if (start) {
            checkInactive();
        }
    }, [checkInactive, start]);

    const setIsActive = useCallback(() => {
        lastInteraction.current = new Date();
        if (timeWentInactive) {
            setTimeWentInactive(null);
        }

        if (start) {
            checkInactive();
        }
    }, [checkInactive, start, timeWentInactive]);

    const setIsInactive = () => {
        setTimeWentInactive(new Date());
        performAutoLogout();
        clearInterval(inactivityTimer.current as number);
        inactivityTimer.current = false;
        console.log('idle');
    };

    const handleMoveShouldSetPanResponder = useCallback(() => {
        console.log('touch');
        setIsActive();
        return false;
    }, [setIsActive]);

    const handleStartShouldSetPanResponder = useCallback(() => {
        console.log('touch');
        setIsActive();
        return false;
    }, [setIsActive]);

    const panResponder = useMemo(
        () =>
            PanResponder.create({
                onStartShouldSetPanResponder: handleStartShouldSetPanResponder,
                onMoveShouldSetPanResponder: handleMoveShouldSetPanResponder,
                onStartShouldSetPanResponderCapture: () => false,
                onMoveShouldSetPanResponderCapture: () => false,
                onPanResponderTerminationRequest: () => true,
                onShouldBlockNativeResponder: () => false,
            }),
        [handleMoveShouldSetPanResponder, handleStartShouldSetPanResponder],
    );

    const renderNetWorkStatusBarUI = () => {
        if (
            netInfo.type !== 'unknown' &&
            netInfo.isInternetReachable === false
        ) {
            return (
                <View style={RTLayoutStyle.networkStatusBar_container}>
                    <Text style={RTLayoutStyle.networkStatusBar_text}>
                        No internet connection
                    </Text>
                </View>
            );
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <View
                style={[RTLayoutStyle.wrapper, {...style}]}
                {...panResponder.panHandlers}>
                {renderNetWorkStatusBarUI()}
                {children}
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default RTLayout;
