import { Image, Text, View } from 'react-native';
import React from 'react';
import ScreenContainer from '../../containers/ScreenContainer';
import Button from '../../components/Button';
import styles from './OnBoard.style';
import { useTranslation } from 'react-i18next';

const OnBoard = () => {
  const { t } = useTranslation();

  return (
    <ScreenContainer style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/onboard_logo.png')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{t('mourly')},</Text>
        <Text style={styles.subtitle}>{t('onboard_subtitle')}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={styles.getStartedButton}
          text={t('register')}
          onPress={() => {}}
        />
        <Button
          buttonStyle={styles.getStartedButton}
          text={t('log_in')}
          onPress={() => {}}
        />
      </View>
    </ScreenContainer>
  );
};

export default OnBoard;
