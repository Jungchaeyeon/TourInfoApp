import React, { useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { tourApi } from '../api';
import apiActionCreator from '../redux/reducer/ApiActionCreator';
import { RootState } from '../redux/store/Store';


const renderItem = ({ item }) => {
  return (
    <View>
      <View>
        <Text>user id: {item.userId}</Text>
      </View>
    </View>
  );
};

const Main = () => {
    
    const dispatch = useDispatch();
    const data = useSelector((state : RootState) => state.apiReducer.data);
    const loading = useSelector((state: RootState) => state.apiReducer.loading);
    
    useEffect(() => {
        //dispatch(apiActionCreator('https://jsonplaceholder.typicode.com/posts'));
        tourApi();
    }, []);
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.drawerBtn}>
                    <Image
                        style={styles.drawerBtnCss}
                        source={require('../asset/drawable/btn_menu.png')} />
                </TouchableOpacity>    
                    <Text style={{fontWeight:'bold'}}>
                        MORE TRIP
                    </Text>
            </View>
            <View style={styles.line}/>
            <View style={styles.searchView}>
                <TextInput style={styles.input} />
                <TouchableOpacity style={styles.button}>
                    <Text>검색</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize :11, marginStart: 20, color:'#000000'}}>
                추천 검색어
            </Text>
            <View style={{ height:40, justifyContent:'center'}}>
            <ScrollView horizontal={true} style={styles.scrollView}>
                <View style={{ ...styles.horizonScrollItem, backgroundColor: '#fff7d8' }}><Text style={styles.horizonScrollItemText}>독일마을</Text></View>
                <View style={styles.horizonScrollItem}><Text style={styles.horizonScrollItemText}>외도</Text></View>
                <View style={styles.horizonScrollItem}><Text style={styles.horizonScrollItemText}>거제도</Text></View>
                <View style={styles.horizonScrollItem}><Text style={styles.horizonScrollItemText}>전주한옥마을</Text></View>
                <View style={styles.horizonScrollItem}><Text style={styles.horizonScrollItemText}>목포</Text></View>
                </ScrollView>
            </View>
            <Text style={{ fontSize :10, fontWeight:'bold', marginStart: 20, marginTop:20, color:'#000000'}}>
                인기 순위 여행지
            </Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.id)}>
            </FlatList>
        </View>
    );
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        header: {
            width: '100%',
            alignItems: 'center',
            justifyContent:'center',
            flexDirection: 'row',
            height: 60,
        },
        drawerBtn: {
            position: 'absolute',
            left: 0
        },
        drawerBtnCss: { 
            marginStart:20,
            width: 30,
            height: 30,
        },
        line: {
            width: '100%',
            height: 1,
            backgroundColor: '#dddddd',
        },
        searchView: {
            alignItems: 'center',
            width: '100%',
            // backgroundColor: 'red',
            paddingHorizontal: 10,
        },
    
        scrollView: {
            paddingStart: 10,
        },
        horizonScrollItem: {
            width: 'auto',
            height: 30,
            padding: 7,
            margin: 3,
            paddingHorizontal: 10,
            borderRadius: 25,
            borderColor: '#f6f6f6',
            backgroundColor: '#f6f6f6',
            borderWidth: 1,
        },
        horizonScrollItemText: {
            fontSize: 10,
            color:'#000000'
        },
        input: {
            margin: 15,
            width: '100%',
            height: 50,
            padding: 15,
            borderRadius: 25,
            borderColor: '#edeff1',
            backgroundColor: '#edeff1',
            borderWidth: 1,
        },
        button: {
            position: 'absolute',
            right: 0,
            top:0,
            marginEnd:20,
            width: 60,
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            borderRadius: 25,
            borderColor: '#ffd900',
            backgroundColor: '#ffd900',
            borderWidth: 1,
            marginVertical: 20,
        },
});


export default Main;
