// import {} from '@dtos'

export const FONT = {
  FONT_BOLD: 'Sora-Medium',
  FONT_LIGHT: 'Sora-Light',
  FONT_NORMAL: 'Sora-Regular',
  FONT_SEMI_BOLD: 'Sora-SemiBold',
};

export const COLOR = {
  BLACK: '#000',
  ORANGE: '#fd831e',
  LIGHT_ORANGE: '#f2c59f',
  PlACE_HOLDER_GRAY: '#f8f9fa',
  LIGHT_ORANGE_BACKGROUND: '#e6e6e6',
  DARK: '#1C2B3F',
  DARK_GRAY: '#7A8186',
  LIGHT_GRAY: '#E6E8EC',

  WHITE: 'white',
  LIGHT: '#898F9E',
  DANGER: '#ED4141',
  PRIMARY: '#09335E',
  SENCONDARY: '#2C2C38',
};

export const SIZE = {
  // global sizes
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,

  // font sizes
  lg: 30,
  h1: 26,
  h2: 21,
  h3: 18,
  title: 15,
  header: 16,
  body: 14,
  caption: 12,
};

export const BASE_STYLE = {
  BUTTON: {
    minHeight: 49, //need to look into this
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#E6E8EC',
  },
  PAGE_LAYOUT: {
    paddingTop: '2%',
    paddingHorizontal: '4.5%',
    backgroundColor: '#fff',
  },
  TEXT: {
    Lg: {
      fontFamily: FONT.FONT_NORMAL,
      fontSize: SIZE.lg,
    },
    H1: {
      fontFamily: FONT.FONT_NORMAL,
      fontSize: SIZE.h1,
    },
    H2: {
      fontFamily: FONT.FONT_NORMAL,
      fontSize: SIZE.h2,
    },
    H3: {
      fontFamily: FONT.FONT_NORMAL,
      fontSize: SIZE.h3,
    },
    HEADER: {
      fontFamily: FONT.FONT_NORMAL,
      fontSize: SIZE.header,
    },
    TITLE: {
      fontFamily: FONT.FONT_NORMAL,
      fontSize: SIZE.title,
    },
    BODY: {
      fontFamily: FONT.FONT_NORMAL,
      fontSize: SIZE.body,
    },
    CAPTION: {
      fontFamily: FONT.FONT_NORMAL,
      fontSize: SIZE.caption,
    },
  },
  INPUT: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 0.3,
    height: 53,
    width: '100%',
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    borderColor: '#898F9E',
    borderStyle: 'solid',
  },
  RADIO_BUTTOM: {
    height: 24,
    width: 24,
    borderRadius: 360,
    borderWidth: 2,
  },
  RADIO_BUTTOM_INNER_BUTTON: {
    height: 16,
    width: 16,
    borderRadius: 360,
  },
  LIST_BOTTOM_BORDER: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6E8EC',
  },
};
