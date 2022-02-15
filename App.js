import React from 'react';
import Home from './src/screen/Home';
import Main from './src/screen/Main';
import ViewPagerView from './src/screen/ViewPagerView';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/Store';

const App = () => {
  return (
    //만든 store를 앱 상위에 넣어줌
    //Provider 는 react-redux 라이브러리에 내장되어있는, 리액트 앱에 store 를 손쉽게 연동 할 수 있도록 도와주는 컴포넌트
    <Provider store={store}>
      <ViewPagerView />
    </Provider>
  );
};

export default App;
