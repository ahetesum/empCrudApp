
exports.home=(req,res,next)=>{

    try
    {
        console.log('Here is dashboard home')
        //const rewards= await  getAllBrandCategory();
        res.status(200).send({
           message: "This response is from Dashboard"
        });
    }
    catch(err)
    {
        res.status(400).send({
            message: 'Cant process request'
        });
    }
}