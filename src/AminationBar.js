import React, { Component } from "react";
import { Animated, View } from "react-native";


export default class AnimatedBar extends Component {
  constructor(props) {
    super(props);
    this.width = new Animated.Value(0);
  }


  componentDidMount() {
    this.animateBar();
  }

  componentDidUpdate() {
    this.animateBar();
  }

  animateBar = () => {
    const index = this.props;
    console.log(index);
    this.width.setValue(0);
    Animated.timing(this.width, {
      toValue: (1 - index.index)*200,
      delay: 1 * 150
    }).start();
  };

  render() {
    let barWidth = {
      width: this.width
    };
    return (
      <View style={{borderColor: 'red',
      borderWidth: 1,
      width:200,
      height: 17 }}>
  <Animated.View style={[styles.bar, barWidth]} />
      </View>
    );
  
    
    
}
}

const styles = {
  bar: { 
    height: 15,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "#e75832"
  }
};