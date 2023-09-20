const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/',async(req,res)=>{
    try{
        const local = {
            title : "News Bolg"
            ,description : "news blog from raddy.co.uk"
        }
        const news = await axios.get('https://raddy.dev/wp-json/wp/v2/posts/');
        res.render('news',{ local , articles : news.data});
    }
    catch(err){
        console.log(err);
    }
})
router.get('/:id',async(req,res)=>{
    let postid = req.params.id;
    try{
        const local = {
            title : "News Bolg || article"
            ,description : "news blog from raddy.co.uk"
        }
        const news = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/${postid}`);
        res.render('post',{ local , article : news.data});
    }
    catch(err){
        console.log(err);
    }
})
router.post('/',async(req,res)=>{
    let search = req.body.search;
    try{
        const local = {
            title : "News Bolg || search"
            ,description : "news blog from raddy.co.uk"
        }
        const news = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts?search=${search}`);
        res.render('search',{ local , articles : news.data});
    }
    catch(err){
        console.log(err);
    }
})


module.exports = router;