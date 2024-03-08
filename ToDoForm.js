import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = ({ onAddTask }) => {
    const [task, setTask] = React.useState('');

    const handleAddTask = () => {
        if (task.trim().length > 0) {
            onAddTask(task);
            setTask('');
        }
    };

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                value={task}
                onChangeText={setTask}
                placeholder="Add a new task..."
            />
            <Button title="Add" onPress={handleAddTask} />
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
});

export default ToDoForm;
