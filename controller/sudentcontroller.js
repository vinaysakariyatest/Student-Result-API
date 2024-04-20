var studentmodel=require('../model/studentmodel')


exports.add_result=async(req,res)=>{
    var data=await studentmodel.create(req.body)
    res.status(200).json({
        status:"Result Added",
        data
    })
}

// exports.update_result=async(req,res)=>{
//     var id=req.params.id
//     var guj=req.body.guj
//     var hindi=req.body.hindi
//     var maths=req.body.maths
//     var english=req.body.english

//     var total=guj+hindi+maths+english
//     var per=total/4
//     var data=await studentmodel.findByIdAndUpdate(id,req.body)
//     res.status(200).json({
//         status:"Result Updated",
//         data
//     })
// }

exports.update_result = async (req, res) => {
        var id = req.params.id;
        
        var guj = parseInt(req.body.guj)
        var hindi =parseInt(req.body.hindi)
        var maths =parseInt(req.body.maths) 
        var english =parseInt(req.body.english)

        // Calculate total and percentage
        var total = guj + hindi + maths + english;
        var per = total / 4;

        // Update req.body to include total and per
        req.body.total = total;
        req.body.per = per;

        // Update the student record in the database
        var data = await studentmodel.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json({
            status: "Result Updated",
            data
        });
};


exports.delete_result=async(req,res)=>{
    var id=req.params.id
    var data=await studentmodel.findByIdAndDelete(id)
    res.status(200).json({
        status:"Result Deleted",
    })
}