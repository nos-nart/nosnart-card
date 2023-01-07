#!/usr/bin/env node

import inquirer from 'inquirer'
import chalk from 'chalk'
import open from 'open'
import boxen from 'boxen'
import { clear } from 'console'
clear()

const data = {
	name: chalk.bold.white('Johnny.S.Tran'),
	tagline: chalk.bold.grey('Front-End developer'),
	twitter: chalk.hex('#08a0e9')('https://twitter.com/nart_nos'),
	github: chalk.hex('#64748b')('https://github.com/nos-nart'),
	linkedin: chalk.hex('#0077B5')('https://www.linkedin.com/in/son-johnny-tran-606147160/'),
	portfolio: chalk.hex('#64748b')('https://nosnart.vercel.app/'),
	stackoverflow: chalk.hex('#eab308')('https://stackoverflow.com/users/9751697/nart'),
	email: chalk.hex('#64748b')('nosnart1510@gmail.com')
}

const questions = [
	{
		type: 'list',
		name: 'action',
		message: "Have a super nice day",
		choices: [
			{
				name: 'Drop me a line',
				value: () => {
					open('mailto:nosnart1510@gmail.com')
					console.log('\nWill get back to you quickly.\n')
				}
			},
			{
				name: 'Exit',
				value: () => console.log('Enjoy your day.\n')
			}
		]
	}
]

const me = boxen(
	[
		`${data.name}`,
		`${data.tagline}`,
		'',
		`Portfolio: ${data.portfolio}`,
		`Twitter: ${data.twitter}`,
		`Linkedin: ${data.linkedin}`,
		`Github: ${data.github}`,
		`StackOverflow: ${data.stackoverflow}`,
		`Email: ${data.email}`,
		// ''
		// `${chalk.bold('Following passion, living what I love. Enjoys')}`,
		// `${chalk.bold('lifting weights, evening walks, databases, Linux,')}`,
		// `${chalk.bold('Vim and other random computer things.')}`
	].join('\n'),
	{
		margin: 1,
		float: 'left',
		padding: 1,
		borderStyle: 'single',
		borderColor: '#22c55e'
	}
)

console.log(me)

const prompt = inquirer.createPromptModule()
prompt(questions).then((answer) => answer.action())