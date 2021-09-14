/* Código para el triangulo */
/* calcular perimetro de un cuadrado */
/* creamos la variable con palabra reservada ya que no cambia el valor */
console.group("Cuadrados")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden:"+ ladoCuadrado + " cm");

/* creamos el perimetro */

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro del cuadrado es: " + perimetroCuadrado + " cm");

/* creamos el area */

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el area del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

/* Código para el triangulo */

/* calcular perimetro de un triangulo */
/* creamos la variable con palabra reservada ya que no cambia el valor */
console.group("Triangulos")
const ladoTriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo = 4;
/* const alturaTriangulo = 5.5; */

console.log("Los lados del triangulo miden:"
+ ladoTriangulo1 
+ " cm, " 
+ ladotriangulo2 
+" cm, " 
+ basetriangulo 
+" cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + " cm");
const perimetroTriangulo = ladoTriangulo1 + ladotriangulo2 + basetriangulo;
console.log("El perimetro del triangulo es:" +perimetroTriangulo+ "cm");

/* area triangulo */

const areaTriangulo = (basetriangulo * alturaTriangulo) / 2;
console.log("el área del triangulo es:" + areaTriangulo+" cm^2");
console.groupEnd();


