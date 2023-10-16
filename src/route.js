const UserController = require('./controllers/UserController')
const CameraController = require('./controllers/CameraController')
const UserAuthenController = require('./controllers/UserAuthenController');
const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) => {
    app.post('/user', UserController.create)
    
    app.put('/user/:userId', UserController.put)
    
    app.delete('/user/:userId', UserController.remove)
    
    app.get('/user/:userId', UserController.show)
    
    app.get('/users', isAuthenController, UserController.index)

    //camera
    app.post('/camera',CameraController.create)
    
    app.put('/camera/:cameraId', CameraController.put)
    
    app.delete('/camera/:cameraId', CameraController.remove)
    
    app.get('/camera/:cameraId', CameraController.show)
    
    app.get('/camera', CameraController.index)

    //login
    app.post('/login', UserAuthenController.login)
}