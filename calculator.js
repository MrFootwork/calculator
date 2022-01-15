const express = require('express')

const app = express()
app.use(express.urlencoded({ extended: true }))

const port = 3000

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
	let num1 = +req.body.num1
	let num2 = +req.body.num2

	res.send('Thanks for posting that.' + (num1 + num2))
})

app.get('/bmicalculator', (req, res) => {
	res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmicalculator', (req, res) => {
	let weight = +req.body.weight
	let height = +req.body.height / 100
	let bmi = weight / height ** 2

	res.send('BMI is ' + Math.round((bmi + Number.EPSILON) * 100) / 100 + '.')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
