import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity, Linking } from "react-native";
import { LinkContext } from "./LinkContext";

export default function Output() {
  const [link, setLink] = useContext(LinkContext);

  let linkpos =
    link.indexOf("v=") === -1 ? link.indexOf("e/") + 2 : link.indexOf("v=") + 2;
  let apiTail = link.slice(linkpos);

  let apiHead = "https://apiytd.herokuapp.com/yt/";

  let api = apiHead + apiTail;

  const [linkss, setlinkss] = useState({
    audio: "loading",
    image: "loading",
    title: "loading",
    video: "loading",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const json = await response.json();
        setlinkss(json.links);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.loading,
          display: linkss.video === "loading" ? "flex" : "none",
        }}
      >
        <ActivityIndicator
          size="large"
          color="#0000ff"
          animating={linkss.video === "loading" ? true : false}
        />
      </View>

      <View
        style={{
          ...styles.data,
          display: linkss.video === "loading" ? "none" : "flex",
        }}
      >
        <Text style={{fontWeight:"bold"}} >{linkss.title}</Text>

        <Image style={styles.logo} source={{ uri: linkss.image }} />

        <View style={styles.links}>

        <TouchableOpacity onPress={ ()=>{ Linking.openURL(linkss.audio)}} style={styles.btn}>
          <View style={styles.inner}>
          <Text style={{fontWeight:"bold"}}>
              AUDIO
              </Text>
          </View>
      </TouchableOpacity>

        <TouchableOpacity onPress={ ()=>{ Linking.openURL(linkss.video)}} style={styles.btn}>
          <View style={styles.inner}>
          <Text style={{fontWeight:"bold"}}>
              VIDEO
              </Text>
          </View>
      </TouchableOpacity>



        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  data:{
      flex:1,
      justifyContent:"space-evenly",
      padding:"2%"
  },
  logo: {
    width: "auto",
    height: "50%",
  },
  links:{
      flexDirection:"row",
      justifyContent:"space-around",
  },
  btn:{
    backgroundColor:"#90caf9",
    paddingVertical:20,
    paddingHorizontal:40,
    borderRadius:20
  }
});
