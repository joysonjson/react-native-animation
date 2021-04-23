import {
  StyleSheet,
  Text,
  Image,
  View,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';
import React, {useEffect} from 'react';
// import {IMAGES} from '../../../constants';
// import Styles from './Styles';

const NotificationCard = () => {
  return (
    <View style={{backgroundColor: '#FBBF24', flex: 1, borderRadius: 16}}>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 0,
          marginTop: 11,
          justifyContent: 'flex-start',
        }}>
        <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
          }}
          style={{
            marginLeft: 16,
            height: 15,
            width: 15,
            resizeMode: 'contain',
          }}></Image>
        <Text
          style={{
            fontFamily: 'OpenSans-SemiBold',
            fontSize: 10,
            color: '#FFFFFF',
            marginLeft: 5,
          }}>
          1 sep 2022
        </Text>
      </View>
      <Text
        style={{
          fontFamily: 'OpenSans-SemiBold',
          fontSize: 10,
          color: '#000000',
          marginLeft: 16,
          marginTop: 16,
          justifyContent: 'center',
          alignContent: 'center',
          alignSelf: 'center',
          marginRight: 16,
        }}>
        KYC Is missing for the CLAIM_123456789, please update
      </Text>
      <View></View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 0,
          marginBottom: 0,
          position: 'absolute',
          bottom: -10,
        }}>
        <View style={Styles.triangleCorner} />

        <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
          }}
          style={{
            marginLeft: -51,
            height: 50,
            width: 50,
            resizeMode: 'contain',
            marginBottom: 9,
          }}></Image>
      </View>
    </View>
  );
};
export default NotificationCard;

const Styles = StyleSheet.create({
  triangleCorner: {
    width: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 51,
    borderTopWidth: 51,
    borderRightColor: 'transparent',
    borderTopColor: '#F5F5F5',
    transform: [{rotate: '270deg'}],
  },

  triangleCorner1: {
    width: 0,
    borderRadius: 8,
    shadowColor: '#848484',
    shadowOpacity: 0.9,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 30,
    borderTopWidth: 30,
    borderRightColor: 'transparent',
    borderTopColor: '#F5F5F5',
    transform: [{rotate: '90deg'}],
  },
  view: {
    flex: 1,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
