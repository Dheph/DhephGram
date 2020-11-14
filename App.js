import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Facebook',
    };
    this.click = this.click.bind(this);
  }

  click() {
   this.setState({
     name: this.state.name === 'Facebook' ? 'Instagram' : 'Facebook'
   })
  }
  render() {
    return (
      <View styçe={styles.container}>
        <TouchableOpacity onPress={() => this.click()}>
          <Text style={styles.text}> {this.state.name} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
