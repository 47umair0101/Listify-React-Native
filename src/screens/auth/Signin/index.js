import React from 'react';
import {Text, ScrollView} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Seperater from '../../../components/Seperater';
import GoogleLogin from '../../../components/GoogleLogin';

const Signin = () => {
  const onSignUp = () => {
    console.log('HOLA!');
  };

  return (
    <ScrollView style={styles.container}>
      <AuthHeader title={'Sign In'} />

      <Input label={'Email'} placeholder={'example@email.com'} />
      <Input isPassword label={'Password'} placeholder={'********'} />

      <Button style={styles.button} title={'Sign In'} />

      <Seperater text={'Or sign in with'} />

      <GoogleLogin />

      <Text style={styles.footerText}>
        Don’t have an account?{' '}
        <Text onPress={onSignUp} style={styles.footerLink}>
          Sign Up
        </Text>
      </Text>
    </ScrollView>
  );
};

export default Signin;
