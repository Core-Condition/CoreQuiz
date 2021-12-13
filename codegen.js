const ids = []
module.exports = {
  createId: function () {
   const num =  Math.floor(Math.random() * 99999);
   ids.push(num)
   return num
}
}