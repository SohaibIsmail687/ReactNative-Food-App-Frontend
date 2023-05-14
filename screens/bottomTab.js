import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  BackHandler,
  SafeAreaView,
  AsyncStorage,
  AppState,
} from 'react-native';

import {
  Container,
  Header,
  Content,
  Icon,
  Footer,
  FooterTab,
  Badge,
  Right,
  Picker,
  Left,
  Button,
} from 'native-base';

// import { connect } from "react-redux";

import Explore from './Explore';
import orders from '../screens/orders';
import favorites from '../screens/favorites';
import profile from '../screens/profile';
import Drawer_Screen from '../screens/Drawer_Screen';
import Drawer from 'react-native-drawer';

class bottomTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedbtn: '1',
      name: '',
      id: '',
    };
  }

  backAction = () => {
    BackHandler.exitApp();
    return true;
  };

  componentWillUnmount() {
    this.backHandler.remove();
  }

  componentDidMount = async () => {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  };

  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };
  render() {
    let AppComponent = null;
    let AppComponent1 = Drawer_Screen;

    if (this.state.selectedbtn == '1') {
      AppComponent = Explore;
    }

    if (this.state.selectedbtn == '2') {
      AppComponent = orders;
    }
    if (this.state.selectedbtn == '3') {
      AppComponent = favorites;
    }
    if (this.state.selectedbtn == '4') {
      AppComponent = profile;
    }
    // if (this.state.selectedbtn == "5") {
    //     AppComponent = Patient_Orders;
    // }

    return (
      <>
        <Drawer
          ref={ref => (this._drawer = ref)}
          content={<AppComponent1 />}
          openDrawerOffset={120}
          tapToClose={true}>
          <View style={styles.container}>
            {/* <View style={{flexDirection:'row',width:'35%',alignSelf:'center',marginTop:35,position:'absolute',zIndex:1,backgroundColor:'red',marginBottom:50}}> */}
            {/* <TouchableOpacity onPress={()=>{this.openControlPanel()}} style={{borderRadius:5,position:'absolute',zIndex:1,marginLeft:9,marginTop:15}}>
            <Icon name="menu" type="Entypo"  style={{color:'black'}} />
        </TouchableOpacity> */}
            <TouchableOpacity
              onPress={() => {
                this.openControlPanel();
              }}
              style={{
                borderRadius: 5,
                position: 'absolute',
                zIndex: 1,
                marginLeft: 10,
                marginTop: 10,
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#09448D',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {/* <Icon name="keyboard-arrow-left" type="MaterialIcons"  style={{color:'gray',fontSize:20}}/> */}
                <Icon
                  name="menu"
                  type="Entypo"
                  style={{color: 'white', fontSize: 20}}
                />
              </View>
            </TouchableOpacity>
            {/* </View>  */}
            {/* <Drawer
                          openDrawerOffset='0.3'
                          ref={(ref) => { this._drawer = ref; }}
                          content={<DrawerScreen navigator={this._navigator} />}
                          onClose={() => this.closeDrawer()}>  
                                  <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '100%', alignSelf: 'center',backgroundColor:'#55b7c4',height:50 }}>
                                     
                                     <Icon type="Entypo" name="menu" style={styles.icon} onPress={() => this.openDrawer()} />
                                     <Text allowFontScaling={false} style={styles.name}>Rely Connects</Text>
                                    
                                    
                                 </View>    */}

            <Content contentContainerStyle={{flex: 1}}>
              <AppComponent />
            </Content>
            <Footer>
              <FooterTab style={styles.footer}>
                <Button
                  vertical
                  style={
                    this.state.selectedbtn == '1'
                      ? styles.btnactive
                      : styles.btnsegment
                  }
                  onPress={() => this.setState({selectedbtn: '1'})}>
                  <Icon
                    style={
                      this.state.selectedbtn == '1'
                        ? styles.activeicone
                        : styles.inactiveicone
                    }
                    name="home-variant"
                    type="MaterialCommunityIcons"
                  />
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontWeight: 'bold',
                      color: '#09448D',
                      fontSize: 10,
                    }}>
                    Home
                  </Text>
                </Button>
                <Button
                  vertical
                  style={
                    this.state.selectedbtn == '2'
                      ? styles.btnactive
                      : styles.btnsegment
                  }
                  onPress={() => this.setState({selectedbtn: '2'})}>
                  <Icon
                    style={
                      this.state.selectedbtn == '2'
                        ? styles.activeicone
                        : styles.inactiveicone
                    }
                    name="clipboard-list"
                    type="FontAwesome5"
                  />
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontWeight: 'bold',
                      color: '#09448D',
                      fontSize: 10,
                    }}>
                    Orders
                  </Text>
                </Button>
                <Button
                  verticalstyle={
                    this.state.selectedbtn == '3'
                      ? styles.btnactive
                      : styles.btnsegment
                  }
                  onPress={() => this.setState({selectedbtn: '3'})}>
                  <Icon
                    style={
                      this.state.selectedbtn == '3'
                        ? styles.activeicone
                        : styles.inactiveicone
                    }
                    name="chat"
                    type="Entypo"
                  />
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontWeight: 'bold',
                      color: '#09448D',
                      fontSize: 10,
                    }}>
                    Favorites
                  </Text>
                </Button>
                {/* 
              <Button
                verticalstyle={
                  this.state.selectedbtn == "4"
                    ? styles.btnactive
                    : styles.btnsegment
                }
                onPress={() => this.setState({ selectedbtn: "4" })}
              >
                <Icon
                  style={
                    this.state.selectedbtn == "4"
                      ? styles.activeicone
                      : styles.inactiveicone
                  }
                  name="list-alt" type="FontAwesome5"
                />
                <Text allowFontScaling={false} style={{ fontWeight: 'bold', color: '#09448D', fontSize: 10 }}>My Order</Text>

              </Button> */}

                <Button
                  verticalstyle={
                    this.state.selectedbtn == '4'
                      ? styles.btnactive
                      : styles.btnsegment
                  }
                  onPress={() => this.setState({selectedbtn: '4'})}>
                  <Icon
                    style={
                      this.state.selectedbtn == '4'
                        ? styles.activeicone
                        : styles.inactiveicone
                    }
                    name="user-alt"
                    type="FontAwesome5"
                  />
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontWeight: 'bold',
                      color: '#09448D',
                      fontSize: 10,
                    }}>
                    Profile
                  </Text>
                </Button>
              </FooterTab>
            </Footer>
            {/* </Drawer>   */}
          </View>
        </Drawer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },

  inactiveicone: {
    color: 'lightgray',
    fontSize: 22,
  },
  activeicone: {
    color: '#FCC564',
    fontSize: 25,
  },
  footer: {
    backgroundColor: 'white',
    paddingVertical: 3,
  },
  icon: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 40,
    color: 'white',
  },
  name: {
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 50,
    color: 'white',
  },

  inactiveText: {
    color: 'lightgray',
    fontSize: 11,
    fontWeight: 'bold',
    maxWidth: '100%',
  },
  activeText: {
    color: '#FCC564',
    fontSize: 11,
    maxWidth: '100%',
    fontWeight: 'bold',
  },
});

export default bottomTab;
