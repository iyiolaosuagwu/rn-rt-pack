import React from 'react';
import {Text, TextProps, ViewProps} from 'react-native';

import {TEXT_SIZE_TYPE, FONT_TYPES, COLOR_TYPES} from '@dtos';
import {SFSTextStyle} from '@assets/styles';

export interface RTTextProps extends TextProps {
    text?: string;
    style?: ViewProps;
    color?: COLOR_TYPES;
    weight?: FONT_TYPES;
    size?: TEXT_SIZE_TYPE;
    children?: React.ReactNode;
}

function RTText(props: RTTextProps) {
    const {text, style, weight, size, color, ...rest} = props;

    let textColorStyle = {};
    let textTypeStyle = {};
    let textWeightStyle = {};
    let textAlignStyle = {};

    switch (weight) {
        case 'normal':
            textWeightStyle = SFSTextStyle.textNormalWeightStyle;
            break;
        case 'bold':
            textWeightStyle = SFSTextStyle.textBoldWeightStyle;
            break;
        case 'light':
            textWeightStyle = SFSTextStyle.textLightWeightStyle;
            break;
        default:
            textWeightStyle = SFSTextStyle.textNormalWeightStyle;
            break;
    }

    switch (size) {
        case 'lg':
            textTypeStyle = SFSTextStyle.lgStyle;
            break;
        case 'h1':
            textTypeStyle = SFSTextStyle.h1Style;
            break;
        case 'h2':
            textTypeStyle = SFSTextStyle.h2Style;
            break;
        case 'h3':
            textTypeStyle = SFSTextStyle.h3Style;
            break;
        case 'header':
            textTypeStyle = SFSTextStyle.headerStyle;
            break;
        case 'title':
            textTypeStyle = SFSTextStyle.titleStyle;
            break;
        case 'body':
            textTypeStyle = SFSTextStyle.bodyStyle;
            break;
        case 'caption':
            textTypeStyle = SFSTextStyle.captionStyle;
            break;
        default:
            textTypeStyle = SFSTextStyle.titleStyle;
            break;
    }

    switch (color) {
        case 'primary':
            textColorStyle = SFSTextStyle.textPrimaryColor;
            break;
        case 'white':
            textColorStyle = SFSTextStyle.textWhiteColor;
            break;
        case 'dark':
            textColorStyle = SFSTextStyle.textDarkColor;
            break;
        case 'danger':
            textColorStyle = SFSTextStyle.textDangerColor;
            break;
        default:
            textColorStyle = SFSTextStyle.textDarkColor;
            break;
    }

    const baseTextStyle = {
        ...textTypeStyle,
        ...textWeightStyle,
        ...textColorStyle,
        ...textAlignStyle,
    };

    return (
        <Text {...rest} style={[baseTextStyle, {...style}]}>
            {text}
        </Text>
    );
}

RTText.defaultProps = {
    text: 'Text Required',
    weight: 'normal',
};

export default RTText;
