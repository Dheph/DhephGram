import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet
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
          person:'data:image/jpeg;base64,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',
          imgPublication:'https://img.memecdn.com/enough-bugs-for-today_o_542794.jpg',
          liked: false,
          likes:56
        },
        {
          id:'2',
          name:'Jose da silva',
          description:'tHe BeSt',
          person:'https://pics.me.me/thumb_my-friend-will-make-this-his-discord-profile-picture-if-48261178.png',
          imgPublication:'https://pics.me.me/you-are-da-best-memegenerator-net-top-18-best-memes-ever-50827707.png',
          liked: false,
          likes:0
        },
        {
          id:'3',
          name:'The Joker',
          description:'hahaha',
          person:'https://media.altpress.com/uploads/2019/04/joker_trailer_2019.jpg',
          imgPublication:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKMKLL6ZebGaSv9-C7ynsUu43LLJJTEoK4g&usqp=CAU',
          liked: false,
          likes:156
        }
      ]
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Image 
          style={styles.logo}
          source={require('./assets/logo0x.png')}/>
          <Image 
          style={styles.send}
          source={require('./assets/send.png')}/>
        </View>
        <FlatList 
        showsVerticalScrollIndicator={false}
        data={this.state.feed}
        renderItem={ ({item}) => <List data={item}/>}
        
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  header: {
    height:55,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center',
    padding:5,
    borderBottomWidth:0.2,
    shadowColor:'black',
    elevation:1
  },
  send:{
    width:20,
    height:20
  },
  logo: {
    width:110,
    height:35,
  }
})