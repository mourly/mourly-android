import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { primaryColor, secondaryColor } from '../constants/Colors';

interface PropsType {
  text: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const Button = ({
  text,
  onPress,
  buttonStyle,
  textStyle,
  disabled,
}: PropsType): React.JSX.Element => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[styles.container, disabled && { opacity: 0.5 }, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: secondaryColor,
    padding: 15,
    borderRadius: 10,
  },
  text: {
    fontSize: 26,
    color: primaryColor,
    fontFamily: 'Poppins-Bold',
    marginBottom: -5,
  },
});
