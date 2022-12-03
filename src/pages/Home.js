import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Platform,
	TouchableOpacity
} from 'react-native';
import { Button } from '../components/button';

export function Home() {

	const [newSkill, setNewSkill] = useState('')
	const [mySkills, setMySkills] = useState([])

	function handleAddNewSkill() {
		setMySkills(oldState => [...oldState, newSkill])
		// setMySkills([...mySkills, newSkill])
	}

	return (
		<View
			style={styles.container}
		>
			<Text style={styles.title}>Welcome, Camila</Text>
			<TextInput
				style={styles.input}
				placeholder="New skill"
				placeholderTextColor="#555"
				onChangeText={setNewSkill}
			/>
			<Button/>
			<Text style={[styles.title, { marginVertical: 50 }]}>
				My Skills
			</Text>

			{
				mySkills.map(skill => (
					<TouchableOpacity key={skill} style={styles.buttonSkill}>
						<Text style={styles.textSkill}>
							{skill}
						</Text>
					</TouchableOpacity>
				))
			}

		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121015',
		paddingVertical: 70,
		paddingHorizontal: 30
	},
	title: {
		color: '#fff',
		fontSize: 24,
		fontWeight: 'bold'
	},
	input: {
		backgroundColor: '#1F1E25',
		color: '#FFF',
		padding: Platform.OS === 'ios' ? 15 : 10,
		marginTop: 30,
		borderRadius: 7
	},
	buttonSkill: {
		backgroundColor: '#1F1E25',
		padding: 15,
		borderRadius: 50,
		alignItems: 'center',
		marginVertical: 10
	},
	textSkill: {
		color: '#FFF',
		fontSize: 22,
		fontWeight: 'bold',
	}
})