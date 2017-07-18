function log(element,index){
  console.log(`${index}: ${element}`)
}

function iterativeLog(array){
  array.forEach(log)
}

function iterate(callback){
  let array = [1]
  array.forEach(callback)
  return array
}

function doToArray(array,callback){
  array.forEach(callback)
}
