import {ViewStyle} from 'react-native';
import {colors} from '../../theme/colors';
import {moderateScale} from '../../utils';

export const $container: ViewStyle = {
  marginTop: moderateScale(8),
  borderRadius: moderateScale(100),
};

export const $border: ViewStyle = {
  borderWidth: 1,
  borderColor: colors.secondary2Dark,
  backgroundColor: colors.primary,
};

export const $button: ViewStyle = {
  justifyContent: 'center',
  borderRadius: moderateScale(100),
};

export const $widthHeightStyle = (wnh: number) => ({
  width: moderateScale(wnh),
  height: moderateScale(wnh),
});
