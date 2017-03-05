const errorHandler = (err, req, res, next) =>{
    res.status(500).json({stacktrace:err.stack, error:'error'});
};

module.exports = errorHandler;
