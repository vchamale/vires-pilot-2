import { FC } from "react";
import { View } from "react-native";

type Props = {
  size: number;
}

const VerticalSpace: FC<Props> = ({ size }) => {
  return <View style={{
    height: size
  }} />
}

export default VerticalSpace;
