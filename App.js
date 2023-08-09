import { StyleSheet, Text, ScrollView, View } from "react-native";
import Navbar from "./Navbar";
import { useState } from "react";
export default function App() {
  const [show, setShow] = useState(true);

  return (
    <View>
      {show ? <Navbar /> : null}
      <ScrollView
        onScroll={(event) => {
          const currentOffset = event.nativeEvent.contentOffset.y;
          const dif = currentOffset - (this.offset || 0);
         
          if (dif <= 0) {
            setShow(true)
          } else {
            setShow(false)
          }
          //console.log('dif=',dif);

          this.offset = currentOffset;
        }}
      >
        <View>
          <Text style={{ padding: 20, fontSize: 30 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            maximus luctus velit, in rhoncus leo rutrum egestas. Phasellus non
            ligula pretium, mollis augue et, auctor nulla. Etiam pellentesque ex
            id ultrices eleifend. Ut consequat dictum sem non tincidunt. Mauris
            et velit libero. Suspendisse potenti. Maecenas aliquet, est at
            pellentesque finibus, orci magna cursus dui, nec molestie arcu nulla
            sit amet sem. Sed in justo arcu. Nam a est non elit vulputate
            finibus ut aliquam velit. Donec commodo porta placerat. Sed et
            sapien convallis, tincidunt ligula nec, tincidunt arcu. Aliquam
            gravida viverra efficitur. Integer dictum neque in porta imperdiet.
            Mauris eget ex lorem. Nunc porttitor congue tempus. Vivamus varius
            est in feugiat ornare. Sed at mi scelerisque, porta orci ut, gravida
            eros. Proin gravida lacus ac vestibulum feugiat. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Nam feugiat sed dui sed hendrerit. Nulla mollis tincidunt nulla id
            accumsan. Donec pretium felis vel tortor posuere feugiat. Ut
            vehicula odio nec leo volutpat vulputate. Duis quis tempor ligula,
            et dictum arcu. Suspendisse libero dui, pharetra et volutpat
            sodales, auctor vel turpis. Integer id tempus ante, sit amet
            convallis lorem. Curabitur at maximus tellus. Ut in aliquam eros,
            vitae pulvinar nulla. Vestibulum varius mauris elit, sed porttitor
            neque cursus ut. Nunc varius tincidunt purus, suscipit varius urna.
            Nullam convallis ipsum scelerisque, iaculis augue vel, sodales nisi.
            Aenean malesuada ultricies mattis. Vestibulum placerat massa nec
            nulla posuere gravida. Nunc ultrices tristique nisl at sodales.
            Vivamus venenatis tempus interdum. In tempus sollicitudin neque, nec
            scelerisque eros aliquam vitae. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Vestibulum condimentum laoreet lobortis.
            Cras in ante gravida, tincidunt magna sed, dictum velit. Cras
            vulputate augue sed nibh consectetur, eleifend congue ante interdum.
            Nulla diam ex, pellentesque ac malesuada quis, maximus vitae tortor.
            Morbi fermentum tellus sed turpis iaculis fermentum. Morbi tempor,
            risus sit amet imperdiet ultrices, leo urna blandit erat, eget
            eleifend lacus dui non orci. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Morbi maximus luctus velit, in rhoncus leo rutrum
            egestas. Phasellus non ligula pretium, mollis augue et, auctor
            nulla. Etiam pellentesque ex id ultrices eleifend. Ut consequat
            dictum sem non tincidunt. Mauris et velit libero. Suspendisse
            potenti. Maecenas aliquet, est at pellentesque finibus, orci magna
            cursus dui, nec molestie arcu nulla sit amet sem. Sed in justo arcu.
            Nam a est non elit vulputate finibus ut aliquam velit. Donec commodo
            porta placerat. Sed et sapien convallis, tincidunt ligula nec,
            tincidunt arcu. Aliquam gravida viverra efficitur. Integer dictum
            neque in porta imperdiet.
          </Text>
        </View>
      </ScrollView>
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
});
