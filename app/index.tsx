import { Link } from "expo-router";
import { Text, View } from "react-native";

const Index = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 700, padding: 20 }}>
        hello world from mars
      </Text>
      <Link href={"/about"}>About</Link>
    </View>
  );
};

export default Index;
