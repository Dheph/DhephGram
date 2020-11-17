import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

class List extends Component{

  constructor(props){
    super(props);
    this.state = { 
      feed: this.props.data
    };
  }

  render(){
    return(
      <View>
        <Text>{this.state.feed.name}</Text>
        <Image 
        source={{uri: this.state.feed.imgPublication}}
        style={{width:100,height:100}}
        />
      </View>
    );
  }
}

export default List;