const fs = require('fs');
const http = require('http');

// Reading the HTML templates and JSON data
const productListHtml = fs.readFileSync('./htmltesting/product.html', 'utf-8');
const html = fs.readFileSync('./headerpage/index.html', 'utf-8');
const contact = fs.readFileSync('./headerpage/contact.html', 'utf-8');
const product = JSON.parse(fs.readFileSync('./data/product.json', 'utf-8'));

// Replacing placeholders in product HTML template
const productListHtmlArray = product.map((prod) => {
    let output = productListHtml.replace('{{%IMAGE%}}', prod.productImage);
    output = output.replace('{{ NAME }}', prod.name);
    output = output.replace('{{ MODELNAME }}', prod.modeName);
    output = output.replace('{{ MODELNO }}', prod.modelNumber);
    output = output.replace('{{ SIZE }}', prod.size);
    output = output.replace('{{ CAMERA }}', prod.camera);
    output = output.replace('{{ COLOR }}', prod.color);
    output = output.replace('{{ PRICE }}', prod.price);

    return output;
});

// Creating the server
const server = http.createServer((request, response) => {
    let path = request.url;
    if (path === '/' || path === '/home') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(html.replace('{{%CONTENT%}}', productListHtml));
    } else if (path === '/contact.html') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(contact);
    } else if (path === '/Education.html') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(html.replace('{{%CONTENT%}}', 'This is the education page'));
    } else if (path === '/Intrest.html') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(html.replace('{{%CONTENT%}}', 'This is the interest page'));
    } else if (path === '/product') {
        const productResponseHtml = html.replace('{{%CONTENT%}}', productListHtmlArray.join(''));
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(productResponseHtml);
    } else {
        response.writeHead(404);
        response.end('404: request error');
    }
    console.log('new request');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('server started');
});