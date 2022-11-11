export default function(num){
    function decrease(){
        num.value --;
        if(num === 0 && confirm('要删除吗？')){
            
        }
    }
    function increase(){
        num.value ++;
    }  

    return{
        decrease,
        increase
    }
}