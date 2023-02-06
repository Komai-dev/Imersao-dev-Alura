var listaFilmes = ['https://m.media-amazon.com/images/I/51apn38RtEL._AC_.jpg', 'https://www.papodecinema.com.br/wp-content/uploads/2016/10/20191229-poster.png', 'https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg', 'https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg', 'https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg'];

for (var i = 0; i < listaFilmes.length; i++) {
    document.write('<img src=' + listaFilmes[i] + '>');
}
