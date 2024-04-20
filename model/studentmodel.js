var admin=require('../controller/sudentcontroller')
var mongoose=require('mongoose')

var resultshema=new mongoose.Schema({
    rno:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    guj:{
        type:Number,
        required:true,
    },
    hindi:{
        type:Number,
        required:true, 
    },
    maths:{
        type:Number,
        required:true, 
    },
    english:{
        type:Number,
        required:true, 
    },
    total:{
        type:Number,
    },
    per:{
        type:Number,
    }
})

resultshema.pre('save', function(next) {
    const guj = parseInt(this.guj);
    const hindi = parseInt(this.hindi);
    const maths = parseInt(this.maths);
    const english = parseInt(this.english);

    
    this.total =guj + hindi + maths + english;
    this.per = parseFloat((guj + hindi + maths + english) / 4).toFixed(2);

    next();
});

module.exports=mongoose.model("result",resultshema)