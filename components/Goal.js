import React from 'react'
import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import GoalItems from './GoalItems';
import GoalInput from './GoalInput';

const Goal = (props) => {
  return (
    <>
    <View style={{
                width: "100%",
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                paddingHorizontal: 50
            }}>
                <GoalInput 
                  courseGoal={props.courseGoal} 
                  goalTextOnChange={props.goalTextOnChange}
                  handleAddGoal={props.handleAddGoal}
                  />
            </View>

            <View>
                <Text>List of Goals</Text>
            </View>

            {/* For Scrolling items */}
            {/* 1. ScrollView ----> For Static Contents Scrolling */}
            {/* <ScrollView contentContainerStyle={{alignItems: 'center'}} style={{width: '80%', display: 'flex'}}>
            {props.allGoals.map((goal, index) => (
                <View key={index} style={props.stylesOption}>
                    <Text style={{color: '#ffffff'}}>{goal}</Text>
                </View>
            ))}
            </ScrollView> */}

            {/* We can use FlatList instead of ScrollView */}
            {/* 2. FlatList ----> For Dynamic Contents Scrolling */}
            <FlatList keyExtractor={(goal, index) => goal.id} style={{width: '80%', display: 'flex'}} data={props.allGoals} renderItem={(allGoals) => {
              return (
                <GoalItems text={allGoals.item.text} styles={props.stylesOption}/>
              )
            }}>
            </FlatList>

    </>
  )
}

export default Goal;