const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

usersRouter.post('/', async (request, response) => {
  const { username, password } = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    passwordHash,
    history: [],
    wishlist: [],
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

usersRouter.get('/', async (request, response) => {
    const users = await User.find({});
    response.json(users)
})

usersRouter.delete('/', async (request, response) => {
    const users = await User.deleteMany({})
    response.json(users)
})

usersRouter.delete('/:id', async (request, response) => {
    const user = await User.findByIdAndRemove(request.params.id)
    response.json(user)
})

module.exports = usersRouter