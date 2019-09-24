let j = new Jogo();
var qtdBandeira = -1;
var x = 1;

function exibeMapa()
{   
    for(var k = 1; k <= j.tamanhoMapa; k++){
        for(var i = 0; i < j.tamanhoMapa; i++){
            
            var id = "" + (k - 1) + "" + i;
            var texto = "linha" + parseInt(k);
            
            func(id, texto);
        }
    }

    function func(i, linha){
        var button = document.createElement("input");
        button.type = "button";
        button.id = i;
        button.value = i;
       
        button.addEventListener('contextmenu',  function(e){
            if(qtdBandeira == -1){
                qtdBandeira++;
                start();
            }
            j.opFlag(button);
            colocouBandeira();
            verificaFim();
        });

        button.onclick = function(){ 
            if(qtdBandeira == -1){
                qtdBandeira++;
                start();
            }
            j.opClick(button);
            verificaFim();
        };
        
        button.style = "cursor: pointer; text-align: center; background-color: #75a3a3; height: 50px; width: 50px; font-size: 20px;";
        button.value = " ";        
        document.getElementById(linha).appendChild(button);
    }
    document.getElementById("countTimer").value = "ABRACADABRA";
    j.preencheMapa();
}

function start(){

    document.getElementById("countBandeira").innerHTML = 0 + " / " + j.qtdBombas;

    var time = setInterval(function(){
        document.getElementById("countTimer").innerHTML = x;
        x++;
    }, 1000);
}

function colocouBandeira(){
    document.getElementById("countBandeira").innerHTML = j.qtdBandeira + " / " + j.qtdBombas;   
}

function verificaFim(){
    if(j.ganhou() == 1){
        alert("Parabens! Voce ganhou em " + x + " segundos!");
    }
}