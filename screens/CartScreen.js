import React, { Component, useState } from 'react'
import { Text, View,Image ,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
const CartScreen = () => {
    const navigation = useNavigation();
    const goToScan = ()=>{
        navigation.goBack();
    }
    const goToPayment = ()=>{
        navigation.navigate('Payment');
    }
    return (
        <View >
            <TouchableOpacity onPress={()=>goToScan()} style={{width:45,height:45,backgroundColor:'#F8F8FB',position:'absolute',top:50,left:20, borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                    <Ionicons size={25} name='chevron-back' color={'#5A6CF3'} />
                </TouchableOpacity>
        <View style={{marginTop: 150, marginLeft: 20}}>
               <Text  style={{fontSize: 20, fontWeight:'bold'}}> Your Cart <Icon name='thumbs-up' color={'#e6cdae'} size={20}/></Text>
        </View>
        <View>
          <View style={{ margin: 30, width:'80%', height: 80, borderRadius: 20,backgroundColor:'#e0e0e0'}}>
            <View style={{ flexDirection: 'row'}}>
              <Image source={require('../assets/Rectangle31.png')} style={{margin: 10}}/>
                <View  style={{margin: 10, marginLeft: 30}}>
                    <Text style={{color: 'gray', fontSize:12}}>Lauren's</Text>
                    <Text style={{marginVertical:4}}>Orange Juice </Text>
                    <Text style={{color: 'orange'}}>₹ 149                                     <Icon name='minus' style={{marginLeft: 100}}/><Text style={{color:'black'}}>  2  </Text><Icon name='plus'/></Text>
                </View>
              </View>
            </View>
        </View>

        <View>
          <View style={{ marginHorizontal: 30,marginBottom: 30, width:'80%', height: 80, borderRadius: 20,backgroundColor:'#e0e0e0'}}>
            <View style={{ flexDirection: 'row'}}>
              <Image source={require('../assets/anh2.png')} style={{margin: 10}}/>
                <View  style={{margin: 10, marginLeft: 30}}>
                    <Text style={{color: 'gray', fontSize:12}}>Baskin's</Text>
                    <Text style={{marginVertical:4}}>Skimmed Milk </Text>
                    <Text style={{color: 'orange'}}>₹129                                    <Icon name='minus' style={{marginLeft: 100}}/><Text style={{color:'black'}}>  2  </Text><Icon name='plus'/></Text>
                </View>
              </View>
            </View>
        </View>

        <View>
          <View style={{ marginHorizontal: 30, width:'80%', height: 80, borderRadius: 20,backgroundColor:'#e0e0e0'}}>
            <View style={{ flexDirection: 'row'}}>
              <Image source={require('../assets/anh3.png')} style={{margin: 10}}/>
                <View  style={{margin: 10, marginLeft: 30}}>
                    <Text style={{color: 'gray', fontSize:12}}>Marley's</Text>
                    <Text style={{marginVertical:4}}>Aloe Vera Lotion</Text>
                    <Text style={{color: 'orange'}}>₹1249                                 <Icon name='minus' style={{marginLeft: 100}}/><Text style={{color:'black'}}>  2  </Text><Icon name='plus'/></Text>
                </View>
              </View>
            </View>
        </View>
        <View>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize: 20, fontWeight:'bold', margin: 20}}>Total</Text>
              <Text style={{marginLeft: 220,marginTop: 20, fontSize: 20, fontWeight: 'bold', color:'orange'}}><Icon name='dollar'size={20}/>1,527</Text>
            </View>
            <TouchableOpacity onPress={()=>goToPayment()} style={{ marginHorizontal: 30,justifyContent:'center', marginTop: 20, width:'80%', height: 80, borderRadius: 20,backgroundColor:'#F08F5F'}}>
                <Text style={{color:'white',fontSize:18, fontWeight:'bold', alignSelf:'center'}}> Procced to checkout</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

export default CartScreen;
