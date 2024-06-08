import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constant from 'expo-constants';

HaloAplikasi = () => {
  const id = '001'
  const namaD = 'Rafi'
  const namaB = 'Munggaran'
  namaLengkap = () => {
    return `$(namaD) $(namaB)`
  }
  
}


export default function App() {
  return (
    // Latihan 1A
    // <View style={{ paddingTop: Constant.statusBarHeight}}>
    //   <View style={{backgroundColor:'salmon',height: 50,padding: 20,}}></View>
    //   <Text style={{fontSize: 50, fontWeight:'500', color:'black'}}>Selamat Datang {'\n'}Di {'\n'}React Native</Text>
    //   {/* <Text>{`Selamat \n Datang \n di \n React Native`}</Text> */}
    // </View>
    <View style={styles.home}>
      <Text style={styles.header}>TEST</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECB159',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
    paddingTop: Constant.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECB159',
  },
  header: {
    fontSize: 50, 
    fontWeight:'500', 
    color:'black'
  }
});
