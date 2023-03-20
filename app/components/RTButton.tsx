import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {ICON_TYPE} from '@dtos';
import RTIcon from '@components/RTIcon';
import RTText from '@components/RTText';
import {RTButtonStyle} from '@assets/styles';

interface SFButtonProps {
    label?: string;
    icon?: ICON_TYPE;
    color?: 'primary' | 'secondary' | 'light' | 'danger';
    type?: 'normal' | 'pill';
    handleOnPress?: Function;
    isDisabled?: boolean;
    style?: object;
}

function SFButton(props: SFButtonProps) {
    const {
        label,
        type,
        icon,
        color,
        handleOnPress,
        style,
        isDisabled = false,
    } = props;

    let buttonStyle = {};
    let buttonColorStyle = {};
    let buttonIconColorStyle = {};
    let buttonTextColorStyle = {};

    switch (type) {
        case 'normal':
            buttonStyle = RTButtonStyle.base_button_style;
            break;

        case 'pill':
            buttonStyle = RTButtonStyle.pill_button_style;
            break;

        default:
            buttonStyle = RTButtonStyle.base_button_style;
            break;
    }

    switch (color) {
        case 'primary':
            buttonColorStyle =
                RTButtonStyle.primary_button_background_color_style;
            buttonTextColorStyle =
                RTButtonStyle.primary_button_text_color_style;
            buttonIconColorStyle =
                RTButtonStyle.primary_button_icon_color_style;
            break;

        case 'secondary':
            buttonColorStyle = RTButtonStyle.secondary_button_style;
            buttonTextColorStyle = RTButtonStyle.secondary_button_text_style;
            buttonIconColorStyle =
                RTButtonStyle.secondary_button_icon_color_style;
            break;

        case 'light':
            buttonColorStyle =
                RTButtonStyle.light_button_background_color_style;
            buttonTextColorStyle = RTButtonStyle.light_button_text_color_style;
            buttonIconColorStyle = RTButtonStyle.light_button_icon_color_style;
            break;

        case 'danger':
            buttonColorStyle =
                RTButtonStyle.danger_button_background_color_style;
            buttonTextColorStyle = RTButtonStyle.danger_button_text_color_style;
            buttonIconColorStyle = RTButtonStyle.danger_button_icon_color_style;
            break;

        default:
            buttonColorStyle =
                RTButtonStyle.light_button_background_color_style;
            buttonTextColorStyle = RTButtonStyle.light_button_text_color_style;
            buttonIconColorStyle = RTButtonStyle.light_button_icon_color_style;
            break;
    }

    return (
        <TouchableOpacity
            disabled={isDisabled}
            activeOpacity={0.8}
            style={[buttonStyle, buttonColorStyle]}
            onPress={() => handleOnPress?.()}>
            <View style={RTButtonStyle.button_inner_wrapper_structure}>
                {icon && (
                    <RTIcon
                        style={[
                            {marginRight: 5},
                            buttonIconColorStyle,
                            {...style},
                        ]}
                        icon={icon}
                    />
                )}
                <RTText text={label} style={buttonTextColorStyle} />
            </View>
        </TouchableOpacity>
    );
}

SFButton.defaultProps = {
    title: 'Button',
    type: 'normal',
    onPress: () => console.log(),
};

export default SFButton;
