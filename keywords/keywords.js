var keywords = ["abstract", "continue", "for", "new", "switch", "assert", "default", "goto", "package", "synchronized", "boolean", "do", "if", "private", "this", "break", "double", "implements", "protected", "throw", "byte", "else", "import", "public", "throws", "case", "enum", "instanceof", "return", "transient", "catch", "extends", "int", "short", "try", "char", "final", "interface", "static", "void", "class", "finally", "long", "strictfp**", "volatile", "const*", "float", "native", "super", "while"];

var gCounterRight = 0;
var gContadorDePalavrasReservadasDisponveis = 244;

var others = [
    "auto", "break", "case", "char",
    "const", "continue", "default", "do",
    "double", "else", "enum", "extern",
    "float", "for", "goto", "if",
    "int", "long", "register", "return",
    "short", "signed", "sizeof", "static",
    "struct", "switch", "typedef", "union",
    "unsigned", "void", "volatile", "while",
    "abstract", "continue", "for", "new", "switch", "assert", "default", "goto", "package", "synchronized", "boolean", "do", "if", "private", "this", "break", "double", "implements", "protected", "throw", "byte", "else", "import", "public", "throws", "case", "enum", "instanceof", "return", "transient", "catch", "extends", "int", "short", "try", "char", "final", "interface", "static", "void", "class", "finally", "long", "strictfp**", "volatile", "const*", "float", "native", "super", "while",
    "abstract", "as", "base", "bool",
    "break", "byte", "case", "catch",
    "char", "checked", "class", "const",
    "continue", "decimal", "default", "delegate",
    "do", "double", "else", "enum",
    "event", "explicit", "extern", "false",
    "finally", "fixed", "float", "for",
    "foreach", "goto", "if", "implicit",
    "in", "in (generic modifier)", "int", "interface",
    "internal", "is", "lock", "long",
    "namespace", "new", "null", "object",
    "operator", "out", "out (generic modifier)", "override",
    "params", "private", "protected", "public",
    "readonly", "ref", "return", "sbyte",
    "sealed", "short", "sizeof", "stackalloc",
    "static", "string", "struct", "switch",
    "this", "throw", "true", "try",
    "typeof", "uint", "ulong", "unchecked",
    "unsafe", "ushort", "using", "virtual",
    "void", "volatile", "while",
    "alignas",
    "alignof",
    "and",
    "and_eq",
    "asm",
    "auto",
    "bitand",
    "bitor",
    "bool",
    "break",
    "case",
    "catch",
    "char",
    "char16_t",
    "char32_t",
    "class",
    "compl",
    "const",
    "constexpr",
    "const_cast",
    "continue",
    "decltype",
    "default",
    "delete",
    "do",
    "double",
    "dynamic_cast",
    "else",
    "enum",
    "explicit",
    "export",
    "extern",
    "false",
    "float",
    "for",
    "friend",
    "goto",
    "if",
    "inline",
    "int",
    "long",
    "mutable",
    "namespace",
    "new",
    "noexcept",
    "not",
    "not_eq",
    "nullptr",
    "operator",
    "or",
    "or_eq",
    "private",
    "protected",
    "public",
    "register",
    "reinterpret_cast",
    "return",
    "short",
    "signed",
    "sizeof",
    "static",
    "static_assert",
    "static_cast",
    "struct",
    "switch",
    "template",
    "this",
    "thread_local",
    "throw",
    "true",
    "try",
    "typedef",
    "typeid",
    "typename",
    "union",
    "unsigned",
    "using",
    "virtual",
    "void",
    "volatile",
    "wchar_t",
    "while",
    "xor",
    "xor_eq"
];

function evaluate(answer) {
    var textoAcertouErrou = "";
	var keyword = recuperarPalavraReservadaAtualNoCampoOculto();
	
    var ehPalavraReservada = avaliarSeEhPalavraReservada(keyword);
	 		
	if ((ehPalavraReservada == "true") && (answer == "true")) {
		hidePanelInfo();
		destacarCampoQuandoAcerta();
	    gCounterRight = gCounterRight + 1;
    }else{
	
		if((ehPalavraReservada == "true") && answer == "false"){
			textoAcertouErrou = gerarTextoErroPalavraEhReservada(keyword.value);
		}else if((ehPalavraReservada == "false") && answer == "true"){
			textoAcertouErrou = gerarTextoErroPalavraNaoEhReservada(keyword.value);
		}
		
		showPanelInfo(); 	
		destacarCampoQuandoErra();
		gCounterRight = 0;
		
	}
	
	getElementById("lembrete").innerHTML = textoAcertouErrou;
	getElementById("counterRight").innerHTML = gCounterRight;
	
    loadNextQuestion();
}

function recuperarPalavraReservadaAtualNoCampoOculto(){
	return getElementById("keyword");
}

function avaliarSeEhPalavraReservada(keyword){
		 
	 for (i = 0; i < keywords.length; i++) {
        if (keyword.value == keywords[i]) {
            return "true";
        }
    }
	return "false";
}

function getElementById(strId){
	return System.Gadget.document.getElementById(strId);
}

function loadNextQuestion() {
    var randomNumber = Math.floor((Math.random() * gContadorDePalavrasReservadasDisponveis) + 1);
    System.Gadget.document.getElementById("options").innerHTML = others[randomNumber];
    System.Gadget.document.getElementById("keyword").value = others[randomNumber];
}

function destacarCampoQuandoAcerta(){
	System.Gadget.document.getElementById("options").style.color = "green";
}

function destacarCampoQuandoErra(){
	System.Gadget.document.getElementById("options").style.color = "red";
}

function gerarTextoErroPalavraEhReservada(strkeyword){
	return textoAcertouErrou = "ERROU! " + strkeyword + " é palavra reservada Java";
}

function gerarTextoErroPalavraNaoEhReservada(strkeyword){
	return textoAcertouErrou = "ERROU! " + strkeyword + " não é palavra reservada Java";
}

function showPanelInfo(){
	System.Gadget.document.getElementById("panelInfo").style.display = 'block';
}

function hidePanelInfo(){
	System.Gadget.document.getElementById("panelInfo").style.display = 'none';
}

function openURL(){
	var cli = new XMLHttpRequest();
	cli.onreadystatechange = function() {
			if (cli.readyState === 4) {
				if (cli.status === 200) {
						   // OK
						   alert('response:'+cli.responseText);
						   // here you can use the result (cli.responseText)
				} else {
						   // not OK
						   alert('failure!');
				}
			}
	};
	cli.open('GET', 'https://efisco7.sefaz.pe.gov.br/sfi_trb_gna/PRGerarDiarioOficial');
	cli.send();
}