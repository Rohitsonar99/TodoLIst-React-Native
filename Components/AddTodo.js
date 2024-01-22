import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddTodo = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      onAddTodo(text);
      setText('');
    }
  };

  return (
    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
        style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#ccc', marginRight: 10 }}
        placeholder="Add Todo"
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <Button title="Add" onPress={handleAddTodo} />
    </View>
  );
};

export default AddTodo;
