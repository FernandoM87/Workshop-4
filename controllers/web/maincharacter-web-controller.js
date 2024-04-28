const Maincharacter = require('../../models/maincharacter-model')

module.exports = {

    //Show all
    showAll: async (req, res) => {
        try {
            const maincharacter = await Maincharacter.find().lean();
            res.render("maincharacter/index", { maincharacter })

        } catch (error) {
            res.render("error", { message:error.message })
        }
    },

    //Show one
    showOne: async (req, res) => {
        try {
            const maincharacter = await Maincharacter.findById(req.params.id);
            res.render("maincharacter/single", maincharacter)

        } catch (error) {
            res.render("error", { message:error.message })
        }
    },

    //Show create form
    //Create ingredient
    //Show edit form
    //Update ingredient
    //Delete ingredient
}