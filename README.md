## Installation Instructions
#### Built with React/Ruby on Rails
### Requirements

- Ruby 3.0.6
- NodeJS (v18), and npm
- Postgresql

To get started, follow the instructions below:

- Fork or Clone the repository to your local machine.
- Install the necessary npm packages and gems by running the following commands in the project folder:
- npm install --prefix client to install the required npm packages.
- bundle install to install the required gems.
- Start the server by running rails s in the console.
- In a separate console, run npm start --prefix client to start the front-end and view the application in your browser.

## Postman Collection and API Documentation
https://app.getpostman.com/join-team?invite_code=009dd14d85d9d2c3d1a4dadd80a67ab7&target_code=2ef1502768204c3ec42169acc414ea9f


## Dependencies
### Install Ruby 

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

Install version 3.0.6

```console
$ rvm install 3.0.6 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```console
$ node -v
```

If your Node version is not 18.x.x, install it and set it as the current and
default version with:

```console
$ nvm install 18
$ nvm use 18
$ nvm alias default 18
```

