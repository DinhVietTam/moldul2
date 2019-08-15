function findMinScore(arrayd){
    var min = arrayd[0];
    for(i=1; i< arrayd.length; i++){
        if(arrayd[i] < min){
            min =arrayd[i];
        }else{
            min = min;
        }
    }
    return min;
}