import React, {useState, useContext} from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";

import { LinkContext } from "./LinkContext";

export default function HomeScreen({ navigation }) {

    const [text, setText] = useState('');

    const [Link, setLink] = useContext(LinkContext);

    const handle = (x) => {
        setText(x)
    }

    const navigteto = () => {
      setLink(text)
      navigation.navigate("Download")
    }


  return (
    <View style={styles.container}>
      <Text></Text>

      <TextInput
      placeholder="Paste the link here..."
        style={styles.input}
        onChangeText={handle}
        value={text}
      />

      <TouchableOpacity onPress={navigteto} style={styles.btn}>
          <View style={styles.inner}>
          <Text style={{fontWeight:"bold"}}>
              Grab the Details
              </Text>
          </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
      backgroundColor:"#e3f2fd",
      width:"80%",
      textAlign:"center",
      height:45,
      borderRadius:20,
      fontSize:20
  },
  btn: {
    marginTop:20,
    backgroundColor:"#90caf9",
    width:"80%",
    textAlign:"center",
    height:45,
    borderRadius:20,
  },
  inner:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
  }

});
