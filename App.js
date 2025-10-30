import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, Image} from 'react-native';
import { DATA } from "./Data"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SectionList
        sections={DATA ?? []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (<Post text={item.text}
           date={item.date.toDateString()} />)}
        renderSectionHeader={({section}) =>(
          <Section name={section.user} email={section.email} 
          image={section.avatar}/>
        )}
      />
    </View>
  );
}

const Section = ({ image, name, email }) => {
  return (
    <View style={{
      width: "90%",
      height: 90,
      flexDirection: "row",
      borderBottomWidth: 1,
      borderColor: "#EAEAEA",
      marginBottom: 20,
      padding: 10
    }}>

      <View style={{ flex: 1 }}>
        <Image style={{width:70,height:70, borderRadius: 35}} source={{uri: image}}/>
      </View>
      <View style={{ flex: 3, justifyContent:"center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{name}</Text>
        <Text style={{ fontSize: 14, color: "gray" }}>{email}</Text>


      </View>


    </View>
  );
}

const Post = ({ text, date }) => {
  return (
    <View style={{
      width: "90%",
      height: 150,
      padding: 10,
      margin:5,
      backgroundColor: "#EAEAEA",
      borderRadius: 20
    }}>

      <Text style={{ width: "100%", textAlign: "right", fontWeight: "bold",
         marginRight: 5 }}>{date}</Text>
      <Text style={{ fontSize: 13, marginTop: 15 }}>
        {text}
      </Text>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
