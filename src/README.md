# User

A basic user curd operation with express.js

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environment.

### Node

- #### Node installation on Windows
Just go to [the official Node.js](https://nodejs.org/) website and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install node js and npm easily with the apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v19.11.3

    $ npm --version
    9.6.6

## Install

    $ git clone https://github.com/pandiraja804/person_api.git
    $ cd person_api
    $ npm install

## Configure environment
   
   create env file in root level .env. And declare below mentioned parameters.
```
  dbURI = MongoDb connection string.
  port = App listen port number.
```

## Running the project

    $ npm run start
