import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import AnimaeBox from './animat';
import NewBox from './newBox';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({item}) => <Item title={item.title} />;
  const [clicked, setClicked] = React.useState(false);
  const [refresh, setRefresh] = React.useState(false);
  const [previosSelected, setPreviousSelected] = React.useState(null);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setPreviousSelected(clicked);
    setClicked(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{height: 200}}
        horizontal={true}
        data={DATA}
        renderItem={data => (
          <AnimaeBox
            selected={clicked}
            item={data.item}
            index={data.index}
            onSelect={ind => toggle(ind)}
            previosSelected={previosSelected}
            setPrevisou={val => setPreviousSelected(val)}
          />
        )}
        keyExtractor={item => item.id}
      />
      {/* <AnimaeBox /> */}
      {/* <NewBox /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
