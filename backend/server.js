import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import bcrypt from "bcrypt-nodejs"

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())
mongoose.connect("mongodb://localhost/bjj-site", { useMongoClient: true })

// This makes mongo use ES6 promises, instead of its own implementation
mongoose.Promise = Promise

// Log when mongo connects, or encounters errors when trying to connect.
mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

const Admin = mongoose.model("Admin", {
  username: { type: String, required: true },
  password: { type: String, required: true }
})

const Suggestion = mongoose.model("Suggestion", {
  title: { type: String, required: true },
  category: { type: String, required: true },
  tags: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: () => { Date.now() } }
})

const Userform = mongoose.model("Userform", {
  subject: { type: String, required: true },
  message: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true }
})

app.get("/suggestion", (req, res) => {
  Suggestion.find().sort("date").then(newSuggestion => {
    res.json(newSuggestion)
  })
})

app.post("/admin", (req, res) => {
  const { username } = req.body
  const password = bcrypt.hashSync(req.body.password)
  const admin = new Admin({ username, password })

  admin.save()
    .then(() => { res.status(201).send("user created") })
    .catch(err => { res.status(400).send(err) })
})

app.post("/suggestion", (req, res) => {
  const {
    title, category, tags, link, description
  } = req.body
  const suggestion = new Suggestion({
    title, category, tags, link, description
  })

  suggestion.save()
    .then(() => { res.status(201).json({ created: true }) })
    .catch(err => { res.status(400).send(err.message) })
})

app.delete("/suggestion", (req, res) => {
  console.log(req.body.suggestionId)
  Suggestion.deleteOne({ _id: req.body.suggestionId }, err => {
    if (err) {
      res.status(400)
    } else {
      res.status(200)
    }
  })
})

app.post("/userform", (req, res) => {
  const {
    subject, message, name, email
  } = req.body
  const userform = new Userform({
    subject, message, name, email
  })

  userform.save()
    .then(() => { res.status(201).json({ created: true }) })
    .catch(err => { res.status(400).send(err.message) })
})

app.listen(8080, () => console.log("BJJ site listening on port 8080"))
