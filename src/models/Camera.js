module.exports = (sequelize, DataTypes) => {
    const Camera = sequelize.define('Camera', {
        camera_name: DataTypes.STRING,
        camera_color: DataTypes.STRING,
        camera_brand: DataTypes.STRING,
        camera_price: DataTypes.STRING,
        camera_zoom: DataTypes.STRING
    })
    return Camera
}