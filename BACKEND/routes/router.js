const express = require("express")
const router = express.Router()
const users = require("../models/ProjectShema")
const CLIENT = require("../models/ClientSchema")
const CONTACT = require("../models/ContactSchema")
const emailling = require("../models/EmailSchema")

router.get("/basic_testing", async (req, res) => {
    try {
        console.log("working");
        res.status(201).json("successfull");
    } catch (error) {
        res.status(404).json(error)
    }
})


router.post("/OUR_PROJECTS", async (req, res) => {
    const { name, image, discription, readmore } = req.body
    try {
        if (!name || !image || !discription) {
            res.status(403).send("plz fill the form")
        }else{
            const OUR_PROJECT = await users.findOne({ name: name })
            console.log(OUR_PROJECT)
            if (OUR_PROJECT) {
                res.status(404).send("already exist")
            }
            else {
                const AddNewUser = new users({
                    name, image, discription, readmore
                })
                await AddNewUser.save()
                console.log(AddNewUser)
                console.log(req.body);
                res.send("save successfully")
            }
        }
      
        
    } catch (error) {
        res.status(404).json(error)
    }
})

router.get("/OUR_PROJECTS", async (req, res) => {
    try {
        const user = await users.find();
        res.status(201).json(user)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.post("/HAPPY_CLIENT", async (req, res) => {
    const { name, image, discription, readmore } = req.body
    try {
        if (!name || !image || !discription) {
            res.status(403).send("plz fill the form")
        }else{
            const OUR_PROJECT = await CLIENT.findOne({ name: name })
            console.log(OUR_PROJECT)
            if (OUR_PROJECT) {
                res.status(404).send("already exist")
            }
            else {
                const AddNewCLIENT = new CLIENT({
                    name, image, discription, readmore
                })
                await AddNewCLIENT.save()
                console.log(AddNewCLIENT)
                console.log(req.body);
                res.send("save successfully")
            }
        }
      
        
    } catch (error) {
        res.status(404).json(error)
    }
})

router.get("/HAPPY_CLIENT", async (req, res) => {
    try {
        const CLIENTS = await CLIENT.find();
        res.status(201).json(CLIENTS)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.post("/CONTACT", async (req, res) => {
    const { name, email, mobile, city } = req.body
    try {
        if (!name || !email || !mobile) {
            res.status(403).send("plz fill the form")
        }else{
            const out_contact = await CONTACT.findOne({ name: name })
            if (out_contact) {
                res.status(404).send("already exist")
                console.log(out_contact)
            }
            else {
                const AddNewContact = new CONTACT({
                    name, email, mobile, city 
                })
                await AddNewContact.save()
                console.log(AddNewContact)
                console.log(req.body);
                res.send("save successfully")
            }
        }
      
        
    } catch (error) {
        res.status(404).json(error)
    }
})

router.get("/CONTACT", async (req, res) => {
    try {
        const CONTACTs = await CONTACT.find();
        res.status(201).json(CONTACTs)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.post("/Email", async (req, res) => {
    const { email } = req.body
    try {
        if (!email) {
            res.status(403).send("plz fill the form")
        }else{
            const out_contact = await emailling.findOne({ email : email })
            if (out_contact) {
                res.status(404).send("already exist")
                console.log(out_contact)
            }
            else {
                const AddNewEMAIL = new emailling({
                   email
                })
                await AddNewEMAIL.save()
                console.log(AddNewEMAIL)
                console.log(req.body);
                res.send("save successfully")
            }
        }
      
        
    } catch (error) {
        res.status(404).json(error)
    }
})

router.get("/Email", async (req, res) => {
    try {
        const eMAILS = await emailling.find();
        res.status(201).json(eMAILS)
    } catch (error) {
        res.status(404).json(error)
    }
})





module.exports = router;