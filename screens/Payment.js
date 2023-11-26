import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Apple from 'react-native-vector-icons/FontAwesome5';
const form = require('../assets/form.png')
const Payment = () => {
    return (
        <View style={{backgroundColor:'#fff'}}>
            <View style={{ height: 250, width: '100%', borderRadius: 24, backgroundColor: "white", shadowColor: '#bbbbbb', shadowOffset: { width: 5, height: 5 }, shadowOpacity: 3, shadowRadius: 12, }}>
                <TouchableOpacity style={{ width: 45, height: 45, marginTop: 50, backgroundColor: '#F8F8FB', borderRadius: 10, marginLeft: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons name='chevron-back' size={25} color={'#25D482'} />
                </TouchableOpacity>
                <View style={{ marginHorizontal: 20, marginTop: 30, flexDirection: 'row', height: 70, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 25, fontWeight: '600', color: '#363636' }}>Checkout 💳</Text>
                    <View style={{}}>
                        <Text style={{ color: '#25D482', fontSize: 20, fontWeight: '600', textAlign: 'right' }}>₹ 1,527</Text>
                        <Text style={{ fontSize: 13, fontWeight: '300', color: '#B1B1B1', textAlign: 'right' }}>Including GST (18%)</Text>
                    </View>
                </View>
                <View style={{alignSelf:'center',position:'absolute',bottom:-30, shadowColor: '#b1b1b1', shadowOffset: { width:0, height:10 }, shadowOpacity: 4, shadowRadius:10,flexDirection:'row',justifyContent:'space-between',width:300,height:80,borderRadius:20,backgroundColor:'#F8F8FB'}}>
                    <TouchableOpacity style={{justifyContent:'center',borderRadius:20,alignItems:'center',backgroundColor:'#25D482',width:'50%',flexDirection:'row'}}>
                        <Ionicons name='card' size={30} color={"#fff"}/><Text style={{fontSize:17,fontWeight:'700',color:"#fff"}}>  Credit card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderRadius:20,width:'50%',flexDirection:'row'}}>
                        <Apple name='apple' size={30}/><Text style={{fontSize:17,fontWeight:'700'}}>  Apple Pay</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{zIndex:-100,height:450,marginTop:50,alignSelf:'center',width:'90%'}}>
                <View style={{width:'100%',height:60}}>
                    <Text style={{fontSize:15,fontWeight:'600'}}>Card number</Text>
                    <TextInput style={{backgroundColor:'#F8F8FB',marginTop:8,fontSize:17,padding:15,borderRadius:12}}/>
                    <Ionicons name='card' size={25} color={'#ABABAB'} style={{position:'absolute',right:10,top:35}}></Ionicons>
                </View>
                <View style={{width:'100%',height:60,marginTop:40}}>
                    <Text style={{fontSize:15,fontWeight:'600'}}>Cardholder name</Text>
                    <TextInput style={{backgroundColor:'#F8F8FB',marginTop:8,fontSize:17,padding:15,borderRadius:12}}/>
                </View>
                <View style={{width:'100%',height:60,marginTop:40, flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{width:'45%'}}>
                    <Text style={{fontSize:15,fontWeight:'600'}}>Expiry Date</Text>
                    <TextInput style={{backgroundColor:'#F8F8FB',fontSize:17,marginTop:8,padding:15,borderRadius:12}}/>
                    </View>
                    <View style={{width:'45%'}}>
                    <Text style={{fontSize:15,fontWeight:'600'}}>CVV / CVC</Text>
                    <TextInput style={{backgroundColor:'#F8F8FB',fontSize:17,marginTop:8,padding:15,borderRadius:12}}/>
                    </View>
                </View>
                <Text style={{width:'70%',alignSelf:'center',textAlign:'center',color:'#b1b1b1',marginTop:30}}>
                We will send you an order details to your email after the successfull payment
                </Text>
                <TouchableOpacity style={{backgroundColor:'#25D482',marginTop:30,height:60,borderRadius:15,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <Ionicons name='lock-closed-outline' size={30} color={"#fff"}/>
                    <Text style={{fontSize:20,color:'#fff',fontWeight:'600'}}>  Pay for the order</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Payment