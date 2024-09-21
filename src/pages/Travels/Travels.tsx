import { FC } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import VerticalSpace from "../../components/VerticalSpace";

type TravelsPropsT = {
  navigation: any;
}

const Travels: FC<TravelsPropsT> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{
        padding: 15
      }}>
        <Text style={{
            fontSize: 45,
            fontWeight: 'condensedBold'
          }}>Viajes</Text>
        <VerticalSpace size={35} />
        <Pressable onPress={() => {
          navigation.goBack();
        }}>
          <Text style={{
            color: '#5db075',
            fontSize: 25
          }}>Atras</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
};

export default Travels;
