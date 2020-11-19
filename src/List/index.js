import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data,
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <View styles={styles.perfil}>
          <Image
          style={styles.imgPerfil}
          source={{uri: this.state.feed.person}}
          />
          <Text style={styles.username}>{this.state.feed.name}</Text>
        </View>

        <Image
          style={styles.feedImage}
          source={{uri: this.state.feed.imgPublication}}
        />
        <Text> {this.state.feed.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex:1
  },
  perfil: {
    flexDirection:'row',
    justifyContent:"center",
    alignItems:'center'
  },
  imgPerfil: {
    width:50,
    height:50,
    borderRadius:50
  },
  feedImage: {
    flex:1,
    height:400
  },
  username: {
    fontSize:15,
    textAlign:"left",
    color:'#000',
    fontWeight:'bold'
  },

});
export default List;
