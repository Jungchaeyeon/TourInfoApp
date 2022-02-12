import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import apiActionCreator from '../redux/reducer/ApiActionCreator';
import { RootState } from '../redux/store/Store';

const Home = () => {
  //useDispatch : dispatch 를 사용하기 위한 준비.
  const dispatch = useDispatch();
  //useSelector : store에 접근하여 state 가져오기.
  const data = useSelector((state : RootState) => state.apiReducer.data);
  const loading = useSelector((state : RootState) => state.apiReducer.loading);
  useEffect(() => {
    dispatch(apiActionCreator('https://jsonplaceholder.typicode.com/posts'));
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
}
export default Home;