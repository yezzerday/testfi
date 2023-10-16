module.exports = (sequelize, DataTypes) => {
    const Camera = sequelize.define('Camera', {
        camera_name: DataTypes.STRING,
        camera: DataTypes.STRING,
        camera_soup: DataTypes.STRING,
        camera_topping: DataTypes.STRING,
        vegatable: DataTypes.STRING
    })
    return Camera
}