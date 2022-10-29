//cria uma variável para manipular um aquivo XML
xmlhttp= new XMLHttpRequest();
//lê um determinado arquivo xml no diretório do projeto
xmlhttp.open("GET","xml/conteudo.xml",false);
//envia o arquivo aberto para a leitura
xmlhttp.send();
//envia uma resposta do tipo XML
xmlDoc= xmlhttp.responseXML;
//cria um array a partir da quantidade de postagens
x = xmlDoc.getElementsByTagName("corpo");

function corpoTitulo(){
    for(i=0;i<=1;i++){
        document.write(x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue);
    }
}
function corpotexto(){
    for(i=0;i<=1;i++){
        document.write(
            "<tr>"+
                "<th>"+x[i].getElementsByTagName("textointro")[0].childNodes[0].nodeValue+"</th>"+
                "<th><img src='img/"+x[i].getElementsByTagName("imagemintro")[0].childNodes[0].nodeValue+"' id='img'></th>"+
            "</tr>"
    );
    }
}
function container1(){
    for(u=0;u<=1;u++){
        document.write(
            "<tr>"+
                "<th><p class='f-6'>"+x[u].getElementsByTagName("container1")[0].childNodes[0].nodeValue+"</p>"+
                "</th>"+
                "<th><img src='img/"+x[u].getElementsByTagName("imagemind")[0].childNodes[0].nodeValue+"' id='img'></th>"+
            "</tr>"
    );
    }
}
function container2(){
    for(u=0;u<=1;u++){
        document.write(
            "<tr>"+
                "<th><p class='f-6'>"+x[u].getElementsByTagName("container2")[0].childNodes[0].nodeValue+"</p>"+
                "</th>"+
                "<th><img src='img/"+x[u].getElementsByTagName("imagemino")[0].childNodes[0].nodeValue+"' id='img'></th>"+
            "</tr>"
    );
    }
}
function container3(){
    for(u=0;u<=1;u++){
        document.write(
            "<tr>"+
                "<th><p class='f-6'>"+x[u].getElementsByTagName("container3")[0].childNodes[0].nodeValue+"</p>"+
                "</th>"+
                "<th><img src='img/"+x[u].getElementsByTagName("imageminf")[0].childNodes[0].nodeValue+"' id='img'></th>"+
            "</tr>"
    );
    }
}
function tituloobj(){
    for(a=0;a<=1;a++){
        document.write(
            "<p id='tittle'>"+x[a].getElementsByTagName("titulo-obj")[0].childNodes[0].nodeValue+"</p>"
        );
    }
}
function importanciaobj(){
    for(b=0;b<=1;b++){
        document.write(
            "<tr>"+
                "<th><p class='f-6'><b>"+x[b].getElementsByTagName("texto-obj")[0].childNodes[0].nodeValue+"</b></p>"+
                "</th>"+
              "</tr>"
        );
    }
}
function meta9_1(){
    for(o=0;o<=1;o++){
        document.write(
            "<b>"+x[o].getElementsByTagName("meta9-1")[0].childNodes[0].nodeValue+"</b>"
        );
    }
}
function meta9_1(){
    for(o=0;o<=1;o++){
        document.write(
            "<b>"+x[o].getElementsByTagName("meta-9-ti")[0].childNodes[0].nodeValue+"</b>"
        );
    }
}