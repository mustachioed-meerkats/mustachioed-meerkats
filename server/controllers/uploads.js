const s3 = require('../middleware/s3.js').s3;

module.exports.upload = (req, res) => {

  let filename = req.files[0].originalname.split('.')[0];
  let key = filename + '_' + Date.now().toString();
  let region = 'us-west-1';
  let bucket = 'memorytrail';
  
  let params = {
    ACL: 'public-read',
    Bucket: bucket,
    Key: key,
    Body: req.files[0].buffer,
    ContentType: req.files[0].mimetype
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.log('this is the error from the server on upload', err);
    } else {
      res.send(data);
    }
  });
};