const {router, Router}= require('express')
const routes = new Router()

routes.get('/',(req,res)=>{
  return res.json({message:"hello World"})
})
module.exports = routes