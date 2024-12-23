import { SafeAreaView, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { primaryColor } from '../constants/Colors';

const ScreenContainer = ({
  children,
  style,
  bgColor = primaryColor,
}: {
  children: ReactNode;
  style?: ViewStyle;
  bgColor?: string;
}): React.JSX.Element => (
  <SafeAreaView
    style={[
      { backgroundColor: bgColor, flex: 1, width: '100%', height: '100%' },
      style,
    ]}>
    {children}
  </SafeAreaView>
);

export default ScreenContainer;
