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
function colocarContenedorMundo(mundo){
    if(self.getComputedStyle(document.getElementById('Contenedor')).getPropertyValue('display') == "none"){
        document.getElementById("Contenedor").style.display = "block";
    }
    document.getElementById("TituloMundo").innerHTML = mundo;
    document.getElementById("Contenedor").title = mundo;
    document.getElementById("ImagenMundo").alt = mundo;
    switch(mundo){
        case 'Asgard':            
            document.getElementById("ImagenMundo").src = "imagenes/mundoAsgard.jpg";            
            document.getElementById("InformacionMundo").innerHTML = "Asgard es considerado como el hogar de los dioses más importantes de la mitología nórdica, aquí habitan los seres mas fuertes, inteligentes y hábiles de los 9 mundos. En este reino Odín lidero sus tropasdel Valhalla y Thor junto a Loki emprendieron sus viajes y travesías.";
            break
        case 'Vanaheim':
            document.getElementById("ImagenMundo").src = "imagenes/mundoVanaheim.jpg";
            document.getElementById("InformacionMundo").innerHTML = "Es el hogar de los dioses Vanir, los dioses que se encargan de mantener la correcta coexistencia de los seres vivos con la naturaleza, permiten la fertilidad, los cambios de clima, las grandes cosechas y los ganados abundantes.";
            break
        case 'Alfheim':
            document.getElementById("ImagenMundo").src = "imagenes/mundoAlfheim.jpg";
            document.getElementById("InformacionMundo").innerHTML = "Es el hogar de los elfos de luz, los cuales viven en guerra con los elfos oscuros. Los dioses de Asgard tienen poco control en estos terrenos, pero en algunas ocasiones han participado en sus enfrentamientos.";
            break
        case 'Midgard':
            document.getElementById("ImagenMundo").src = "imagenes/mundoMidgard.jpg";
            document.getElementById("InformacionMundo").innerHTML = "Es el hogar de la raza humana, Odín construyó este lugar con el cuerpo del gigante primigenio y con dos árboles que encontró en este lugar le dio vida con sus hermanos Ve y Vili al primer hombre y a la primera mujer. Este reino nunca en la mitología a tenido un enfrentamiento directo con los otros reinos, pero si se ha involucrado ayudando en los viajes de algunos dioses como Thor.";
            break
        case 'Jotunheim':
            document.getElementById("ImagenMundo").src = "imagenes/mundoJotunheim.jpg";
            document.getElementById("InformacionMundo").innerHTML = "Es el hogar de los gigantes de hielo, los enemigos mas influyentes de los dioses de Asgard y de Vanaheim, en este lugar nació Loki uno de los mejores amigos de Odín y de Thor, lo que le permitió llevar la vida de un dios.";
            break
        case 'Muspelheim':
            document.getElementById("ImagenMundo").src = "imagenes/mundoMuspelheim.jpg";
            document.getElementById("InformacionMundo").innerHTML = "Es uno de los primeros reinos en existir y el único en tener solo un habitante. En el Raknarok este reino liberara a Surt quien apoyara a la destrucción de los 9 reinos junto con Loki, sus hijos y su ejercito de gigantes de hielo.";
            break
        case 'Nidavellir':
            document.getElementById("ImagenMundo").src = "imagenes/mundoNidavellir.jpg";
            document.getElementById("InformacionMundo").innerHTML = "Es un lugar de enanos, elfos y de gigantes, sus criaturas se caracterizan por buscar escapar de la vigilancia de los dioses. En algunas historias se cuenta que los elfos de este reino formaron la guerra entre Svartalfheim y Alfheim.";
            break
        case 'Svartalfheim':
            document.getElementById("ImagenMundo").src = "imagenes/mundoSvartalfheim.jpg";
            document.getElementById("InformacionMundo").innerHTML = "En la mitología nórdica se toma este reino y todos los que se encuentran en las raíces del árbol Yggdrasil como un reino general llamado Helheim debido a que todos los seres de estas tierras son odiados por los dioses y los gigantes. Los muertos son enviados aquí y vigilados por la hija de Loki Hela.";
            break
        case 'Niflheim':
            document.getElementById("ImagenMundo").src = "imagenes/mundoNiflheim.jpg";
            document.getElementById("InformacionMundo").innerHTML = "Uno de los primeros reinos al igual que Muspelheim, este lugar en comparación a otros es totalmente helado y lleno de niebla. Aquí surgió la vaca primigenia, el primer gigante de hielo y el primer dios. Buri, el dios, fue el padre de los dioses Aesir y el gigante Ymir formo a los gigantes con el sudor expulsado por todo su cuerpo.";
            break
    }

}
function cerrarContenedor(contenedor){
    document.getElementById(contenedor).style.display = "none";
    
}
function colocarContenedorLugaresAsgard(lugar){
    if(self.getComputedStyle(document.getElementById('Contenedor2')).getPropertyValue('display') == "none"){
        document.getElementById("Contenedor2").style.display = "block";
    }
    document.getElementById("TituloLugar").innerHTML = lugar;
    document.getElementById("Contenedor2").title = lugar;
    document.getElementById("ImagenLugar").alt = lugar;
    self.location.href = "#Contenedor2";
    switch(lugar){
        case 'Bifrost':
            document.getElementById("ImagenLugar").src = "imagenes/lugarBifrost.jpg";            
            document.getElementById("InformacionLugar").innerHTML = "El Bifrost es un gran arcoíris que funciona como puente entre el mundo de los dioses y el de los mortales de Midgard. Esta vigilado por el dios Heimdal, quien además se encarga de impedir el paso de los guerreros enemigos a Asgard. Los dioses atravesaban este puente solo cuando tenían que resolver problemas con los mortales.";
            if(self.matchMedia("only screen and (max-device-width: 800px)").matches){
                document.getElementById("Contenedor2").style.marginTop = 1 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 112 +"rem";  

            }else if(numeroPad == 41){
                document.getElementById("Contenedor2").style.marginTop = 1 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 20 +"rem";               
            }else if(numeroPad == 51 ){
                document.getElementById("Contenedor2").style.marginTop = 1 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 32 +"rem";
            }else if(numeroPad == 61){
                document.getElementById("Contenedor2").style.marginTop = 1 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 42 +"rem";
            }else if(numeroPad == 71){
                document.getElementById("Contenedor2").style.marginTop = 1 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 55 +"rem";
            }else if(numeroPad == 81){
                document.getElementById("Contenedor2").style.marginTop = 1 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 65 +"rem";
            }else if(numeroPad > 81){
                document.getElementById("Contenedor2").style.marginTop = 0.6 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 16 +"rem";   
            }                    
            break
        case 'ManzanaIdunn':
            document.getElementById("TituloLugar").innerHTML = "Campos de Idunn";
            document.getElementById("Contenedor2").title = "Campos de Idunn";
            document.getElementById("ImagenLugar").alt = "Campos de Idunn";
            document.getElementById("ImagenLugar").src = "imagenes/lugarIdunn.jpg";            
            document.getElementById("InformacionLugar").innerHTML = "En Asgard se encuentra el vivero con los árboles y frutos más importante de los dioses, en este lugar se encuentra la manzana las manzanas de la eterna juventud cultivadas por Idunn, que es la única diosa de Asgard con la capacidad de sembrarlos.";
            if(self.matchMedia("only screen and (max-device-width: 800px)").matches){
                document.getElementById("Contenedor2").style.marginTop = 140 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 90 +"rem";  

            }else if(numeroPad == 41){
                document.getElementById("Contenedor2").style.marginTop = 32 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 16 +"rem";
            }else if(numeroPad == 51){
                document.getElementById("Contenedor2").style.marginTop = 50 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 25 +"rem";
            }else if(numeroPad == 61){
                document.getElementById("Contenedor2").style.marginTop = 60 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 35 +"rem";
            }else if(numeroPad == 71){
                document.getElementById("Contenedor2").style.marginTop = 75 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 40 +"rem";
            }else if(numeroPad == 81){
                document.getElementById("Contenedor2").style.marginTop = 90 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 52 +"rem";
            }else if(numeroPad > 81){
                document.getElementById("Contenedor2").style.marginTop = 20 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 16 +"rem";   
            }                                   
            break
        case 'Valhalla':
            document.getElementById("ImagenLugar").src = "imagenes/lugarValhalla.jpg";            
            document.getElementById("InformacionLugar").innerHTML = "El Valhalla es conocido como el lugar donde terminan los grandes guerreros después de una muerte digna. En el Valhalla se puede encontrar una gran variedad de seres de los 9 mundos entrenado al lado de Odín para el fin de los tiempos o el Ragnarok.";
            if(self.matchMedia("only screen and (max-device-width: 800px)").matches){
                document.getElementById("Contenedor2").style.marginTop = 120 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 112 +"rem";  

            }else if(numeroPad == 41){
                document.getElementById("Contenedor2").style.marginTop = 30 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 23 +"rem";
            }else if(numeroPad == 51){
                document.getElementById("Contenedor2").style.marginTop = 35 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 35 +"rem";
            }else if(numeroPad == 61){
                document.getElementById("Contenedor2").style.marginTop = 45 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 44 +"rem";
            }else if(numeroPad == 71){
                document.getElementById("Contenedor2").style.marginTop = 55 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 55 +"rem";
            }else if(numeroPad == 81){
                document.getElementById("Contenedor2").style.marginTop = 69 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 67 +"rem";
            }else if(numeroPad > 81){
                document.getElementById("Contenedor2").style.marginTop = 20 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 16 +"rem";   
            }          
            break
        case 'Palacio':
            document.getElementById("TituloLugar").innerHTML = "Palacio de Odín";
            document.getElementById("Contenedor2").title = "Palacio de Odín";
            document.getElementById("ImagenLugar").alt = "Palacio de Odín";
            document.getElementById("ImagenLugar").src = "imagenes/mundoAsgard.jpg";            
            document.getElementById("InformacionLugar").innerHTML = "Este palacio alberga a los dioses mas importantes de la mitología nórdica como Odín, Freyja o cualquiera de sus hijos. En la cima del palacio Odín tiene un gran trono en el que puede ver todo Asgard y conocer todo lo que pasa en los otros mundos debido a que Odín en este lugar recibe la información de los 9 reinos que le traen sus cuervos.";
            if(self.matchMedia("only screen and (max-device-width: 800px)").matches){
                document.getElementById("Contenedor2").style.marginTop = 95 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 112 +"rem";  

            }else if(numeroPad == 41){
                document.getElementById("Contenedor2").style.marginTop = 24 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 22+"rem";
            }else if(numeroPad == 51){
                document.getElementById("Contenedor2").style.marginTop = 30 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 34 +"rem";
            }else if(numeroPad == 61){
                document.getElementById("Contenedor2").style.marginTop = 38 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 45 +"rem";
            }else if(numeroPad == 71){
                document.getElementById("Contenedor2").style.marginTop = 50 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 56 +"rem";
            }else if(numeroPad == 81){
                document.getElementById("Contenedor2").style.marginTop = 63 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 67 +"rem";
            }else if(numeroPad > 81){
                document.getElementById("Contenedor2").style.marginTop = 15 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 16 +"rem";   
            }            
            break
        case 'Folkvangr':
            document.getElementById("ImagenLugar").src = "imagenes/lugarFolkvangr.jpg";            
            document.getElementById("InformacionLugar").innerHTML = "Es el lugar donde descansan todos los muertos de los 9 mundos que no merecieron ir al Valhalla pero tampoco tuvieron que pasar la eternidad en el reino de Helheim. Aquí todos los fallecidos trabajan para la diosa Freyja apoyándola con sus habilidades.";
            if(self.matchMedia("only screen and (max-device-width: 800px)").matches){
                document.getElementById("Contenedor2").style.marginTop = 140 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 160 +"rem";  

            }else if(numeroPad == 41){
                document.getElementById("Contenedor2").style.marginTop = 32 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 40 +"rem";
            }else if(numeroPad == 51){
                document.getElementById("Contenedor2").style.marginTop = 45 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 52 +"rem";
            }else if(numeroPad == 61){
                document.getElementById("Contenedor2").style.marginTop = 60 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 65 +"rem";
            }else if(numeroPad == 71){
                document.getElementById("Contenedor2").style.marginTop = 75 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 82 +"rem";
            }else if(numeroPad == 81){
                document.getElementById("Contenedor2").style.marginTop = 85 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 95 +"rem";
            }else if(numeroPad > 81){
                document.getElementById("Contenedor2").style.marginTop = 20 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 20 +"rem";   
            }             
            break
        case 'Franang':
            document.getElementById("ImagenLugar").src = "imagenes/lugarFranang.jpg";            
            document.getElementById("InformacionLugar").innerHTML = "Este lugar no es muy conocido en la mitología nórdica, pero aquí es donde Loki se escondió y fue torturado después de causar la muerte de Buldur, el hijo de Odín. Cuando Loki logra escapar de este lugar provoca la guerra de los 9 mundos conocida como el Raknarok.";
            if(self.matchMedia("only screen and (max-device-width: 800px)").matches){
                document.getElementById("Contenedor2").style.marginTop = 70 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 68 +"rem";  

            }else if(numeroPad == 41){
                document.getElementById("Contenedor2").style.marginTop = 10 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 10 +"rem";
            }else if(numeroPad == 51){
                document.getElementById("Contenedor2").style.marginTop = 15 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 15 +"rem";
            }else if(numeroPad == 61){
                document.getElementById("Contenedor2").style.marginTop = 25 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 23 +"rem";
            }else if(numeroPad == 71){
                document.getElementById("Contenedor2").style.marginTop = 30 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 30 +"rem";
            }else if(numeroPad == 81){
                document.getElementById("Contenedor2").style.marginTop = 35 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 37 +"rem";
            }else if(numeroPad > 81){
                document.getElementById("Contenedor2").style.marginTop = 12 +"rem";
                document.getElementById("Contenedor2").style.marginRight = 50 +"rem";
                document.getElementById("Contenedor2").style.marginBottom= 1 +"rem";
                document.getElementById("Contenedor2").style.marginLeft = 15 +"rem";   
            }            
            break
        }

}
function estabilizar(){
    if(self.innerWidth <= 800 && screen.width >= 800 && numeroPad < 91){
        document.getElementById("ReinoDeAsgard").style.padding = 91 +"%" + 110 +"%";
        document.getElementById("Bifrost").style.marginTop= -90 +"%";
        document.getElementById("Bifrost").style.marginLeft= 2.6 +"%";
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
    }else if(self.innerWidth > 800 && screen.width >= 800 && numeroPad > 81){
        document.getElementById("ReinoDeAsgard").style.padding = 81 +"%" + 97.8 +"%";
        document.getElementById("Bifrost").style.marginTop= -78 +"%";
        document.getElementById("Bifrost").style.marginLeft= 4.7 +"%";
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
    if(numeroPad != 81 && numeroPad != 131 ){
        document.getElementById("botonAumentarTamaño").style.backgroundImage = "url('imagenes/iconoAumentarTamaño.png')";
        document.getElementById("botonAumentarTamaño").style.cursor = "pointer";
    } 
    if(numeroPad != 41 && numeroPad != 91 ){
        document.getElementById("botonDisminuirTamaño").style.backgroundImage = "url('imagenes/iconoDisminuirTamaño.png')";
        document.getElementById("botonDisminuirTamaño").style.cursor = "pointer";
    }
}
function acercar(){
    if(numeroPad != 81 && numeroPad != 131 ){
        document.getElementById("Contenedor2").style.display = "none";
    }  
    if(numeroPad != 71 && numeroPad != 81 && numeroPad != 121 && numeroPad != 131 ){
        document.getElementById("botonAumentarTamaño").style.backgroundImage = "url('imagenes/iconoAumentarTamaño.png')";        
        document.getElementById("botonAumentarTamaño").style.cursor = "pointer";
    }else{
        document.getElementById("botonAumentarTamaño").style.backgroundImage = "url('imagenes/iconoAumentarTamañoInhabilitado.png')";
        document.getElementById("botonAumentarTamaño").style.cursor = "default";
    }
    document.getElementById("botonDisminuirTamaño").style.backgroundImage = "url('imagenes/iconoDisminuirTamaño.png')";
    switch(padTop){
        case "41%":
            document.getElementById("ReinoDeAsgard").style.padding = 51 +"%"+ 61.5 +"%";
            document.getElementById("Bifrost").style.marginTop= -50 +"%";
            document.getElementById("Bifrost").style.marginLeft= 1.9 +"%";
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
            document.getElementById("Bifrost").style.marginTop= -60 +"%";
            document.getElementById("Bifrost").style.marginLeft= 2.8 +"%";
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
            document.getElementById("Bifrost").style.marginTop= -68 +"%";
            document.getElementById("Bifrost").style.marginLeft= 3.7 +"%";
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
            document.getElementById("Bifrost").style.marginTop= -78 +"%";
            document.getElementById("Bifrost").style.marginLeft= 4.7 +"%";
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
            document.getElementById("Bifrost").style.marginTop= -98 +"%";
            document.getElementById("Bifrost").style.marginLeft= 3.5 +"%";
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
            document.getElementById("Bifrost").style.marginTop= -106 +"%";
            document.getElementById("Bifrost").style.marginLeft= 4.5 +"%";
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
            document.getElementById("Bifrost").style.marginTop= -115 +"%";
            document.getElementById("Bifrost").style.marginLeft= 5.5 +"%";
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
            document.getElementById("Bifrost").style.marginTop= -125 +"%";
            document.getElementById("Bifrost").style.marginLeft= 6.3 +"%";
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
    if(numeroPad != 41 && numeroPad !=  91 ){
        document.getElementById("Contenedor2").style.display = "none";        
    }
    if(numeroPad != 41 && numeroPad != 51 && numeroPad != 91 && numeroPad != 101 ){
        document.getElementById("botonDisminuirTamaño").style.backgroundImage = "url('imagenes/iconoDisminuirTamaño.png')";
        document.getElementById("botonDisminuirTamaño").style.cursor = "pointer";
    }else{
        document.getElementById("botonDisminuirTamaño").style.backgroundImage = "url('imagenes/iconoDisminuirTamañoInhabilitado.png')";
        document.getElementById("botonDisminuirTamaño").style.cursor = "default";
    }
    document.getElementById("botonAumentarTamaño").style.backgroundImage = "url('imagenes/iconoAumentarTamaño.png')";
    switch(padTop){        
        case "51%":
            document.getElementById("ReinoDeAsgard").style.padding = 41 +"%" + 50 +"%";
            document.getElementById("Bifrost").style.marginTop= -40 +"%";
            document.getElementById("Bifrost").style.marginLeft= 0.9 +"%";
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
            document.getElementById("Bifrost").style.marginTop= -50 +"%";
            document.getElementById("Bifrost").style.marginLeft= 1.9 +"%";
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
            document.getElementById("Bifrost").style.marginTop= -60 +"%";
            document.getElementById("Bifrost").style.marginLeft= 2.8 +"%";
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
            document.getElementById("Bifrost").style.marginTop= -68 +"%";
            document.getElementById("Bifrost").style.marginLeft= 3.7 +"%";
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
            document.getElementById("Bifrost").style.marginTop= -90 +"%";
            document.getElementById("Bifrost").style.marginLeft= 2.6 +"%";
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
            document.getElementById("Bifrost").style.marginTop= -98 +"%";
            document.getElementById("Bifrost").style.marginLeft= 3.5 +"%";
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
            document.getElementById("Bifrost").style.marginTop= -106 +"%";
            document.getElementById("Bifrost").style.marginLeft= 4.5 +"%";
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
            document.getElementById("Bifrost").style.marginTop= -115 +"%";
            document.getElementById("Bifrost").style.marginLeft= 5.5 +"%";
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