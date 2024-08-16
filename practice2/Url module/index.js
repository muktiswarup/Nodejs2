const url= require('url');
// console.log(url.parse('https://nodejs.org/en?name=Rahul',true).query);
// console.log(url);
//how to make your own url...
/* console.log(
    url.format({
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/some/path',
        href: "https://googgle.com",
        query: {
          page: 1,
          format: 'json',
          name: "krishna"
        },
      })
) */

      const newUrl= "https://example.com/some/path?page=1&format=json&name=krishna";
      const urls=  new url.URL(newUrl)
      console.log(urls);
      console.log(urls.searchParams.get('name'))