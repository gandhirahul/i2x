# i2x
A simple React app with two views:

1.Login Page-
	Simple login form with e-mail and password.

2.List view page-
	Renders the audio recordings metadata.

You can login with following credentails: 

	email:'challenge@i2x.ai'
	password:'pass123'

Steps to run the project locally:

1. git clone https://github.com/gandhirahul/i2x.git

2. Install the dependencies 
	npm install

3. Run the app
	npm start

Launch your browser and hit http://localhost:5000

Steps to Deploy: 

I have deployed the application on Heroku.You can review it here: https://rahulgandhi-i2x.herokuapp.com/

1. Create a Procfile with the following line- 
	web: gulp build;node server.js

2. Create a heroku remote.This command creates a new application on Heroku – along with a git remote that must be used to receive your application source.
	heroku create

3. The heroku git:remote command will add this remote for you based on your applications git url
	heroku git:remote -a your-heroku-application

4. You can do your first push
	git push heroku master