module.exports = function solveEquation(equation) {
  let a, b, c, D, x1, x2;
	a = +(equation.substring(0, equation.indexOf('x')-3));
	b = +(equation.substring(equation.indexOf('x')+4, equation.indexOf('x')+5) + equation.substring(equation.indexOf('x')+6, equation.lastIndexOf('x')-3));
	c = +(equation.substring(equation.lastIndexOf('x')+2, equation.lastIndexOf('x')+3) + equation.substring(equation.lastIndexOf('x')+4, equation.length));
	D = b*b - 4*a*c;
	x1= Math.round((-b - Math.sqrt(D))/(2*a));
	x2= Math.round((-b + Math.sqrt(D))/(2*a));
	if (x1>x2) {
		return [x2, x1];
	}
	return [x1, x2];
}