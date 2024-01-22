import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onToggleTodo(item.id)}
          onLongPress={() => onDeleteTodo(item.id)}
        >
          <View
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: item.completed ? '#e0e0e0' : 'white',
            }}
          >
            <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>
              {item.text}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default TodoList;
