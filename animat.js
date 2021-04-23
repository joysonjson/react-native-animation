import React, {Component} from 'react';

import {
  Animated,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      animationValue: new Animated.Value(0),
      viewState: true,
      rightValue: new Animated.Value(0),
    };
  }

  toggleAnimation = () => {
    if (this.state.viewState == true) {
      Animated.timing(this.state.animationValue, {
        toValue: 100,
        timing: 100000,
      }).start(() => {
        this.setState({viewState: false});
      });

      Animated.timing(this.state.rightValue, {
        toValue: 60,
        timing: 50000,
      }).start(() => {
        this.setState();
      });
    } else {
      console.log('decreasing');
      Animated.timing(this.state.rightValue, {
        toValue: 0,
        timing: 50000,
      }).start();
      Animated.timing(this.state.animationValue, {
        toValue: 0,
        timing: 3000,
      }).start(this.setState({viewState: true}));
    }
  };

  render() {
    const animatedStyle = {
      width: 100,
      height: 100,
    };

    const gowingStyle = {
      width: this.state.animationValue,
    };
    return (
      <View style={styles.MainContainer}>
        <TouchableWithoutFeedback onPress={() => this.toggleAnimation()}>
          <View
            style={{width: 100, height: 100, backgroundColor: 'red'}}></View>
        </TouchableWithoutFeedback>

        <Animated.View
          style={[
            styles.animatedBox,

            {
              transform: [{translateX: this.state.rightValue}],
            },
          ]}></Animated.View>
        <Animated.View
          style={[styles.virtualAnimatedBox, gowingStyle]}></Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    display: 'flex',
    flexDirection: 'row',
  },
  animatedBox: {
    width: 100,
    height: 100,
    backgroundColor: '#0091EA',
    zIndex: -10,
    position: 'absolute',
  },
  virtualAnimatedBox: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
    zIndex: -100,
  },

  text: {
    color: '#FFFFFF',
  },
});
