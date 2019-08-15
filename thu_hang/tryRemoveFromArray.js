function findElement(array, index) {
    if(index > array.length){
        return -1
    }else{
        return 1;
    }
}
function tryRemoveFormArray(array, index) {
    var find = findElement(array, index);
     if(find == -1){
         alert("khong tim thay vi tri can xoa.")
         for(var i = 0;i<array.length;i++){
             document.write(array[i]+"&nbsp");
         }
     }else{
         for(var i = index; i<array.length;i++){
             array[i] = array[i+1];
         }
         array.length--;
         for(var i = 0; i<array.length;i++){
             document.write(+array[i]+"&nbsp");
     }
     }
}