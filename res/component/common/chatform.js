import React, { Component } from 'react';
import { View, Text,TextInput,Button,StyleSheet,TouchableOpacity,TouchableHighlight,AsyncStorage } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

class ChatForm extends Component {
  constructor(props) {
    super();
    this.state = {username:'',msg:''}
    
  }

  hendler = (e) =>{
     console.log(this.props.UserData);
      let msg = {
                    msg:this.state.msg,
                    }
      this.props.Sendmessage(msg);
      this.setState({msg:''});
  }



  render() {
      const { username,msg } = this.state;
      console.log(msg);
    return (
      <View style={styles.container} >
            <View style={styles.innercontainer}>
                <TextInput style={styles.input} value={this.state.msg}  id='msg' onChangeText={(text)=>this.setState({msg:text})}></TextInput>
                <Button title="send" style={styles.button} onPress={this.hendler}  />  
                {/* <TouchableOpacity style={[styles.container, styles.cupertinoButtonSend]} onPress={this.hendler}>
                <Text>Send</Text>
              </TouchableOpacity>   */}
            </View>            
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
       // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    input:{
        borderColor:'gray',
        borderWidth:1,
        paddingLeft:10,
        paddingRight:10,
        marginLeft:4,
        marginRight:8,
        marginBottom:2,
        width:'80%',
        height:40,       
        
    },
    button: {
      backgroundColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      borderRadius: 5,
      padding: 10
    },
    cupertinoButtonSend: {
      height: 41,
      width: 47,
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 5,
      shadowOpacity: 1,
      shadowRadius: 0,
      backgroundColor: "rgba(24,100,188,1)",
      marginLeft: 8
    },
    text: {
      textAlign:"center",
      fontSize: 18,
      padding: 12,
    },
    innercontainer:{
        flexDirection: 'row',
        width:'100%'
    },
}) 
export default ChatForm;
