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

//Primeiro texto
function corpoTitulo(){
    for(i=0;i<=1;i++){
        document.write(x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue);
    }
}
function corpotexto(){
    for(a=0;a<1;a++){
        document.write(
            "<tr>"+
                "<th>"+x[a].getElementsByTagName("textointro")[0].childNodes[0].nodeValue.substr(0,153)+"<a href='seil copy.html?codigo_postagem="+a+"'>...</a></th>"+
                "<th><img src='img/"+x[a].getElementsByTagName("imagemintro")[0].childNodes[0].nodeValue+"' id='img'></th>"+
            "</tr>"
    );
    }
}
function corpotexto1(){
    //Armazenar a URL completa, ex:http://127.0.0.1/pw1/Projeto-blog-2/postagem.html?codigo_postagem=1
    url = new URL(window.location.href)
    //Armazena somente o parâmetro da URL, ex:codigo_postagem=1
    parametro = url.searchParams;
    //Armazebar somente o valor do parâmetro da URL, ex: 1
    i = parametro.get("codigo_postagem");

    for(a=0;a<=1;a++){
        document.write(
            "<tr>"+
                "<th>"+x[a].getElementsByTagName("textointro")[0].childNodes[0].nodeValue+"<a href='index.html'>voltar</a></th>"+
                "<th><img src='img/"+x[a].getElementsByTagName("imagemintro")[0].childNodes[0].nodeValue+"' id='img'></th>"+
            "</tr>"
    );
    }
} 
//Fim do primeiro texto

//Inicio do containers
function container1(){
    for(b=0;b<=1;b++){
        document.write(
            "<tr>"+
                "<th><p class='f-6'>"+x[b].getElementsByTagName("container1")[0].childNodes[0].nodeValue.substr(0,145)+"<a href='seil.html?codigo_postagem="+b+"'>...</a></p>"+
                "</th>"+
                "<th><img src='img/"+x[b].getElementsByTagName("imagemind")[0].childNodes[0].nodeValue+"' id='img'></th>"+
            "</tr>"
    );
    }
}
function container1A(){
    //Armazenar a URL completa, ex:http://127.0.0.1/pw1/Projeto-blog-2/postagem.html?codigo_postagem=1
    url = new URL(window.location.href)
    //Armazena somente o parâmetro da URL, ex:codigo_postagem=1
    parametro = url.searchParams;
    //Armazebar somente o valor do parâmetro da URL, ex: 1
    i = parametro.get("codigo_postagem");

    for(b=0;b<=1;b++){
        document.write(
            "<tr>"+
                "<th><p class='f-6'>"+x[b].getElementsByTagName("container1")[0].childNodes[0].nodeValue+"<a href='index.html'>...</a></p>"+
                "</th>"+
                "<th><img src='img/"+x[b].getElementsByTagName("imagemind")[0].childNodes[0].nodeValue+"' id='img'></th>"+
            "</tr>"
    );
    }
} 
function container2(){
    for(c=0;c<=1;c++){
        document.write(
            "<tr>"+
                "<th><p class='f-6'>"+x[c].getElementsByTagName("container2")[0].childNodes[0].nodeValue.substr(0,140)+"<a href='seil.html?codigo_postagem="+b+"'>...</a></p>"+
                "</th>"+
                "<th><img src='img/"+x[c].getElementsByTagName("imagemino")[0].childNodes[0].nodeValue+"' id='img'></th>"+
            "</tr>"
    );
    }
}
function container2A(){
    //Armazenar a URL completa, ex:http://127.0.0.1/pw1/Projeto-blog-2/postagem.html?codigo_postagem=1
    url = new URL(window.location.href)
    //Armazena somente o parâmetro da URL, ex:codigo_postagem=1
    parametro = url.searchParams;
    //Armazebar somente o valor do parâmetro da URL, ex: 1
    i = parametro.get("codigo_postagem");

    for(c=0;c<=1;c++){
        document.write(
            "<tr>"+
                "<th><p class='f-6'>"+x[c].getElementsByTagName("container2")[0].childNodes[0].nodeValue+"<a href='index.html'>...</a></p>"+
                "</th>"+
                "<th><img src='img/"+x[c].getElementsByTagName("imagemino")[0].childNodes[0].nodeValue+"' id='img'></th>"+
            "</tr>"
    );
    }
} 
function container3(){
    for(d=0;d<=1;d++){
        document.write(
            "<tr>"+
                "<th><p class='f-6'>"+x[d].getElementsByTagName("container3")[0].childNodes[0].nodeValue.substr(0,130)+"<a href='seil.html?codigo_postagem="+d+"'>...</a></p>"+
                "</th>"+
                "<th><img src='img/"+x[d].getElementsByTagName("imageminf")[0].childNodes[0].nodeValue+"' id='img'></th>"+
            "</tr>"
    );
    }
}
function container3A(){
    //Armazenar a URL completa, ex:http://127.0.0.1/pw1/Projeto-blog-2/postagem.html?codigo_postagem=1
    url = new URL(window.location.href)
    //Armazena somente o parâmetro da URL, ex:codigo_postagem=1
    parametro = url.searchParams;
    //Armazebar somente o valor do parâmetro da URL, ex: 1
    i = parametro.get("codigo_postagem");

    for(d=0;d<=1;d++){
        document.write(
            "<tr>"+
                "<th><p class='f-6'>"+x[d].getElementsByTagName("container3")[0].childNodes[0].nodeValue+"<a href='index.html'>...</a></p>"+
                "</th>"+
                "<th><img src='img/"+x[d].getElementsByTagName("imageminf")[0].childNodes[0].nodeValue+"' id='img'></th>"+
            "</tr>"
    );
    }
} 
//Fim containers


function tituloobj(){
    for(e=0;e<=1;e++){
        document.write(
            "<p id='tittle'>"+x[e].getElementsByTagName("titulo-obj")[0].childNodes[0].nodeValue+"</p>"
        );
    }
}
function importanciaobj(){
    for(f=0;f<=1;f++){
        document.write(
            "<tr>"+
                "<th><p><b>"+x[f].getElementsByTagName("texto-obj")[0].childNodes[0].nodeValue.substr(0,60)+"<a href='seil2.html?codigo_postagem="+d+"'>...</a></b></p>"+
                "</th>"+
              "</tr>"
        );
    }
}
function obj(){
    //Armazenar a URL completa, ex:http://127.0.0.1/pw1/Projeto-blog-2/postagem.html?codigo_postagem=1
    url = new URL(window.location.href)
    //Armazena somente o parâmetro da URL, ex:codigo_postagem=1
    parametro = url.searchParams;
    //Armazebar somente o valor do parâmetro da URL, ex: 1
    i = parametro.get("codigo_postagem");

    for(f=0;f<=1;f++){
        document.write(
            "<tr>"+
                "<th><p id='seila'><b>"+x[f].getElementsByTagName("texto-obj")[0].childNodes[0].nodeValue+"<a href='index.html'>...</a></b></p>"+
                "</th>"+
              "</tr>"
        );
    }
} 
function M_1(){
    for(g=0;g<=1;g++){
        document.write(
            "<b>"+x[g].getElementsByTagName("meta9-1")[0].childNodes[0].nodeValue+"</b>"
        );
    }
}

function textoG_1(){
    for(h=0;h<=1;h++){
        document.write(
            "<b><br>"+x[h].getElementsByTagName("meta-9-ti")[0].childNodes[0].nodeValue+"<br>"+ x[h].getElementsByTagName("meta-9-nacoes")[0].childNodes[0].nodeValue+"<br>"+x[h].getElementsByTagName("meta-9-bra")[0].childNodes[0].nodeValue+"<br>"+x[h].getElementsByTagName("meta-9-bratext")[0].childNodes[0].nodeValue+"</b><br>");
    }
}

function M_2(){
    for(i=0;i<=1;i++){
        document.write(
           "<b>"+ x[i].getElementsByTagName("TM2")[0].childNodes[0].nodeValue+"</b>");
    }
}

function textoG_2(){
    for(j=0;j<=1;j++){
        document.write(
            "<b><br>"+x[j].getElementsByTagName("meta-2-t")[0].childNodes[0].nodeValue+"<br>"+ x[j].getElementsByTagName("meta9-2-n")[0].childNodes[0].nodeValue+"<br>"+x[j].getElementsByTagName("meta9-2-bra")[0].childNodes[0].nodeValue+"<br>"+x[j].getElementsByTagName("meta9-2-bratext")[0].childNodes[0].nodeValue+"</b><br>");
    }
}

function M_3(){
    for(i=0;i<=1;i++){
        document.write(
           "<b>"+ x[i].getElementsByTagName("TM3")[0].childNodes[0].nodeValue+"</b>");
    }
}

function textoG_3(){
    for(j=0;j<=1;j++){
        document.write(
            "<b><br>"+x[j].getElementsByTagName("meta-3-t")[0].childNodes[0].nodeValue+"<br>"+ x[j].getElementsByTagName("meta9-3-n")[0].childNodes[0].nodeValue+"<br>"+x[j].getElementsByTagName("meta9-3-bra")[0].childNodes[0].nodeValue+"<br>"+x[j].getElementsByTagName("meta9-3-bratext")[0].childNodes[0].nodeValue+"</b><br>");
    }
}

function M_4(){
    for(i=0;i<=1;i++){
        document.write(
           "<b>"+ x[i].getElementsByTagName("TM4")[0].childNodes[0].nodeValue+"</b>");
    }
}

function textoG_4(){
    for(j=0;j<=1;j++){
        document.write(
            "<b><br>"+x[j].getElementsByTagName("meta-4-t")[0].childNodes[0].nodeValue+"<br>"+ x[j].getElementsByTagName("meta9-4-n")[0].childNodes[0].nodeValue+"<br>"+x[j].getElementsByTagName("meta9-4-bra")[0].childNodes[0].nodeValue+"<br>"+x[j].getElementsByTagName("meta9-4-bratext")[0].childNodes[0].nodeValue+"</b><br>");
    }
}
function M_5(){
    for(i=0;i<=1;i++){
        document.write(
           "<b>"+ x[i].getElementsByTagName("TM5")[0].childNodes[0].nodeValue+"</b>");
    }
}

function textoG_5(){
    for(j=0;j<=1;j++){
        document.write(
            "<b><br>"+x[j].getElementsByTagName("meta-5-t")[0].childNodes[0].nodeValue+"<br>"+ x[j].getElementsByTagName("meta9-5-n")[0].childNodes[0].nodeValue+"<br>"+x[j].getElementsByTagName("meta9-5-bra")[0].childNodes[0].nodeValue+"<br>"+x[j].getElementsByTagName("meta9-5-bratext")[0].childNodes[0].nodeValue+"</b><br>");
    }
}

function M_A(){
    for(i=0;i<=1;i++){
        document.write(
           "<b>"+ x[i].getElementsByTagName("TMA")[0].childNodes[0].nodeValue+"</b>");
    }
}

function textoG_A(){
    for(j=0;j<=1;j++){
        document.write(
            "<b> <br>"+x[j].getElementsByTagName("meta-A-t")[0].childNodes[0].nodeValue+"<br>"+ x[j].getElementsByTagName("meta9-A-n")[0].childNodes[0].nodeValue+"<br>"+x[j].getElementsByTagName("meta9-A-bra")[0].childNodes[0].nodeValue+"<br>"+x[j].getElementsByTagName("meta9-A-bratext")[0].childNodes[0].nodeValue+"</b><br>");
    }
}

function M_B(){
    for(i=0;i<=1;i++){
        document.write(
           "<b>"+ x[i].getElementsByTagName("TMB")[0].childNodes[0].nodeValue+"</b>");
    }
}

function textoG_B(){
    for(j=0;j<=1;j++){
        document.write(
            "<b> <br>"+x[j].getElementsByTagName("meta-B-t")[0].childNodes[0].nodeValue+"<br>"+ x[j].getElementsByTagName("meta9-B-n")[0].childNodes[0].nodeValue+"<br>"+x[j].getElementsByTagName("meta9-B-bra")[0].childNodes[0].nodeValue+"<br>"+x[j].getElementsByTagName("meta9-B-bratext")[0].childNodes[0].nodeValue+"</b><br>");
    }
}

function M_C(){
    for(i=0;i<=1;i++){
        document.write(
           "<b>"+ x[i].getElementsByTagName("TMC")[0].childNodes[0].nodeValue+"</b>");
    }
}

function textoG_C(){
    for(j=0;j<=1;j++){
        document.write(
            "<b> <br>"+x[j].getElementsByTagName("meta-C-t")[0].childNodes[0].nodeValue+"<br>"+ x[j].getElementsByTagName("meta9-C-n")[0].childNodes[0].nodeValue+"<br>"+x[j].getElementsByTagName("meta9-C-bra")[0].childNodes[0].nodeValue+"<br>"+x[j].getElementsByTagName("meta9-C-bratext")[0].childNodes[0].nodeValue+"</b><br>");
    }
}

function TituloB(){
    for(i=0;i<=1;i++){
        document.write("<p id='tittle'>"+x[i].getElementsByTagName("T_B")[0].childNodes[0].nodeValue+"</p>");
    }
}

function ImgB(){
    for(a=0;a<=1;a++){
        document.write(
            "<tr>"+
                "<th> <p>"+x[a].getElementsByTagName("TXT_B")[0].childNodes[0].nodeValue.substr(0,50)+"<a href='seil3.html?codigo_postagem="+d+"'>...</a></p></th>"+
                "<th><img src='img/"+x[a].getElementsByTagName("Img_B")[0].childNodes[0].nodeValue+"' id='img'></th>"+
            "</tr>"
    );
    }
}
function imgB2(){
    //Armazenar a URL completa, ex:http://127.0.0.1/pw1/Projeto-blog-2/postagem.html?codigo_postagem=1
    url = new URL(window.location.href)
    //Armazena somente o parâmetro da URL, ex:codigo_postagem=1
    parametro = url.searchParams;
    //Armazebar somente o valor do parâmetro da URL, ex: 1
    i = parametro.get("codigo_postagem");

    for(a=0;a<=1;a++){
        document.write(
            "<tr>"+
                "<th> <p id='seila'>"+x[a].getElementsByTagName("TXT_B")[0].childNodes[0].nodeValue+"<a href='index.html'>...</a></p></th>"+
                "<th><img src='img/"+x[a].getElementsByTagName("Img_B")[0].childNodes[0].nodeValue+"' id='img'></th>"+
            "</tr>"
    );
    }
} 
function graf(){
    for(a=0;a<=1;a++){
        document.write("<center> <img src='img/" + x[a].getElementsByTagName("img_graf")[0].childNodes[0].nodeValue+"' class='img-fluid my-5'></img><br> </center>");
    }
}

function T_M(){
    for(i=0;i<=1;i++){
        document.write("<p id='tittle'>"+x[i].getElementsByTagName("M")[0].childNodes[0].nodeValue+"</p>" + "<b><p id='seila'> "+ x[i].getElementsByTagName("T-M")[0].childNodes[0].nodeValue.substr(0,118)+"<a href='seil4.html?codigo_postagem="+d+"'>...</a></b></p>"+"<center> <img src='img/"+x[i].getElementsByTagName("IMG_Rank")[0].childNodes[0].nodeValue +"' class='img-fluid my-5'>  </center>");
    }
}
function AAA(){
    //Armazenar a URL completa, ex:http://127.0.0.1/pw1/Projeto-blog-2/postagem.html?codigo_postagem=1
    url = new URL(window.location.href)
    //Armazena somente o parâmetro da URL, ex:codigo_postagem=1
    parametro = url.searchParams;
    //Armazebar somente o valor do parâmetro da URL, ex: 1
    i = parametro.get("codigo_postagem");

    for(i=0;i<=1;i++){
        document.write("<p id='tittle'>"+x[i].getElementsByTagName("M")[0].childNodes[0].nodeValue+"</p>" + "<b><p id='seila'> "+ x[i].getElementsByTagName("T-M")[0].childNodes[0].nodeValue+"<a href='index.html'>...</a></b></p>"+"<center> <img src='img/"+x[i].getElementsByTagName("IMG_Rank")[0].childNodes[0].nodeValue +"' class='img-fluid my-5'>  </center>");
    }
} 
function Outro_Lado(){
    for(i=0;i<=1;i++){
        document.write("<p id='tittle'>"+x[i].getElementsByTagName("moeda")[0].childNodes[0].nodeValue+"<divclass='table-responsive'id='seila'><table class='table-borderless'>"+
            "<tr>"+
              "<th><p id='seila'>"+x[i].getElementsByTagName("T_moeda")[0].childNodes[0].nodeValue.substr(0,30)+"<a href='seil5.html?codigo_postagem="+d+"'>...</a></p></th>"+"<th><img src='img/"+x[i].getElementsByTagName("img_moeda")[0].childNodes[0].nodeValue+"'id='img'></th>"+
              "</tr>"+"</table>"

              +"<divclass='table-responsive p-1><table class='table-borderless'>"+
          "<tr>"+
            "<th class='text-fluid'><p id='seila'>"+x[i].getElementsByTagName("T2_moeda")[0].childNodes[0].nodeValue.substr(0,30)+"<a href='seil5.html?codigo_postagem="+d+"'>...</a></p></th>"+"<th><img src='img/"+x[i].getElementsByTagName("img2_moeda")[0].childNodes[0].nodeValue+"' id='img'></th>"+
            "</tr>"+
        "</table>");
    }
}
function img(){
    //Armazenar a URL completa, ex:http://127.0.0.1/pw1/Projeto-blog-2/postagem.html?codigo_postagem=1
    url = new URL(window.location.href)
    //Armazena somente o parâmetro da URL, ex:codigo_postagem=1
    parametro = url.searchParams;
    //Armazebar somente o valor do parâmetro da URL, ex: 1
    i = parametro.get("codigo_postagem");

     for(i=0;i<=1;i++){
        document.write("<p id='tittle'>"+x[i].getElementsByTagName("moeda")[0].childNodes[0].nodeValue+"<divclass='table-responsive'id='seila'><table class='table-borderless'>"+
            "<tr>"+
              "<th><p id='seila'>"+x[i].getElementsByTagName("T_moeda")[0].childNodes[0].nodeValue +"<a href='index.html'>...</a></p></th>"+"<th><img src='img/"+x[i].getElementsByTagName("img_moeda")[0].childNodes[0].nodeValue+"'id='img'></th>"+
              "</tr>"+"</table>"

              +"<divclass='table-responsive p-1><table class='table-borderless'>"+
          "<tr>"+
            "<th class='text-fluid'><p id='seila'>"+x[i].getElementsByTagName("T2_moeda")[0].childNodes[0].nodeValue +"<a href='index.html'>...</a></p></th>"+"<th><img src='img/"+x[i].getElementsByTagName("img2_moeda")[0].childNodes[0].nodeValue+"' id='img'></th>"+
            "</tr>"+
        "</table>");
    }
} 
function rodape(){
    for(i=0;i<=1;i++){
        document.write("<img src='img/"+x[i].getElementsByTagName("imagem-rodape")[0].childNodes[0].nodeValue+"' class='img-fluid'>");
    }
}

function titulo12(){
    for(i=0;i<1;i++){
        document.write("<h1 id='tittle'>"+x[i].getElementsByTagName("titulo-1")[0].childNodes[0].nodeValue+"</h1>");
    }
}
//AAAAAAAAAAAAAAAAAAA
function funcaoConteudo(){
    for(i=1;i<4;i++){     
        document.write(
                "<h1 id='tittle1'>"+x[i].getElementsByTagName("titulo1")[0].childNodes[0].nodeValue+"</h1>"+
                "<p class='f-6'><b>"+x[i].getElementsByTagName("corpo1")[0].childNodes[0].nodeValue.substr(0,500)+"<a href='postagem.html?codigo_postagem="+i+"'>...</a></b></p>"
        );

    }            
}
function funcaoPostagem(){
    //Armazenar a URL completa, ex:http://127.0.0.1/pw1/Projeto-blog-2/postagem.html?codigo_postagem=1
    url = new URL(window.location.href)
    //Armazena somente o parâmetro da URL, ex:codigo_postagem=1
    parametro = url.searchParams;
    //Armazebar somente o valor do parâmetro da URL, ex: 1
    i = parametro.get("codigo_postagem");
         
        document.write(
                "<h1 id='tittle1'>"+x[i].getElementsByTagName("titulo1")[0].childNodes[0].nodeValue+"</h1>"+
                "<p class='f-6'><b>"+x[i].getElementsByTagName("corpo1")[0].childNodes[0].nodeValue+"</b></p>"
        );
}            