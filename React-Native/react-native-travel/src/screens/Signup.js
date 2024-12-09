import React, {useState} from 'react';
import styled from 'styled-components';
import { Input,Button } from "../components/index";
import { validateEmail,removeWhitespace } from "../utils/common";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding:0 20px;
  color:${({ theme }) => theme.errorText};
`;
const ErrorText = styled.Text`
    align-items:flex-start;
    width:100%;
    height:20px;
    margin-bottom:10px;
    line-height:20px;
    color:${({ theme }) => theme.errorText};
`
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



const Signup = () => {
  const [userName, setUserName] = useState("")//이름
  const [userId, setUserId] = useState("")//아이디(이메일)
  const [password, setPassword] = useState("")//비밀번호
  const [passwordConfirm, setPasswordConfirm] = useState("")//비밀번호 일치
  const [errorMessage, setErrorMessage] = useState("")//에러메시지
  const [disabled, setDisabled] = useState(true)//버튼 활성화 여부
  const [photoUrl, setPhotoUrl] = useState("");

  const _handleUserIdChange = userId => {
    const changedUserId = removeWhitespace(userId);
    setUserId(changedUserId);
    setErrorMessage(
      validateEmail(changedUserId) ? '' : '이메일(아이디) 형식을 확인하세요'
    );
  };

  const _handleSignupButtonPress = () => {};

  const _handlePasswordChange = password => {
    setPassword(removeWhitespace(password));
  };


  return (
    <KeyboardAwareScrollView>
    <Container>
      <LogoContainer>
          <Logo source={require('../../assets/Logo.png')} />
        </LogoContainer>
        <Input
          label="아이디"
          value={userId}
          onChangeText={_handleUserIdChange}
          onSubmitEditing={() => { }}
          placeholder="Email"
          returnKeyType="next"
        />
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        <Button
          title="중복체크"
        />
        <Button
          title="이메일 인증"
        />
        <Input
          label="이름"
          placeholder="Name"
        />
        <Input
          label="닉네임"
          placeholder="Nickname"
        />
        
        <Input
          label="비밀번호"
          value={password}
          onChangeText={_handlePasswordChange}
          onSubmitEditing={() => { }}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />
        <Input
          label="비밀번호 확인"
          placeholder="Password Confirm"
          isPassword
        />
        <Button
          title="회원 가입"
          disabled={disabled}
        />
    </Container>
    </KeyboardAwareScrollView>

  );
};

export default Signup;