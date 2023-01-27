max=0;


function localizarmayor(){

    matriz=new Array(3,6,2,56,32,5,99,32,55,34)

    for(i=0;i<10;i++)
    if(matriz[i]>max){max=matriz[i]}
    mayor.innerHTML=max
}
