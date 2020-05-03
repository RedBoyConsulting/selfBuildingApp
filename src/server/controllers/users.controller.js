const user = require('../models/users')
const userCtrl = {}

userCtrl.getUsers = async ('/', (req, res) => {
  const users =  await user.find()
  res.json(users)
})

userCtrl.createUser = async (req, res) => {
  const user = new user(req.body)
  await user.save()
  res.json({
    'status': 'User saved'
  })
}

userCtrl.getUser = async (req, res) => {
  const user = await user.findById(req.params.id)
  res.json({ user })
}

userCtrl.editUser = async (req, res) => {
  const { id } = req.params
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userType: req.body.userType,
    userPwd: req.body.userPwd
  }
  await user.findByIdAndUpdate(id, {$set: user}, {new: true})
  res.json({status:'User Updated'})
}

userCtrl.deleteUser = function () {
  await user.findByIdAndRemove(req.params.id)
  res.json({status:'User Deleted'})
}

module.exports = userCrtl