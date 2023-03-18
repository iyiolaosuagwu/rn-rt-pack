import {StyleSheet} from 'react-native';
import {BASE_STYLE, COLOR, FONT} from '../theme';

export const SFSTextStyle = StyleSheet.create({
  lgStyle: {
    ...BASE_STYLE.TEXT.Lg,
  },
  h1Style: {
    ...BASE_STYLE.TEXT.H1,
  },
  h2Style: {
    ...BASE_STYLE.TEXT.H2,
  },
  h3Style: {
    ...BASE_STYLE.TEXT.H3,
  },
  headerStyle: {
    ...BASE_STYLE.TEXT.HEADER,
  },
  titleStyle: {
    ...BASE_STYLE.TEXT.TITLE,
  },
  bodyStyle: {
    ...BASE_STYLE.TEXT.BODY,
  },
  captionStyle: {
    ...BASE_STYLE.TEXT.CAPTION,
  },
  textPrimaryColor: {
    color: COLOR.PRIMARY,
  },
  textLightColor: {
    color: COLOR.LIGHT,
  },
  textWhiteColor: {
    color: COLOR.WHITE,
  },
  textDarkColor: {
    color: COLOR.DARK,
  },
  textDangerColor: {
    color: COLOR.DANGER,
  },

  textBoldWeightStyle: {
    fontFamily: FONT.FONT_BOLD,
  },
  textNormalWeightStyle: {
    fontFamily: FONT.FONT_NORMAL,
  },
  textLightWeightStyle: {
    fontFamily: FONT.FONT_LIGHT,
  },
});
