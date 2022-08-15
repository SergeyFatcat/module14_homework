const myPromise = new Promise((resolve, reject) => {
	function getRundomInteger(n) {
		return Math.floor(Math.random() * n)
	}

	setTimeout((() => {
		let x;
		x = getRundomInteger(100);
		console.log('X in promise = ', x);
		if (x % 2 === 0) {
			resolve(x);
		} else {
			reject(x);
		}
	}), 3000)
})

myPromise.then(number => console.log('Завершено успешно. Сгенерированное число —  ', number))
	.catch(number => console.log('Завершено с ошибкой. Сгенерированное число —  ', number));