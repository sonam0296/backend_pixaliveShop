const brands = require('../models/brands')
// const brand = require('../models/brands')


exports.addBrands = async (req, res) => {
    try {
        const data = req.body
        const brands = await brands.create({
            data
        })
        if (!brands) {
            res.status(400).json({ message: 'cannot add brand' })
            return;
        }
        await brands.save()
        res.status(200).json({ message: "barnds added ,awating for approval", brands })

    } catch (err) {
        res.status(500).json({ message: "something went wrong", err })
    }
}


// exports.Approved = async (req, res) => {
//     try {
//         console.log(req)
//         let data = req.body['approval']
//         const approval = await brand.findByIdAndUpdate( req.query.id , {
//             data
//         }, {
//             new: true
//         })
//         if (!approval) {
//             res.status(400).json({ message: "cannot approve brands" })
//             return;
//         }
//         res.status(200).json({ message: "barnds approved" })

//     } catch (err) {
//         res.status(500).json({ message: "something went wrong" })
//     }
// }

exports.Approved = async (req, res) => {
    try {
        let data = req.body
        const updateCategory = await brands.findByIdAndUpdate(req.params.id, {
            data
        }, {
            new: true
        })
        if (!updateCategory) {
            res.status(400).json({ message: "not able to update category" })
            return;
        }
        res.status(200).json({ message: "update sucessfully", updateCategory })
    }
    catch (err) {
        res.status(400).json({ message: "Something went wrong", err });
        console.log(err)
    }
}

exports.getAllBrands = async (req, res) => {
    try {
        const getBrand = await brands.find()
        if (!getBrand) {
            res.status(400).json({ message: "no brands found" })
            return;
        }
        res.status(200).json({ message: "brand details found", getBrand })

    } catch (err) {
        res.status(500).json({ message: "something went Wrog !" })
    }
}

exports.deleteBrand = async (req, res) => {
    try {
        const deleteBrands = await brands.findByIdAndDelete(req.params.id)
        if (!deleteBrands) {
            res.status(400).json({ message: "brand data notfound" })
            return;
        }
        res.status(200).json({ message: "BrandsDelete Sucessfully" })
    } catch (err) {

    }
}