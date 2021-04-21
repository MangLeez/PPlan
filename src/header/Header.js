import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from '../component/Home';
import Price from '../component/Price';
import SingIn from '../component/SingIn';

const HomeRoute = () => <Home />;

const PriceRoute = () => <Price />;

// const RecentsRoute = () => <Text>Lee</Text>;

const RecentsRoute = () => <SingIn />;

const Header = () => {
     const [index, setIndex] = React.useState(0);
     const [routes] = React.useState([
          { key: 'Home', title: 'Home', icon: 'home', color: 'green' },
          {
               key: 'Price',
               title: 'Price',
               icon: 'store',
               color: 'rgb(255, 204, 23)',
          },
          {
               key: 'News',
               title: 'News',
               icon: 'newspaper-variant-outline',
               color: 'red',
          },
          { key: 'recents', title: 'Recents', icon: 'history' },
     ]);

     const renderScene = BottomNavigation.SceneMap({
          Home: HomeRoute,
          Price: PriceRoute,
          News: RecentsRoute,
          recents: RecentsRoute,
     });

     return (
          <BottomNavigation
               navigationState={{ index, routes }}
               onIndexChange={setIndex}
               renderScene={renderScene}
          />
     );
};

export default Header;
