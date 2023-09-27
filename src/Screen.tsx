import * as ImagePicker from 'expo-image-picker';
import React, { FunctionComponent } from 'react';
import { Button, StyleSheet, View } from 'react-native';

const Screen: FunctionComponent = () => {
  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === 'granted') {
      await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });
    }
  };

  const handlePickPhoto = async () => {
    await ImagePicker.launchImageLibraryAsync({
      presentationStyle: ImagePicker.UIImagePickerPresentationStyle.FULL_SCREEN,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Take photo" onPress={handleTakePhoto} />
      <Button title="Pick photo" onPress={handlePickPhoto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default Screen;
