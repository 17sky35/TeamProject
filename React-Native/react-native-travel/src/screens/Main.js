import React from "react";
import { Button } from "../components";
import styled from "styled-components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({theme}) => theme.background};
    padding: 0 20px;
    padding-top:${({insets:{top}})=> top}px;
    padding-bottom:${({insets:{bottom}})=> bottom}px;
`
const Text = styled.Text`
  align-items : center;
  width: 100%;
  margin-bottom: 10px;
  line-height: 200px;
  color: ${({ theme }) => theme.text};
  font-size: 20px; 
`


const Main = ({navigation}) => {

    const insets = useSafeAreaInsets();

    return(
        <Container insets={insets}>
           <Text>홍길동님 환영합니다.</Text>
            <Button title="기록 시작하기" onPress={() => navigation.navigate('Map')} />
            <Button title="내 기록 보기" onPress={() => navigation.navigate('MyPost')} />
        </Container>
    )
}

export default Main