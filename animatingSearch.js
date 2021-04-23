import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  SafeAreaView,
  Animated,
} from 'react-native';
// import FA from 'react-native-vector-icons/FontAwesome5';

// const AnimatedIcon = Animated.createAnimatedComponent(FA);
// make your icon animatable using createAnimatedComponent method

export default class Application extends Component {
  animVal = new Animated.Value(0);
  // initialize animated value to use for animation, whereas initial value is zero

  interpolateIcon = this.animVal.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  interpolateBar = this.animVal.interpolate({
    inputRange: [0, 1],
    outputRange: ['100%', '90%'],
  });
  // initialize interpolation to control the output value that will be passed on styles
  // since we will animate both search bar and icon. we need to initialize both
  // on icon we will animate the scale whereas outputRange starts at 0 end in 1
  // on search bar we will animate width. whereas outputRange starts at 100% end in 90%

  animatedTransition = Animated.spring(this.animVal, {toValue: 1});
  // we use spring to make the animation bouncy . and it will animate to Value 1

  clickAnimate = () => {
    this.animatedTransition.start();
  };
  // button trigger for animation

  //Components that will use on Animation must be Animated eg. Animted.View
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.search}>
            {/* our icon */}

            <Animated.View style={{width: this.interpolateBar}}>
              <TextInput placeholder="search here" style={styles.input} />
            </Animated.View>

            {/* <AnimatedIcon
              name="search"
              size={28}
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                transform: [{scale: this.interpolateIcon}],
              }}
            /> */}
          </View>

          <Button title="animate icon" onPress={this.clickAnimate} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F79D42',
    // flex: 1,
    height: '100%',
    paddingTop: 20,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'gray',
    textAlign: 'center',
  },
  search: {
    flexDirection: 'row-reverse',
    width: '90%',
    height: 40,
    alignItems: 'center',
  },
});
