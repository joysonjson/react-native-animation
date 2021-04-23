import React, {Component} from 'react';

import {Image, View, StyleSheet, Text, Animated} from 'react-native';

const fadeIn = duration => {
  // Will change fadeAnim value to 1 in 5 seconds
  Animated.timing(this.state.fadeAnim, {
    toValue: 1,
    duration: duration,
  }).start();
};
class Start extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeAnim1: new Animated.Value(0),
      fadeAnim2: new Animated.Value(0),
      logoAnimae: new Animated.Value(2),
      loading: false,
    };
  }

  componentDidMount() {
    Animated.parallel([
      Animated.spring(this.state.logoAnimae, {
        toValue: 1,
        // tension: 10,
        // friction: 2,
        duration: 1400,
      }).start(),

      Animated.timing(this.state.fadeAnim1, {
        toValue: 1,
        duration: 1800,
      }),
      Animated.timing(this.state.fadeAnim2, {
        toValue: 1,
        duration: 2400,
      }),
    ]).start(() => {
      this.setState({loading: true});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            {
              opacity: this.state.logoAnimae,
              left: this.state.logoAnimae.interpolate({
                inputRange: [0, 1],
                outputRange: [140, 0],
              }),
            },
          ]}>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1618417789032-4650eed12873?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            }}
            resizeMode="contain"
            style={styles.img}
          />
        </Animated.View>
        <Animated.View
          style={[
            {
              opacity: this.state.fadeAnim1,
            },
          ]}>
          <Text style={styles.title}>some text</Text>
        </Animated.View>
        <Animated.View
          style={[
            {
              opacity: this.state.fadeAnim2,
            },
          ]}>
          <Text style={styles.title}>nothing new</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    // paddingBottom: 80,
    marginBottom: 100,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    // flexShrink: 1,
    // flexWrap: 'wrap',
    color: '#eb1c50',
    fontSize: 16,
    margin: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});

export default Start;
