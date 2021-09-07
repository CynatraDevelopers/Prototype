const app=require('express').Router()
const data=require('../../data.json')

app.get('/:id',(req,res)=>{
    const user_id=req.params.id
    var all_ids=Object.keys(data)
    if(!all_ids.includes(user_id)){
        res.status(404).send("user not found")
    }
    res.send(data[user_id])
})
/* 
format of response 
{
    data:{
            name: string,
            email:string,
            following:Array
            followers:Array
            AOE: Array [Area of Experience]
            WE: Array [Work Expeirience]

    }
}
*/
module.exports=app


