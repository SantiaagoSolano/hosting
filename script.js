function escribirMundo(mundo){
    document.getElementById(mundo).innerHTML=mundo;
}
function borrarMundo(mundo){
    document.getElementById(mundo).innerHTML='';    

}
if(self.innerWidth > 800){
    var padTop = "41%";
    var numeroPad = 41;
}
else{
    var padTop = "91%";
    var numeroPad = 91;
}

function estabilizar(){
    if(self.innerWidth <= 800 && numeroPad < 91){
        document.getElementById("ReinoDeAsgard").style.padding = 91 +"%" + 110 +"%";
        document.getElementById("bifrost").style.marginTop= -90 +"%";
        document.getElementById("bifrost").style.marginLeft= 2.6 +"%";
        document.getElementById("ManzanaIdunn").style.marginTop= 43 +"%";
        document.getElementById("ManzanaIdunn").style.marginLeft= -14.5 +"%";
        document.getElementById("Valhalla").style.marginTop= 23 +"%";
        document.getElementById("Valhalla").style.marginLeft= 3 +"%";
        document.getElementById("Palacio").style.marginTop= 3 +"%";
        document.getElementById("Palacio").style.marginLeft= 2.5 +"%";
        document.getElementById("Folkvangr").style.marginTop= 43 +"%";
        document.getElementById("Folkvangr").style.marginLeft= 45 +"%";
        document.getElementById("Franang").style.marginTop= -24 +"%";
        document.getElementById("Franang").style.marginLeft= -33 +"%";
        padTop = "91%";
        numeroPad = 91;
    }else if(self.innerWidth > 800 && numeroPad > 81){
        document.getElementById("ReinoDeAsgard").style.padding = 81 +"%" + 97.8 +"%";
        document.getElementById("bifrost").style.marginTop= -78 +"%";
        document.getElementById("bifrost").style.marginLeft= 4.7 +"%";
        document.getElementById("ManzanaIdunn").style.marginTop= 41 +"%";
        document.getElementById("ManzanaIdunn").style.marginLeft= -11.3 +"%";
        document.getElementById("Valhalla").style.marginTop= 22 +"%";
        document.getElementById("Valhalla").style.marginLeft= 4.3 +"%";
        document.getElementById("Palacio").style.marginTop= 5 +"%";
        document.getElementById("Palacio").style.marginLeft= 4.3 +"%";
        document.getElementById("Folkvangr").style.marginTop= 40 +"%";
        document.getElementById("Folkvangr").style.marginLeft= 40 +"%";
        document.getElementById("Franang").style.marginTop= -20 +"%";
        document.getElementById("Franang").style.marginLeft= -28 +"%";
        padTop = "81%";
        numeroPad = 81;
    }

}
function acercar(){
    switch(padTop){
        case "41%":
            document.getElementById("ReinoDeAsgard").style.padding = 51 +"%"+ 61.5 +"%";
            document.getElementById("bifrost").style.marginTop= -50 +"%";
            document.getElementById("bifrost").style.marginLeft= 1.9 +"%";
            document.getElementById("ManzanaIdunn").style.marginTop= 24.4 +"%";
            document.getElementById("ManzanaIdunn").style.marginLeft= -8.3 +"%";
            document.getElementById("Valhalla").style.marginTop= 13 +"%";
            document.getElementById("Valhalla").style.marginLeft= 1.3 +"%";
            document.getElementById("Palacio").style.marginTop= 2 +"%";
            document.getElementById("Palacio").style.marginLeft= 1.3 +"%";
            document.getElementById("Folkvangr").style.marginTop= 24.5 +"%";
            document.getElementById("Folkvangr").style.marginLeft= 24.5 +"%";
            document.getElementById("Franang").style.marginTop= -14 +"%";
            document.getElementById("Franang").style.marginLeft= -19 +"%";
            padTop = "51%";
            numeroPad = 51;
            break;
        case "51%":
            document.getElementById("ReinoDeAsgard").style.padding = 61 +"%"+ 73.5 +"%";
            document.getElementById("bifrost").style.marginTop= -60 +"%";
            document.getElementById("bifrost").style.marginLeft= 2.8 +"%";
            document.getElementById("ManzanaIdunn").style.marginTop= 29.6 +"%";
            document.getElementById("ManzanaIdunn").style.marginLeft= -9.3 +"%";
            document.getElementById("Valhalla").style.marginTop= 16 +"%";
            document.getElementById("Valhalla").style.marginLeft= 2.3 +"%";
            document.getElementById("Palacio").style.marginTop= 2 +"%";
            document.getElementById("Palacio").style.marginLeft= 2.3 +"%";
            document.getElementById("Folkvangr").style.marginTop= 30 +"%";
            document.getElementById("Folkvangr").style.marginLeft= 30 +"%";
            document.getElementById("Franang").style.marginTop= -16 +"%";
            document.getElementById("Franang").style.marginLeft= -22 +"%";
            padTop = "61%";
            numeroPad = 61;
            break;
        case "61%":
            document.getElementById("ReinoDeAsgard").style.padding = 71 +"%"+ 85.5 +"%";
            document.getElementById("bifrost").style.marginTop= -68 +"%";
            document.getElementById("bifrost").style.marginLeft= 3.7 +"%";
            document.getElementById("ManzanaIdunn").style.marginTop= 35 +"%";
            document.getElementById("ManzanaIdunn").style.marginLeft= -10.3 +"%";
            document.getElementById("Valhalla").style.marginTop= 19 +"%";
            document.getElementById("Valhalla").style.marginLeft= 3.3 +"%";
            document.getElementById("Palacio").style.marginTop= 4 +"%";
            document.getElementById("Palacio").style.marginLeft= 3.3 +"%";
            document.getElementById("Folkvangr").style.marginTop= 35 +"%";
            document.getElementById("Folkvangr").style.marginLeft= 35 +"%";
            document.getElementById("Franang").style.marginTop= -18 +"%";
            document.getElementById("Franang").style.marginLeft= -25 +"%";
            padTop = "71%";
            numeroPad = 71;
            break;
        case "71%":
            document.getElementById("ReinoDeAsgard").style.padding = 81 +"%" + 97.8 +"%";
            document.getElementById("bifrost").style.marginTop= -78 +"%";
            document.getElementById("bifrost").style.marginLeft= 4.7 +"%";
            document.getElementById("ManzanaIdunn").style.marginTop= 41 +"%";
            document.getElementById("ManzanaIdunn").style.marginLeft= -11.3 +"%";
            document.getElementById("Valhalla").style.marginTop= 22 +"%";
            document.getElementById("Valhalla").style.marginLeft= 4.3 +"%";
            document.getElementById("Palacio").style.marginTop= 5 +"%";
            document.getElementById("Palacio").style.marginLeft= 4.3 +"%";
            document.getElementById("Folkvangr").style.marginTop= 40 +"%";
            document.getElementById("Folkvangr").style.marginLeft= 40 +"%";
            document.getElementById("Franang").style.marginTop= -20 +"%";
            document.getElementById("Franang").style.marginLeft= -28 +"%";
            padTop = "81%";
            numeroPad = 81;
            break;
        case "91%":
            document.getElementById("ReinoDeAsgard").style.padding = 101 +"%" + 121.8 +"%";
            document.getElementById("bifrost").style.marginTop= -98 +"%";
            document.getElementById("bifrost").style.marginLeft= 3.5 +"%";
            document.getElementById("ManzanaIdunn").style.marginTop= 48.5 +"%";
            document.getElementById("ManzanaIdunn").style.marginLeft= -15.5 +"%";
            document.getElementById("Valhalla").style.marginTop= 26 +"%";
            document.getElementById("Valhalla").style.marginLeft= 3.5 +"%";
            document.getElementById("Palacio").style.marginTop= 5.5 +"%";
            document.getElementById("Palacio").style.marginLeft= 3.5 +"%";
            document.getElementById("Folkvangr").style.marginTop= 50 +"%";
            document.getElementById("Folkvangr").style.marginLeft= 50 +"%";
            document.getElementById("Franang").style.marginTop= -25 +"%";
            document.getElementById("Franang").style.marginLeft= -36 +"%";
            padTop = "101%";
            numeroPad = 101;
            break;
        case "101%":
            document.getElementById("ReinoDeAsgard").style.padding = 111 +"%" + 134 +"%";
            document.getElementById("bifrost").style.marginTop= -106 +"%";
            document.getElementById("bifrost").style.marginLeft= 4.5 +"%";
            document.getElementById("ManzanaIdunn").style.marginTop= 53.8 +"%";
            document.getElementById("ManzanaIdunn").style.marginLeft= -16.5 +"%";
            document.getElementById("Valhalla").style.marginTop= 28 +"%";
            document.getElementById("Valhalla").style.marginLeft= 4.5 +"%";
            document.getElementById("Palacio").style.marginTop= 5.5 +"%";
            document.getElementById("Palacio").style.marginLeft= 4.5 +"%";
            document.getElementById("Folkvangr").style.marginTop= 55 +"%";
            document.getElementById("Folkvangr").style.marginLeft= 55 +"%";
            document.getElementById("Franang").style.marginTop= -27 +"%";
            document.getElementById("Franang").style.marginLeft= -40 +"%";
            padTop = "111%";
            numeroPad = 111;
            break;
        case "111%":
            document.getElementById("ReinoDeAsgard").style.padding = 121 +"%" + 146 +"%";
            document.getElementById("bifrost").style.marginTop= -118 +"%";
            document.getElementById("bifrost").style.marginLeft= 5.5 +"%";
            document.getElementById("ManzanaIdunn").style.marginTop= 58.8 +"%";
            document.getElementById("ManzanaIdunn").style.marginLeft= -17.5 +"%";
            document.getElementById("Valhalla").style.marginTop= 32 +"%";
            document.getElementById("Valhalla").style.marginLeft= 5.5 +"%";
            document.getElementById("Palacio").style.marginTop= 5.5 +"%";
            document.getElementById("Palacio").style.marginLeft= 5.5 +"%";
            document.getElementById("Folkvangr").style.marginTop= 60 +"%";
            document.getElementById("Folkvangr").style.marginLeft= 60 +"%";
            document.getElementById("Franang").style.marginTop= -29 +"%";
            document.getElementById("Franang").style.marginLeft= -43 +"%";
            padTop = "121%";
            numeroPad = 121;
            break;
        case "121%":
            document.getElementById("ReinoDeAsgard").style.padding = 131 +"%" + 158 +"%";
            document.getElementById("bifrost").style.marginTop= -125 +"%";
            document.getElementById("bifrost").style.marginLeft= 6.3 +"%";
            document.getElementById("ManzanaIdunn").style.marginTop= 64.2 +"%";
            document.getElementById("ManzanaIdunn").style.marginLeft= -18.5 +"%";
            document.getElementById("Valhalla").style.marginTop= 34 +"%";
            document.getElementById("Valhalla").style.marginLeft= 6.5 +"%";
            document.getElementById("Palacio").style.marginTop= 6.5 +"%";
            document.getElementById("Palacio").style.marginLeft= 6.5 +"%";
            document.getElementById("Folkvangr").style.marginTop= 65 +"%";
            document.getElementById("Folkvangr").style.marginLeft= 65 +"%";
            document.getElementById("Franang").style.marginTop= -32 +"%";
            document.getElementById("Franang").style.marginLeft= -46 +"%";
            padTop = "131%";
            numeroPad = 131;
            break;
    }           

}

function alejar(){
    switch(padTop){
        
        case "51%":
            document.getElementById("ReinoDeAsgard").style.padding = 41 +"%" + 50 +"%";
            document.getElementById("bifrost").style.marginTop= -40 +"%";
            document.getElementById("bifrost").style.marginLeft= 0.9 +"%";
            document.getElementById("ManzanaIdunn").style.marginTop= 19.3 +"%";
            document.getElementById("ManzanaIdunn").style.marginLeft= -7.5 +"%";
            document.getElementById("Valhalla").style.marginTop= 10 +"%";
            document.getElementById("Valhalla").style.marginLeft= 0.5 +"%";
            document.getElementById("Palacio").style.marginTop= 2 +"%";
            document.getElementById("Palacio").style.marginLeft= 0.45 +"%";
            document.getElementById("Folkvangr").style.marginTop= 20 +"%";
            document.getElementById("Folkvangr").style.marginLeft= 20 +"%";
            document.getElementById("Franang").style.marginTop= -11 +"%";
            document.getElementById("Franang").style.marginLeft= -17 +"%";
            padTop = "41%";
            numeroPad = 41;
            break;
        case "61%":
            document.getElementById("ReinoDeAsgard").style.padding = 51 +"%" + 61.5 +"%";
            document.getElementById("bifrost").style.marginTop= -50 +"%";
            document.getElementById("bifrost").style.marginLeft= 1.9 +"%";
            document.getElementById("ManzanaIdunn").style.marginTop= 24.4 +"%";
            document.getElementById("ManzanaIdunn").style.marginLeft= -8.3 +"%";
            document.getElementById("Valhalla").style.marginTop= 13 +"%";
            document.getElementById("Valhalla").style.marginLeft= 1.3 +"%";
            document.getElementById("Palacio").style.marginTop= 2 +"%";
            document.getElementById("Palacio").style.marginLeft= 1.3 +"%";
            document.getElementById("Folkvangr").style.marginTop= 24.5 +"%";
            document.getElementById("Folkvangr").style.marginLeft= 24.5 +"%";
            document.getElementById("Franang").style.marginTop= -14 +"%";
            document.getElementById("Franang").style.marginLeft= -19 +"%";
            padTop = "51%";
            numeroPad = 51;
            break;
        case "71%":
            document.getElementById("ReinoDeAsgard").style.padding = 61 +"%" + 73.5 +"%"; 
            document.getElementById("bifrost").style.marginTop= -60 +"%";
            document.getElementById("bifrost").style.marginLeft= 2.8 +"%";
            document.getElementById("ManzanaIdunn").style.marginTop= 29.6 +"%";
            document.getElementById("ManzanaIdunn").style.marginLeft= -9.3 +"%";
            document.getElementById("Valhalla").style.marginTop= 16 +"%";
            document.getElementById("Valhalla").style.marginLeft= 2.3 +"%";
            document.getElementById("Palacio").style.marginTop= 2 +"%";
            document.getElementById("Palacio").style.marginLeft= 2.3 +"%";
            document.getElementById("Folkvangr").style.marginTop= 30 +"%";
            document.getElementById("Folkvangr").style.marginLeft= 30 +"%";
            document.getElementById("Franang").style.marginTop= -16 +"%";
            document.getElementById("Franang").style.marginLeft= -22 +"%";
            padTop = "61%";
            numeroPad = 61;
            break;
        case "81%":
            document.getElementById("ReinoDeAsgard").style.padding = 71 +"%" + 85.5 +"%"; 
            document.getElementById("bifrost").style.marginTop= -68 +"%";
            document.getElementById("bifrost").style.marginLeft= 3.7 +"%";
            document.getElementById("ManzanaIdunn").style.marginTop= 35 +"%";
            document.getElementById("ManzanaIdunn").style.marginLeft= -10.3 +"%";
            document.getElementById("Valhalla").style.marginTop= 19 +"%";
            document.getElementById("Valhalla").style.marginLeft= 3.3 +"%";
            document.getElementById("Palacio").style.marginTop= 4 +"%";
            document.getElementById("Palacio").style.marginLeft= 3.3 +"%";
            document.getElementById("Folkvangr").style.marginTop= 35 +"%";
            document.getElementById("Folkvangr").style.marginLeft= 35 +"%";
            document.getElementById("Franang").style.marginTop= -18 +"%";
            document.getElementById("Franang").style.marginLeft= -25 +"%";
            padTop = "71%";
            numeroPad = 71;
            break;
        case "101%":
            document.getElementById("ReinoDeAsgard").style.padding = 91 +"%" + 110 +"%";
            document.getElementById("bifrost").style.marginTop= -90 +"%";
            document.getElementById("bifrost").style.marginLeft= 2.6 +"%";
            document.getElementById("ManzanaIdunn").style.marginTop= 43 +"%";
            document.getElementById("ManzanaIdunn").style.marginLeft= -14.5 +"%";
            document.getElementById("Valhalla").style.marginTop= 23 +"%";
            document.getElementById("Valhalla").style.marginLeft= 3 +"%";
            document.getElementById("Palacio").style.marginTop= 3 +"%";
            document.getElementById("Palacio").style.marginLeft= 2.5 +"%";
            document.getElementById("Folkvangr").style.marginTop= 43 +"%";
            document.getElementById("Folkvangr").style.marginLeft= 45 +"%";
            document.getElementById("Franang").style.marginTop= -24 +"%";
            document.getElementById("Franang").style.marginLeft= -33 +"%";
            padTop = "91%";
            numeroPad = 91;
            break;
        case "111%":
            document.getElementById("ReinoDeAsgard").style.padding = 101 +"%" + 121.8 +"%";
            document.getElementById("bifrost").style.marginTop= -98 +"%";
            document.getElementById("bifrost").style.marginLeft= 3.5 +"%";
            document.getElementById("ManzanaIdunn").style.marginTop= 48.5 +"%";
            document.getElementById("ManzanaIdunn").style.marginLeft= -15.5 +"%";
            document.getElementById("Valhalla").style.marginTop= 26 +"%";
            document.getElementById("Valhalla").style.marginLeft= 3.5 +"%";
            document.getElementById("Palacio").style.marginTop= 5.5 +"%";
            document.getElementById("Palacio").style.marginLeft= 3.5 +"%";
            document.getElementById("Folkvangr").style.marginTop= 50 +"%";
            document.getElementById("Folkvangr").style.marginLeft= 50 +"%";
            document.getElementById("Franang").style.marginTop= -25 +"%";
            document.getElementById("Franang").style.marginLeft= -36 +"%";
            padTop = "101%";
            numeroPad = 101;
            break;
        case "121%":
            document.getElementById("ReinoDeAsgard").style.padding = 111 +"%" + 134 +"%";
            document.getElementById("bifrost").style.marginTop= -106 +"%";
            document.getElementById("bifrost").style.marginLeft= 4.5 +"%";
            document.getElementById("ManzanaIdunn").style.marginTop= 53.8 +"%";
            document.getElementById("ManzanaIdunn").style.marginLeft= -16.5 +"%";
            document.getElementById("Valhalla").style.marginTop= 28 +"%";
            document.getElementById("Valhalla").style.marginLeft= 4.5 +"%";
            document.getElementById("Palacio").style.marginTop= 5.5 +"%";
            document.getElementById("Palacio").style.marginLeft= 4.5 +"%";
            document.getElementById("Folkvangr").style.marginTop= 55 +"%";
            document.getElementById("Folkvangr").style.marginLeft= 55 +"%";
            document.getElementById("Franang").style.marginTop= -27 +"%";
            document.getElementById("Franang").style.marginLeft= -40 +"%";
            padTop = "111%";
            numeroPad = 111;
            break;
        case "131%":
            document.getElementById("ReinoDeAsgard").style.padding = 121 +"%" + 146 +"%";
            document.getElementById("bifrost").style.marginTop= -118 +"%";
            document.getElementById("bifrost").style.marginLeft= 5.5 +"%";
            document.getElementById("ManzanaIdunn").style.marginTop= 58.8 +"%";
            document.getElementById("ManzanaIdunn").style.marginLeft= -17.5 +"%";
            document.getElementById("Valhalla").style.marginTop= 32 +"%";
            document.getElementById("Valhalla").style.marginLeft= 5.5 +"%";
            document.getElementById("Palacio").style.marginTop= 5.5 +"%";
            document.getElementById("Palacio").style.marginLeft= 5.5 +"%";
            document.getElementById("Folkvangr").style.marginTop= 60 +"%";
            document.getElementById("Folkvangr").style.marginLeft= 60 +"%";
            document.getElementById("Franang").style.marginTop= -29 +"%";
            document.getElementById("Franang").style.marginLeft= -43 +"%";
            padTop = "121%";
            numeroPad = 121;
            break;
    }  

}