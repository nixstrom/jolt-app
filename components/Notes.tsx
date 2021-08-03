import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "components/atoms/Button";

type Note = {
  id: string;
  body: string;
  createdAt: number;
  pinned: boolean;
};

type Props = {
  notes: Note[];
  onRemoveNote: (id: Note["id"]) => void;
};

export const Notes = ({ notes, onRemoveNote }: Props) => (
  <View style={styles.container}>
    {notes.map((note) => (
      <View key={note.id} style={styles.note}>
        <Text>{note.body}</Text>
        <Button onPress={() => onRemoveNote(note.id)}>Delete</Button>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  note: {
    borderTopColor: "#eee",
    borderTopWidth: 1,
    padding: 10,
    width: "100%",
  },
});
