import React from 'react';
import {Text} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';
import bottomTab from './screens/bottomTab';
import Drawer_Screen from './screens/Drawer_Screen';
import RBsheet from './screens/RBsheet';
import dishes from './screens/Explore';
import favorites from './screens/favorites';
import foodinfo from './screens/foodinfo';
import orders from './screens/orders';
import profile from './screens/profile';

export default function App() {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="dishes"
          component={dishes}
          title="dishes"
          hideNavBar={true}
          initial
        />
        <Scene
          key="favorites"
          component={favorites}
          title="favorites"
          hideNavBar={true}
          initial
        />
        <Scene
          key="foodinfo"
          component={foodinfo}
          title="foodinfo"
          hideNavBar={true}
          initial
        />
        <Scene
          key="orders"
          component={orders}
          title="orders"
          hideNavBar={true}
          initial
        />
        <Scene
          key="profile"
          component={profile}
          title="profile"
          hideNavBar={true}
          initial
        />
        <Scene
          key="RBsheet"
          component={RBsheet}
          title="RBsheet"
          hideNavBar={true}
          initial
        />
        <Scene
          key="bottomTab"
          component={bottomTab}
          title="bottomTab"
          hideNavBar={true}
          initial
        />
      </Stack>
    </Router>
  );
}
