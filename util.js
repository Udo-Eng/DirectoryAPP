
const validateInput =  (schema) => (req,res,next) => {
    try{

      const {error} = schema.validate(req.body);

      if(error) return res.status(400).send(error.details[0].message);

      next();

    }catch(err){
        res.status(400).json({
            err : err.message,
            message : "Users input was invalid ",
        });
    }
}


module.exports = validateInput;