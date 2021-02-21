import React, { Component } from 'react';
//import {  Text,TextInput,Button,StyleSheet,FlatList } from 'react-native';
import { SafeAreaView, View, FlatList, StyleSheet,Header, Text, StatusBar,Button,TouchableOpacity,AsyncStorage } from 'react-native';
import { cos } from 'react-native-reanimated';
import { ListItem, Avatar } from 'react-native-elements'
import dataLayout from './../module/data-layout'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { socket } from '../module/socket';
import {_storeData,_retrieveData} from './common/storage';

const Item = ({item,onPress,data}) =>(


  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Text style={styles.item}>{item}</Text>   
  </TouchableOpacity>
)
class UserList extends Component {
  constructor(props) {
    super();
    this.state = {
      username:'',
      selectedId:'',
      name:'',
      Userlist:[],
      dd:[]
    };
    /* get the user List */
    

    _retrieveData('username').then((result)=> {
     // console.log(result)
      dataLayout.getUserlist().then((res)=>{
        console.log(res);
        console.log(res.data.list);
          let uArray = []
          res.data.list.forEach((u)=>{
            if(u.userName!=result)
            uArray.push(u);
          })
          this.setState({Userlist:uArray})
      })

      

      this.setState({name:result})
    })

  }
  onPressHendler = (data) =>{
   // console.log("text click");
    this.props.navigation.navigate('Chat',{ thread: data })
  }
 
  render() {
    const {selectedId,Userlist,name} = this.state;
  

    const Users = (props) =>{
        return(
          <TouchableOpacity title="sadad"></TouchableOpacity>
        )
    }
    return (
      <SafeAreaView style={styles.container}>
        
        <View>
          <Text>Welcome  {name}</Text>
        </View>
        <View style={styles.containerinner}>
          {console.log(typeof Userlist)}
          {/* {Userlist.map((u,i)=>{
            <Text>{i}</Text>
          })} */}

        {/* {Userlist.length > 0 (
          <Users data={UserList} />
        )} */}
        

        {Userlist.map((key,i)=>
            {
              console.log(key);
              return(
                <TouchableOpacity 
                key={i}
                fata = {key.socketID}
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Chat',{ thread: {username: key.userName,id:key.socketId} }) }
                >
                 <Text>{key.userName}</Text>
                </TouchableOpacity>
              )
            }
                
              
                
         )}
         </View>
         {/* <FlatList
          data={Userlist}
          renderItem={renderItem}
          keyExtractor={item => item.username}
          extraData={selectedId}
        /> */}

        
      </SafeAreaView>
      
    //   <View style={styles.container}>
    //   <FlatList
    //     data={data}
    //     renderItem={(item,key) => <Text style={styles.item}>{key}</Text>}
    //   />
    // </View>

    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight|| 10,
      // marginTop:100,
      justifyContent: 'space-between'
      
    },
    input:{
        borderColor:'gray',
        borderWidth:1,
        paddingLeft:10,
        height:40,
        marginBottom:10,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      marginBottom:2,
    },
    containerinner:{
      flex:2,
    },
    item: {
      padding: 10,
      marginVertical: 3,
      backgroundColor:'yellow'      
    },
}) 
export default UserList;
