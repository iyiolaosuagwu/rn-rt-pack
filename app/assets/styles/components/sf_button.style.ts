import {StyleSheet} from 'react-native';
import {BASE_STYLE, COLOR} from '../theme';

export const RTButtonStyle = StyleSheet.create({
    base_button_style: {
        ...BASE_STYLE.BUTTON,
    },

    pill_button_style: {
        ...BASE_STYLE.BUTTON,
        borderRadius: 50,
    },

    button_inner_wrapper_structure: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    primary_button_background_color_style: {
        backgroundColor: COLOR.PRIMARY,
    },

    primary_button_text_color_style: {
        color: 'white',
    },

    primary_button_icon_color_style: {
        color: '#fff',
    },

    light_button_background_color_style: {
        backgroundColor: '#F7F7F7',
        borderWidth: 1,
        borderColor: COLOR.LIGHT_GRAY,
    },

    light_button_text_color_style: {
        color: COLOR.PRIMARY,
    },

    light_button_icon_color_style: {
        color: '#000',
    },

    secondary_button_style: {
        backgroundColor: '#000000',
    },

    danger_button_background_color_style: {
        backgroundColor: '#F26262',
    },

    danger_button_text_color_style: {
        color: '#fff',
    },

    danger_button_icon_color_style: {
        color: '#fff',
    },

    naked_button_background_color_style: {
        backgroundColor: 'transparent',
    },

    naked_button_text_color_style: {
        color: '#F26262',
    },

    naked_button_icon_color_style: {
        color: '#F26262',
    },

    secondary_button_text_style: {
        color: 'white',
    },

    secondary_button_icon_color_style: {
        color: '#fff',
    },
});
