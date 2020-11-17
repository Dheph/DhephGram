import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';

import List from './List';

export default class App extends Component{ 

  constructor(props){
    super(props);
    this.state= {
      feed: [
        {
          id:'1',
          name:'Diogo Oliveira',
          description:'more one day',
          imgPublication:'https://img.memecdn.com/enough-bugs-for-today_o_542794.jpg',
          liked: false,
          likers:0
        },
        {
          id:'2',
          name:'Jose da silva',
          description:'tHe BeSt',
          imgPublication:'https://pics.me.me/you-are-da-best-memegenerator-net-top-18-best-memes-ever-50827707.png',
          liked: false,
          likers:0
        }
      ]
    }
  }
  render(){
    return(
      <View style={{padding:5}}>
        <Text> Instagram </Text>

        <FlatList 
        showsVerticalScrollIndicator={false}
        data={this.state.feed}
        renderItem={ ({item}) => <List data={item}/>}
        
        />
      </View>
    )
  }
}