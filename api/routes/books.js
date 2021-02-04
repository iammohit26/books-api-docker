const express= require('express');
const router = express.Router();
const Book = require('../../models').Book;



router.get('/',(req,res,next)=>{
    Book.findAll().then(doc=>{
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
    });
})

router.post('/',(req,res,next)=>{
    const book = {
        name: req.body.name,
        author: req.body.author,
        price: req.body.price,
    };
    Book.create(book).then(result=>{
        console.log(result);
        res.status(200).json({
            message:'Book added',
            added_book: book,
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
    
})

router.get('/:bookId',(req,res,next)=>{
    const id = req.params.bookId;
    Book.findOne({
        where: {id : id}
    }).then(doc=>{
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})

router.delete('/:bookId',(req,res,next)=>{
    const id = req.params.bookId;
    Book.destroy({
        where: {id : id}
    }).then(result=>{
        console.log(result);
        res.status(200).json(result+" rows deleted");
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
    });
})

router.patch('/:bookId',(req,res,next)=>{
    const id = req.params.bookId;
    const book = {
        name: req.body.name,
        author: req.body.author,
        price: req.body.price,
    };
    Book.update(book, {
        where: {id : id}
    }).
    then(result=>{
        console.log(result)
        res.status(200).json(result + " rows updated !");
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    });
});

module.exports = router;