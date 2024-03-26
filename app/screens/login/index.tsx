import { View, SafeAreaView } from "react-native";
import Button from "../../commons/components/Button/Button.component";
import TextInputCustom from "../../commons/components/TextInput/TextInput.component";
import { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { LoginContextWrap } from "../../context/login";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Styles from "./style";

type TLogin = {
  navigation: NativeStackNavigationProp<any>;
};

const LoginPage = ({ navigation }: TLogin) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContextWrap);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Styles.wrapper}>
        <View style={Styles.logo}>
          <AntDesign name="chrome" size={60} color="#00a656" />
        </View>
        <TextInputCustom
          onChange={setUsername}
          placeholder="username"
          value={username}
          style={Styles.txtInput}
        />
        <TextInputCustom
          value={password}
          onChange={setPassword}
          placeholder="password"
          style={Styles.txtInput}
        />
        <Button
          disabled={!username || !password}
          title="Sign In"
          textColor="white"
          textSize={18}
          onPress={() => {
            setIsLoggedIn(true);
            setTimeout(() => {
              navigation.navigate("Dashboard");
            }, 500);
          }}
          style={Styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
