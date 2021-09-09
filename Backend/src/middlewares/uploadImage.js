const multer = require('multer');

module.exports = (multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './public/upload/books')
        },
        filename: (req, file, cb) => {
            cb(null, "_" + file.originalname)
        }
    }), 
    fileFilter: (req, file, cb) => {
        const extensaoImg = ['image/png', 'image/jpeg', 'image/jpg'].find(formatoAceito => formatoAceito == file.mimetype);
        if(extensaoImg) {
            return cb(null, true)
        }
        return cb (null, false)
    }
}))