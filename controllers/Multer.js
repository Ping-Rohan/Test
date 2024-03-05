const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, './uploads')); // Use path.join to resolve the absolute path
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random());
        const filename = file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1];
        cb(null, filename); // Pass the filename to cb
    }
});

const upload = multer({ storage: storage });

module.exports = { upload };
