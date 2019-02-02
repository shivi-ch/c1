var solution = document.getElementById("solution");
var targetValue1 = document.getElementById("targetValue");
var array1 = document.getElementById("array");


a=[9,6,1,4,5,3,7,8,11,10,2]
targetValue=1
var result = [] 
resultSet()
solution.textContent = result
targetValue1.textContent = targetValue
array1.textContent = '[ ' + a + ' ]'


function resultSet(){
    for(var i=0;i<a.length;i++){
        var z = 0
        console.log(a.length)
        z = a[i] + targetValue

        var found = a.find(function(element) {
            return element == z;
          });
        if(found != undefined){
            result.push('('+ found + ',' + a[i]+')')
        }
        console.log('y')
    }
}
