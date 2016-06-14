/*
Projeto EAD - AngularJS
Membros do grupo:
Guilherme dos Santos Beneti - RA: 448850
João Paulo de Oliveira - RA: 402796
Vitor Carnello Jatobá - RA: 53930-9
*/

angular.module("app")
.controller("produtoController", function ($scope) {

    //Simulação de um produto já buscado
    $scope.produto = {
        Id: 1,
        Name: "Tomate",
        Category: "Fruta ou Legume? Eis a questão!!",
        Price: 1,
        Url: "http://www.folhadoes.com/cdn/imgs/KQKOOYAPOHN2016011816424618012016.jpg"
    };

    
    //Busca em um Serviço REST
})