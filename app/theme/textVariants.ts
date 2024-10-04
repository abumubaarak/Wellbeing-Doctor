import {isRTL, moderateScale} from '../utils';

export const textVariants = {
  header: {
    fontFamily: 'MontserratAlternates-SemiBold',
  },
  regular: {
    fontFamily: 'WorkSans-Regular',
    color: 'subLabel',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(22),
  },
  regularBold: {
    fontFamily: 'WorkSans-SemiBold',
  },
  buttonLabel: {
    fontFamily: 'WorkSans-SemiBold',
    color: 'white',
  },
  mSemiBold: {
    fontFamily: 'MontserratAlternates-SemiBold',
  },
  mBold: {
    fontFamily: 'MontserratAlternates-Bold',
  },

  defaults: {
    writingDirection: isRTL ? 'rtl' : 'ltr',
    color: 'subLabel',
    fontFamily: 'WorkSans-Regular',
    fontSize: moderateScale(14),
  },
};
