const multer = require("multer")
const path = require("path")
const fs = require("fs")

// Create the upload directory if it doesn't exist
const uploadDirectory = path.join(process.cwd(), '/public/uploads');
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectory)
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = new Date().getTime() + '-' + Math.round(Math.random() & 1e9)
        // Remove the file extension
        const originalnameWithoutExt = path.parse(file.originalname).name;
        cb(null, originalnameWithoutExt + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})

const fileFilter = (req, file, cb) => {
    if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('File type not supported. Please upload a JPEG, JPG, or PNG image.'), false);
    }
}


const upload = multer({ storage, limits: { files: 5 }, fileFilter })

module.exports = {
    upload
};
