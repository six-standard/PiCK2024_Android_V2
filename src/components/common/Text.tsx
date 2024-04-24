import {Text as NativeText} from 'react-native';

// 들어갈 거
// 폰트 스타일 (타입, 사이즈)
// 텍스트
// 기타 스타일

const types = {
  heading: {
    1: {},
  },
};

export const Text = ({type, children, style}) => {
  return (
    <NativeText style={{fontFamily: 'WantedSans-Regular'}}>asdf</NativeText>
  );
};
