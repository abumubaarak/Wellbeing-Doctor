import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Screen, VerificationHeader} from '../../components';
import {useAppStore} from '../../data';
import {useFirestore} from '../../hooks';
import useUpload from '../../hooks/useUpload';
import {Document, PersonalInformation, Specialty} from '../../layout';
import {StackNavigation} from '../../navigators';

export const Verification = () => {
  const {
    gender,
    fullName,
    email,
    dob,
    bio,
    specialty,
    selfie,
    qualification,
    UID,
  } = useAppStore();
  const {uploadDocument, uploadError} = useUpload();
  const {verification, uploaded, error} = useFirestore();
  const [isLoading, setLoading] = useState<boolean>(false);

  const navigation = useNavigation<StackNavigation>();

  const isPersonalInfoValid =
    fullName && gender && dob && email && bio ? true : false;
  const isSpecialtyInfoValid = specialty.length > 0;
  const isIdentityInfoValid = selfie && qualification ? true : false;

  const INITIAL_LAYOUT =
    isPersonalInfoValid && isSpecialtyInfoValid
      ? 3
      : isPersonalInfoValid
      ? 2
      : 1;
  const [layout, setLayout] = useState(INITIAL_LAYOUT);
  const enableButton =
    layout === 1
      ? isPersonalInfoValid
      : layout === 2
      ? isSpecialtyInfoValid
      : layout === 3
      ? isIdentityInfoValid
      : layout === 4
      ? !isLoading
      : false;

  useEffect(() => {
    if (qualification.includes('http')) {
      verification(qualification, selfie);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qualification]);

  useEffect(() => {
    if (uploaded) {
      setLoading(false);
      navigation.reset({
        index: 0,
        routes: [{name: 'VerificationStatus'}],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploaded]);

  useEffect(() => {
    if (error || uploadError) {
      setLoading(false);
    }
  }, [error, uploadError]);

  const nextLayout = () => {
    if (layout === 3) {
      setLoading(true);
      setLayout(4);
      uploadDocument();
    } else {
      setLayout(layout + 1);
    }
  };

  return (
    <Screen
      isLoading={isLoading}
      buttonLabel="Continue"
      buttonOnPress={nextLayout}
      enabled={enableButton}>
      <>
        <VerificationHeader />
        {layout === 1 ? (
          <PersonalInformation />
        ) : layout === 2 ? (
          <Specialty />
        ) : (
          <Document />
        )}
      </>
    </Screen>
  );
};
