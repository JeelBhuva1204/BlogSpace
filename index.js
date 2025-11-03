import express from "express"
const app = express();
const port = 3000;

app.use(express.static("public"))

let posts = [];
let id = 1;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index', { posts });
});


app.get('/NewPost', (req, res) => {
    res.render('NewPost');
});


app.post('/add', (req, res) => {
    posts.push({
        id: id++,
        title: req.body.title,
        Author: req.body.Author,
        content: req.body.content
    });
    res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
    posts = posts.filter(p => p.id != req.params.id);
    res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});