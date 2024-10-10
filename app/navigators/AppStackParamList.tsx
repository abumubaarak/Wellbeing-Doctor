import {NavigationProp} from '@react-navigation/native';

export type AppStackParamList = {
  Onboarding: undefined;
  Verification: undefined;
  VerificationStatus: undefined;
  HomeTab: undefined;
  Capture: {type: 'SELFIE' | 'ID'};
};
export type StackNavigation = NavigationProp<AppStackParamList>;
