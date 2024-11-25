import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {layout: 'whiteboard'});
});


export default router;