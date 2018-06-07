# Express Basic Example

This is a basic example of [Express.js](https://expressjs.com/) (hereafter referred to as Express) being used to create an API. In this example we also use [Monk](https://www.npmjs.com/package/monk) to connect to a server on [mLab](https://mlab.com/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You'll need both Express and Monk. You also will need to set up a database on mLab.
```
$ npm install express --save
$ npm install --save monk
```
This will add both Express and Monk to your application, and save it on the list of dependencies. Alternatively, if you are simply cloning/forking/etc (using) this repo in any way, you can simply:
```
npm install
```
In this project, I used Postman (https://www.getpostman.com/) to help with testing my API. You can download that program from their website.

### Installing

This is only an API. 

Start the server using node, and then you can test on your local host to see if you get data back. 

```
$ node index.js
```

Depending upon how you configure it and the data on your mLab, you should recieve data and be able to sort it using RESTful route of /party/:party (where :party is Republican, Democrat, or Independent) to sort by party, and /gender/:gender (where :gender is male or female) to sort by gender.

```
http://localhost:3000/party/Republican
http://localhost:3000/gender/female
```

## Built With

* [Express.js](https://expressjs.com/) - API
* [Monk](https://www.npmjs.com/package/monk) - Allow Express to interface with MongoDB
* [mLab](https://mlab.com/) - Hosted the MongoDB instance

## Authors

* **Team Unicorn** [Trello](https://trello.com/b/GF17oI1p/team-unicorn)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to Wes for giving us this opportunity!
* I love my mom!
