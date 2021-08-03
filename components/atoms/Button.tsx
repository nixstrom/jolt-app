import React from "react";
import { Button as RNButton, ButtonProps } from "react-native";

type Props = {
  children: string;
  onPress: ButtonProps["onPress"];
};

export const Button = ({ children, onPress }: Props) => (
  <RNButton title={children} onPress={onPress} />
);
