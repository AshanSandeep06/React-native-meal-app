import React from 'react'
import { TextInput, Button } from 'react-native';

const GoalInput = ({ courseGoal, goalTextOnChange, handleAddGoal }) => {
  return (
   <>
    <TextInput value={courseGoal} onChangeText={goalTextOnChange} style={{
        borderColor: '#cccccc',
        borderWidth: 1,
        width: '80%',
        marginRight: 35,
        paddingHorizontal: 11
    }} placeholder='Your Course Goal'/>

    <Button color="green" title='ADD GOAL' onPress={handleAddGoal}/>
   </>
  )
}

export default GoalInput;