let jsonString = `{
"list": [
	{
		"name": "Petr",
		"age": "20",
		"prof": "mechanic"
	},
	{
		"name": "Vova",
		"age": "60",
		"prof": "pilot"
	}
]
}`;
function getObjectFromJSON(jsonString) {
	const data = JSON.parse(jsonString);
	console.log(data);
}
