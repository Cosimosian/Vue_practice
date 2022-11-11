export default function(num){
    function decrease(){
        num.value --;
    }
    function increase(){
        num.value ++;
    }  

    return{
        decrease,
        increase
    }
}