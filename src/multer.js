const multer = require('multer')

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        return cb(null, './src/public')
    },
    filename: function(rec, file, cb){
        let nome_sem_espacos = file.originalname. trim()
        let nome_nomeArray = nome_sem_espacos.split(' ')
        let nome_com_underline = nome_nomeArray.join("_")
        return cb(null, `${Date.now()}_${file.nome_com_underline}`)
    }

})

let upload = ({ storage })
module.exports = upload
