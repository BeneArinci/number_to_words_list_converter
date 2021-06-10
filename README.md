## Hellooo :) 
Hello everybody and thank you very much for giving me this opportunity! <br>
I very much enjoyed working on this web app development even if I was a bit rusty when it came to work with React! It's unbelievable what you forget about a technology if you don't use it for months!<br>
On top, I wanted to specify that I haven't used Redux. The main reason for this is that I don't have experience with. I also believe that there wasn't a real need for Redux in developing a small app like this one <br>
I am looking forward to receiving your feedback on this task but, first, let me give you some more info about how I developed it.

## Main functionality
This app has one main purpose: it lets the user enter a specific combination of numbers, suggesting which letters are linked to every single number, and it shows them all the possible combinations of words in the style of T9. <br>
The client app is reaching the server through a specific API endpoint (passing the string of numbers as query param). The server is receiving the request, dealing with the conversion and sending back to the client a response with a specific format. The client is then able to show the results to the user.

## Tech && Libraries
The main directory contains 2 sub directorie (Client and Server). <br>
I developed the backend/server by using Node.js and Express.js and other useful Node.js libraries. For the client side I used React. Specifically, I developed the front end through create-react-app.<br>
For testing purposes, I used Jest. On the server side I also used the "supertest" framework and, on the client side, I used the React specific Jest package.

## How to run the app
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
<img src="https://github.com/BeneArinci/number_to_words_list_converter/blob/master/images/app.png" width="500" height="auto">

## Areas of improvement

MANY! :) 
I wasn't able to dedicate as much time as I planned to this task. Honestly there were many things I did not remember and it was a great opportunity to review them but also to learn new things. Even if I am happy with the final result, there are many areas I would improve if I had more time to spend on the task:
- test quality and coverage. I manage to write tests but absolutely not enough. More and better tests are a must. I also got blocked while trying to test some aspects of the react app. I need to study more :) 
- Improve the style. Not super happy with the style, there is huuuge room for improvement! Right now it's very basic and it does not explain much what it is doing..
- Adding an extra functionality: returning only correct English words.

