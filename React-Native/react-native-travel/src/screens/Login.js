import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from '../utils/common'

const ErrorText = styled.Text`
  align-items : flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.errorText};
`

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  margin:3%;
`;

const LogoContainer = styled.View`
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 3px solid ${({ theme }) => theme.logoBorder};
`;

const Login = ({ navigation }) => {

  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const _handleLoginIdChange = loginId => {
    const changedLoginId = removeWhitespace(loginId);
    setLoginId(changedLoginId);
    setErrorMessage(
      validateEmail(changedLoginId) ? '' : '이메일(아이디) 형식을 확인하세요'
    );
  };

  const _handleLoginButtonPress = () => {};

  const _handlePasswordChange = loginPassword => {
    setLoginPassword(removeWhitespace(loginPassword));
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      extraScrollHeight={20}
    >
      <Container>
        {/* 로고 추가 */}
        <LogoContainer>
          <Logo source={require('../../assets/Logo.png')} />
        </LogoContainer>
        <Input
          label="아이디"
          value={loginId}
          onChangeText={_handleLoginIdChange}
          onSubmitEditing={() => { }}
          placeholder="Email"
          returnKeyType="next"
        />
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        <Input
          label="비밀번호"
          value={loginPassword}
          onChangeText={_handlePasswordChange}
          onSubmitEditing={() => { }}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />

        <Button title="로그인" onPress={_handleLoginButtonPress} />
        <Button title="회원가입" onPress={() => navigation.navigate('Signup')} isFilled={false} />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Login;