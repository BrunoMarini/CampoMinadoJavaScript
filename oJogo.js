class Jogo
{
    constructor(){
        
        this._tamanhoMapa = 10;
        this._qtdBombas   = 15;
        this._qtdBandeira = 0;
        this._condicao = 0;

        this._campo = new Array(this._tamanhoMapa);
        this._jogadas = new Array(this._tamanhoMapa);

        for(var i = 0; i < this._tamanhoMapa; i++){
            this._campo[i] = new Array(this._tamanhoMapa);
            this._jogadas[i] = new Array(this._tamanhoMapa);
        }

        for(var i = 0; i < this._tamanhoMapa; i++){
            for(var j = 0; j < this._tamanhoMapa; j++){
                this._campo[i][j] = 0;
                this._jogadas[i][j] = '';
            }
        }
    }

    get tamanhoMapa(){
        return this._tamanhoMapa;
    }

    get qtdBombas(){
        return this._qtdBombas;
    }

    get qtdBandeira(){
        return this._qtdBandeira;
    }

    preencheMapa(){
        this.preencheBomba();
        this.preencheNumeros();
    }

    preencheBomba(){
        var x, y;
        var bombas = 0;

        while(bombas < this._qtdBombas){
            
            x = Math.floor(Math.random() * this._tamanhoMapa);
            y = Math.floor(Math.random() * this._tamanhoMapa);

            while(this._campo[x][y] == 'B'){
                x = Math.floor(Math.random() * this._tamanhoMapa);
                y = Math.floor(Math.random() * this._tamanhoMapa);
            }

            this._campo[x][y] = 'B';

            bombas++;
        }        
    }

    preencheNumeros(){
        //Verifica a primeira linha
        for(var i = 0; i < this._tamanhoMapa; i++){
            if(i == 0){
                this.verifica(5, 0, i);
                this.verifica(7, 0, i);
                this.verifica(8, 0, i); 
            }else if (i == this._tamanhoMapa - 1){
                this.verifica(4, 0, i);
                this.verifica(6, 0, i);
                this.verifica(7, 0, i);
            }else{
                this.verifica(4, 0, i);
                this.verifica(5, 0, i);
                this.verifica(6, 0, i);
                this.verifica(7, 0, i);
                this.verifica(8, 0, i);
            }
        }

        for(var i = 1; i < this._tamanhoMapa - 1; i++){
            for(var j = 0; j < this._tamanhoMapa; j++){
                if(j == 0){
                    this.verifica(2, i, j);
                    this.verifica(3, i, j);
                    this.verifica(5, i, j);
                    this.verifica(7, i, j);
                    this.verifica(8, i, j);
                }else if(j == this._tamanhoMapa - 1){
                    this.verifica(1, i, j);
                    this.verifica(2, i, j);
                    this.verifica(4, i, j);
                    this.verifica(6, i, j);
                    this.verifica(7, i, j);
                }else{
                    this.verifica(1, i, j);
                    this.verifica(2, i, j);
                    this.verifica(3, i, j);
                    this.verifica(4, i, j);
                    this.verifica(5, i, j);
                    this.verifica(6, i, j);
                    this.verifica(7, i, j);
                    this.verifica(8, i, j);
                }
            }
        }

        //Verifica a ultima linha
        for(var i = 0; i < this._tamanhoMapa; i++){
            if(i == 0){
                this.verifica(2, this._tamanhoMapa - 1, i);
                this.verifica(3, this._tamanhoMapa - 1, i);
                this.verifica(5, this._tamanhoMapa - 1, i); 
            }else if (i == this._tamanhoMapa - 1){
                this.verifica(1, this._tamanhoMapa - 1, i);
                this.verifica(2, this._tamanhoMapa - 1, i);
                this.verifica(4, this._tamanhoMapa - 1, i);
            }else{
                this.verifica(1, this._tamanhoMapa - 1, i);
                this.verifica(2, this._tamanhoMapa - 1, i);
                this.verifica(3, this._tamanhoMapa - 1, i);
                this.verifica(4, this._tamanhoMapa - 1, i);
                this.verifica(5, this._tamanhoMapa - 1, i);
            }
        }

        // for(var i = 0; i < this._tamanhoMapa; i++)
        //     for(var j = 0; j < this._tamanhoMapa; j++)
        //         document.getElementById("" + i + j).value = this._campo[i][j];

        for(var i = 0; i < this._tamanhoMapa; i++)
            for(var j = 0; j < this._tamanhoMapa; j++)
                this._jogadas[i][j] = 'P';            
    }

    verifica(p, linha, coluna){
        if(this._campo[linha][coluna] == 'B')
        {
            switch (p){
                case 1:
                    if(this._campo[linha - 1][coluna - 1] != 'B'){
                        this._campo[linha - 1][coluna - 1]++;
                    }
                break;
                case 2:
                    if(this._campo[linha - 1][coluna] != 'B'){
                        this._campo[linha - 1][coluna]++;
                    }
                break;
                case 3: 
                    if(this._campo[linha - 1][coluna + 1] != 'B'){
                        this._campo[linha - 1][coluna + 1]++;
                    }
                break;
                case 4: 
                    if(this._campo[linha][coluna - 1] != 'B'){
                        this._campo[linha][coluna - 1]++;
                    }
                break;
                case 5: 
                    if(this._campo[linha][coluna + 1] != 'B'){
                        this._campo[linha][coluna + 1]++;
                    }
                break;
                case 6: 
                    if(this._campo[linha + 1][coluna - 1] != 'B'){
                        this._campo[linha + 1][coluna - 1]++;
                    }
                break;
                case 7: 
                    if(this._campo[linha + 1][coluna] != 'B'){
                        this._campo[linha + 1][coluna]++;
                    }
                break;
                case 8: 
                    if(this._campo[linha + 1][coluna + 1] != 'B'){
                        this._campo[linha + 1][coluna + 1]++;
                    }
                break;
            }
        }
    }

    opFlag(button){
        
        if(this._condicao == 0){
            var linha  = button.id.substring( 0, 1); //12 --> 1
            var coluna = button.id.substring( 1, 2); //12 --> 2

            var atual = this._jogadas[linha][coluna];

            if(atual != 'C' || atual != 'V'){
                if(atual == 'F'){
                    this._jogadas[linha][coluna] = 'P';
                    this._qtdBandeira--;
                    button.style = "cursor: pointer; text-align: center; background-color: #75a3a3; height: 50px; width: 50px; font-size: 20px;";
                }
                else if(atual == 'P' && this._qtdBandeira < this._qtdBombas){
                    this._jogadas[linha][coluna] = 'F';
                    this._qtdBandeira++;
                    button.style = "cursor: pointer; text-align: center; height: 50px; width: 50px; font-size: 20px; background: url(bandeira.png) 0 0 #75a3a3;";
                }
            }
        }else{
            if(confirm("Voce perdeu, deseja jogar novamente?")){
                location.reload();
            }
        }
    }

    opClick(button){

        if(this._condicao == 0){
            var linha  = button.id.substring( 0, 1); //12 --> 1
            var coluna = button.id.substring( 1, 2); //12 --> 2

            if(this._jogadas[linha][coluna] != 'F'){
                if(this._campo[linha][coluna] == 'B'){
                    this._condicao = 1;
                    this.showBombs();

                    setTimeout(function() {   
                        if(confirm("Voce perdeu, deseja jogar novamente?")){
                            location.reload();
                        }
                    }, 2000);

                }else{
                    button.style = "cursor: pointer; text-align: center; background-color: #c2d6d6; height: 50px; width: 50px; font-size: 20px;";
                    if(this._campo[linha][coluna] != 0){
                        button.value = this._campo[linha][coluna];
                        this._jogadas[linha][coluna] = 'C';
                    }
                    else{
                        this.limpaArea(parseInt(linha), parseInt(coluna));
                        
                        for(var i = 0; i < this._tamanhoMapa; i++){
                            for(var j = 0; j < this._tamanhoMapa; j++){
                                if(this._jogadas[i][j] == 'V'){
                                    if(this._campo[i][j] == ''){
                                        document.getElementById(""+i+j).style = "cursor: pointer; text-align: center; background-color: #c2d6d6; height: 50px; width: 50px; font-size: 20px;";
                                    }else{
                                        document.getElementById(""+i+j).style = "cursor: pointer; text-align: center; background-color: #c2d6d6; height: 50px; width: 50px; font-size: 20px;";
                                        document.getElementById(""+i+j).value = this._campo[i][j];
                                    }
                                }
                            }
                        }
                    }
                    
                }
            }
        }else{
            if(confirm("Voce perdeu, deseja jogar novamente?")){
                location.reload();
            }
        }
    }

    limpaArea(linha, coluna){
       
        if ((this._jogadas[linha] == undefined) || (this._jogadas[linha][coluna] == undefined) || (this._jogadas[linha][coluna] != 'P')) return;
        this._jogadas[linha][coluna] = 'V';
    
        if ((parseInt(this._campo[linha][coluna]) === this._campo[linha][coluna]) && (this._campo[linha][coluna] != 0)) return;    

        this.limpaArea(linha+1, coluna);
        this.limpaArea(linha-1, coluna);
        this.limpaArea(linha, coluna+1);
        this.limpaArea(linha, coluna-1);
        
        this.limpaArea(linha - 1, coluna - 1);
        this.limpaArea(linha - 1, coluna + 1);
        this.limpaArea(linha + 1, coluna - 1);
        this.limpaArea(linha + 1, coluna + 1);

        return;        
    }

    ganhou(){
        for(var i = 0; i < this._tamanhoMapa; i++){
            for(var j = 0; j < this._tamanhoMapa; j++){
                if(this._campo[i][j] == 'B'){
                    if(this._jogadas[i][j] != 'F')
                        return -1;
                }
            }
        }
        return 1;
    }

    showBombs(){
        for(var i = 0; i < this._tamanhoMapa; i++){
            for(var j = 0; j < this._tamanhoMapa;j++){
                if(this._campo[i][j] == 'B'){
                    document.getElementById(""+i+""+j).style = "cursor: pointer; text-align: center; height: 50px; width: 50px; font-size: 20px; background: url(bomba.png) 0 0 #75a3a3";
                    //this.unfade(document.getElementById(""+i+""+j));
                }
            }
        }
    }

    fade(element) {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                //element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }

    unfade(element) {
        var op = 0.1;  // initial opacity
        //element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 10 + ")";
            op += op * 0.1;
        }, 100);
    }
}