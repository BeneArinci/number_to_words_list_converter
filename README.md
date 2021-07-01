# Hello and welcome to my Number2wordsListConverter app


## Main functionality
This app has one main purpose: it lets the user enter a specific combination of numbers, suggesting which letters are linked to every single number, and it shows them all the possible combinations of words in the style of T9. <br>
The client app is reaching the server through a specific API endpoint (passing the string of numbers as query param). The server is receiving the request, dealing with the conversion and sending back to the client a response with a specific format. The client is then able to show the results to the user.

## Tech && Libraries
The main directory contains 2 sub directorie (Client and Server). <br>
I developed the backend/server by using Node.js and Express.js and other useful Node.js libraries. For the client side I used React. Specifically, I developed the front end through create-react-app.<br>
For testing purposes, I used Jest. On the server side I also used the "supertest" framework and, on the client side, I used the React specific Jest package.

## How to run the app
First of all you should clone this repository and open it in your code editor. You need two terminals opened. One for starting the server and the other for the client. <br>
From one terminal enter in the **Server** directory then:  
- install the packages/dependencies using npm or yarn
- create and compile an .env file following the suggested structure. Specify **NODE_ENV=development** and **CORS_ORIGIN=http://localhost:3000**
- run "npm start" (or use yarn)
- the port should be 8000 (if you don't pass a different one in the .env file)

From another terminal enter in the **Client** directory then:
- install the packages/dependencies using npm or yarn;
-  run "npm start" (or use yarn)
-  the port should be the 3000

## How it looks like
<p align="center">
  <img src="https://github.com/BeneArinci/number_to_words_list_converter/blob/master/images/app.png" width="500" height="auto"/>
</p>


## Areas of improvement

MANY! :) 
I'd say that this is my MVP in terms of functionality. As soon as possible I'd like to start working again on this app. <br>
What I already have in mind is:
- Adding an extra functionality: returning only correct English words.
- improve code project structure quality
- test quality and coverage. I manage to write tests but absolutely not enough. More and better tests are a must. I also got blocked while trying to test some aspects of the react app. I need to study more :) 
- My react app could be divided in even more components
- Using Redux for state management even just for having some experience with it
- Improve the style. Not super happy with the style, there is huuuge room for improvement! Right now it's very basic and not intuitive enough..

I am also open for suggestions! :) <br>
Thanks again for visiting

