function getPercents(percent, number) {
	if ((percent<0)&&(number<0)) {
		console.log('fail')
	}
	return number / 100 * percent;
}

module.exports = getPercents;