import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data,
    };
    this.viewLikes = this.viewLikes.bind(this);
    this.loadLikes = this.loadLikes.bind(this);
    this.like = this.like.bind(this)
  }

  viewLikes(likes){
    let feed = this.state.feed;

    if(feed.likes <= 0){
      return;
    }

    return(
      <Text style={styles.likes}>
        {feed.likes} {feed.likes > 1 ? 'curtidas' : 'curtida'}
      </Text>
    )
  }

  like(){
    let feed = this.state.feed;

    if(feed.liked === true){
      this.setState({
        feed: {
          ...feed,
          liked:false,
          likes:feed.likes - 1 
        }
      });
    }else{
      this.setState({
        feed:{
          ...feed,
          liked:true,
          likes:feed.likes + 1
        }
      });
    }
  }

  loadLikes(liked){
    return liked ? require('../assets/liked.png') : require('../assets/like.png');
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.viewPerfil}>
          <Image
            style={styles.imgPerfil}
            source={{uri: this.state.feed.person}}
          />
          <Text style={styles.username}>{this.state.feed.name}</Text>
        </View>
        <Image
          resizeMode="cover"
          style={styles.feedImage}
          source={{uri: this.state.feed.imgPublication}}
        />

        <View style={styles.likeArea}>
          <TouchableOpacity onPress={this.like}>
            <Image
              style={styles.likeIcon}
              source={this.loadLikes(this.state.feed.liked)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendButton}>
            <Image
              style={styles.likeIcon}
              source={require('../assets/send.png')}
            />
          </TouchableOpacity>
        </View>
        
        {this.viewLikes(this.state.feed.likes)}
        
        <View style={styles.footer}>
          <Text style={styles.footerName}>
            {this.state.feed.name}
          </Text>
          <Text style={styles.footerDescription}>
            {this.state.feed.description}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'space-around',
    margin:1
  },
  viewPerfil: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  imgPerfil: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight:10,
    backgroundColor:'rgba(0,0,0,0.1)'
  },
  feedImage: {
    flex: 1,
    height: 400,
    alignItems: 'center',
  },
  username: {
    fontSize: 15,
    textAlign: 'left',
    color: '#000',
    fontWeight: 'bold',
  },
  likeArea: {
    flexDirection:'row',
    padding:5
  },
  likeIcon: {
    width:30,
    height:30,
  },
  sendButton: {
    paddingLeft:5
  },
  footer: {
    flexDirection:'row',
    alignItems:'center',
  },
  footerName:{
    fontSize:16,
    fontWeight:'bold',
    color:'#000',
    paddingLeft:5,
  },
  footerDescription:{
    paddingLeft:5,
    fontSize:15,
    color:"#000"
  },
  likes: {
    fontWeight:'bold',
    marginLeft:5,

  }
});
export default List;
