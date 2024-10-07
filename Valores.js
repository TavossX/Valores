var nomeUm = prompt("Digite o nome do primeiro produto");
var valorUm = parseFloat(prompt("Digite o valor do produto"));

var nomeDois = prompt("Digite o nome do segundo produto");
var valorDois = parseFloat(prompt("Digite o valor do produto"));

var nomeTres = prompt("Digite o nome do terceiro produto");
var valorTres = parseFloat(prompt("Digite o valor do produto"));

if(valorUm < valorDois && valorUm < valorTres){
    console.log("Você deve comprar o produto:", nomeUm, "por ser o mais barato, custando R$", valorUm);
}else if(valorDois < valorUm && valorDois < valorTres){
    console.log("Você deve comprar o produto:", nomeDois, "por ser o mais barato, custando R$", valorDois);
}else if(valorTres < valorUm && valorTres < valorDois){
    console.log("Você deve comprar o produto:", nomeTres, ", por ser o mais barato, custando R$", valorTres);}