var ids = []
module.exports = {
  createId: function () {
   var num =  Math.floor(Math.random() * 99999);
   ids.push(num)
   return num
}
}