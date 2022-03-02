/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/DOM */ \"./src/modulos/DOM.js\");\n\n\n_modulos_DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.init();\n\n//# sourceURL=webpack://projetoaed-ufscar/./src/index.js?");

/***/ }),

/***/ "./src/modulos/DOM.js":
/*!****************************!*\
  !*** ./src/modulos/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOM\": () => (/* binding */ DOM)\n/* harmony export */ });\n//Metodos de DOM aqui\n\nconst DOM = (() => {\n    //Variáveis locais\n    const cell = [];\n    //Linhas e colunas para preenchimento\n    let linhaAtual;\n    let colunaAtual;\n    const mainDiv =  document.getElementById('main');\n    \n    //Função para iniciar o jogo\n    function init (){\n        linhaAtual = 0;\n        colunaAtual = 0;\n        //Criando a matriz principal. Div dentro de div. Acessar cada elemento por cell[i][j]\n        for(let i=0; i<6; i++){\n            //Criando o div de linha\n            const linha = document.createElement('div');\n            linha.classList.add('linha');\n            //Colunas da matriz\n            const coluna = [];\n            for(let j=0; j<5; j++){\n                //Div de coluna\n                const temp = document.createElement('div');\n                temp.classList.add('celula');\n                //Adicionando ao array\n                coluna.push(temp);\n                //Adicionando ao DOM\n                linha.appendChild(temp);\n            }\n            //Inserindo as colunas no array principal\n            cell.push(coluna);\n            //Inserindo linha no DOM\n            mainDiv.appendChild(linha);\n        }\n\n        //Agora adicionando os atributos/eventListeners para o teclado\n        const teclas = document.querySelectorAll('.button');\n        teclas.forEach(tecla =>{\n            tecla.setAttribute('data-letra', tecla.innerText);\n            tecla.addEventListener('click', () => inserir(tecla.innerText));\n        });\n\n        //Adicionando funcionalidade backspace\n        document.getElementById('backspace').addEventListener('click', backspace);\n\n        //Adicionando funcionalidade do enter\n        document.getElementById('enter').addEventListener('click', enter)\n\n        //Funcionalidade do teclado\n        document.addEventListener('keydown', keyHandler);\n\n        console.log(\"Done loading!\");\n    }\n\n    //Funcoes privadas -------------\n    function inserir(letra){\n        if(colunaAtual < 5){\n            cell[linhaAtual][colunaAtual].innerText = letra;\n            colunaAtual++;\n        }\n    }\n\n    function backspace(){\n        //Se houver algo, remover e diminuir coluna atual\n        if(colunaAtual > 0){\n            cell[linhaAtual][colunaAtual - 1].innerText = '';\n            colunaAtual--;\n        }\n    }\n\n    function enter(){\n        if(colunaAtual == 5){\n            //ENFILAR/EMPILHAR TODOS ELEMENTOS DA LINHA AQUI\n            cell[linhaAtual].forEach(item => console.log(item.innerText));\n            linhaAtual++;\n            colunaAtual = 0;\n        }\n        else{\n            console.error(\"Inserir todas as caixas\")\n        }\n    }\n\n    function keyHandler(e){\n        const pressed = e.key;\n        //Primeiro verificando backspace/enter\n        if(e.key == 'Backspace') backspace();\n        else if(e.key == \"Enter\") enter();\n        //Verficando se eh letra\n        else if(e.key.toUpperCase() != e.key.toLowerCase() && e.key.length == 1) inserir(e.key.toUpperCase());\n    }\n\n\n    //Funcoes publicas -----------\n\n    //Funcao para colorir teclado. Usar como callback\n    function colorirTeclado(letra,posicao){\n        //Pega o elemento\n        const element = document.querySelector(`[data-letra=\"${letra}\"]`);\n        //Se posicao for 0 (correto), apenas setar\n        if(posicao == 0){\n            element.style.backgroundColor = \"green\";\n        }\n        else if(posicao == 1){\n            if(element.style.backgroundColor != \"green\") element.style.backgroundColor = \"yellow\";\n        }\n        else{\n            element.style.backgroundColor = \"red\"\n        }\n    }\n\n    return { init, colorirTeclado }\n})();\n\n\n\n//# sourceURL=webpack://projetoaed-ufscar/./src/modulos/DOM.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;