import { StyleSheet } from 'react-native';
import { secondaryColor } from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    gap: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 450,
    height: 450,
    marginBottom: -25,
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: '7.5%',
  },
  title: {
    fontSize: 48,
    color: secondaryColor,
    fontFamily: 'Poppins-Bold',
    marginBottom: -5,
  },
  subtitle: {
    fontSize: 24,
    color: secondaryColor,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: -5,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  getStartedButton: {
    width: '85%',
  },
  alreadyMemberText: {
    fontSize: 18,
    color: secondaryColor,
    fontFamily: 'Poppins-Medium',
    marginBottom: -5,
  },
  signInText: {
    fontFamily: 'Poppins-SemiBold',
    marginBottom: -5,
  },
});

export default styles;
