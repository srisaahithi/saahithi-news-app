Creating A Live News App Using React and [News API](https://newsapi.org/).

## React Saahithi- News App
I Started it by creating a react app. Below command will create a react app, which creats basic BoilerPlate
## npm create-react-app saahithi-react-news-app

For this we also need semantic react UI module which helps to have basic UI styled components.
## npm install semantic-ui-react
## npm install semantic-ui-css

For this we will use the news api to https://newsapi.org/ to fetch the latest news related to UK.
for Headlines: I used: 
## https://newsapi.org/v2/top-headlines?country=gb&sortBy=publishedAt&apiKey=${NEWS_API_KEY}

For filtering purpose I used:
# https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}

The news API KEY - I registered is :
# 96351bfb5a984d29b3a8550e664a0efb

I declared all the API Fetch functions as async to create an aynchronous function. This keyword is important as we are working with asynchronous code, when we are connecting to the News API.



## Available Scripts

move inside the project directory and run:
### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.\

Framework

## UI - Semantic UI React Component framework