# Remote Roofing Frontend Challenge :house:

This was a small take-home project built with React that I did for [Remote Roofing's](https://remoteroofing.com/) frontend challenge.

## Demo
![demo](https://i.imgur.com/hxuPTqB.gif)

## Installation Instructions
As a prerequisite, make sure you have `create-react-app` installed.

``` bash
> npm install -g create-react-app
```

To view, first go to your preferred directory and clone the repo.
``` bash
> git clone https://github.com/bjma/remote-roofing-frontend-challenge
```

Make sure to install all dependencies. To do this, first go to the project directory.

``` bash
> cd remote-roofing-frontend-challenge
```

Then, run the following command in the project directory.

``` bash
> npm install
```

Now that everything is set up, run the following command to launch the project.

``` bash
> npm start
```

You should be able to view it on `http://localhost:3000`.

## Design Principles
When I was looking through the project instructions, I noticed that this was a pretty short project, so I opted for using functional components over class components.

I knew that there would be three screens for this project, one for the Home page, and two for fetching and displaying movies and series. I decided to use [React Router](https://reactrouter.com/?utm_source=reactnl&utm_medium=email) for navigating between components.

This project has three main components: `<Home>`, `<Movies>`, and `<Series>`, each representing the different screens. All routing is done in `App.js`.

I noticed that each page had the same header, but a different page title. Since the navigation bar with the two buttons was the same for all screens, I decided to render that in `App.js`, and create another component called `<Header>`, which took in a `pageTitle` prop.

``` jsx
const Header = (props) => {
    return <div style={styles}>{props.pageTitle}</div>;
}
```

As you can see, the page title changes depending on which page you're on.

![dynamic title](https://i.imgur.com/5vk8ZGa.gif)

After fetching the JSON feed, I had to display each entry in an organized fashion, so I created another component called `<Items>`. This way, I could pass in the JSON content as props. 

Since I only needed two keys from the JSON feed, `title` and `images['Poster Art'].url`, my `<Item>` component was pretty simple. A bit of styling, and it looks good enough.

``` jsx
<Item 
    title={item.title} 
    imageUrl={item.images['Poster Art'].url} 
/>
```

The biggest challenge for me was rendering the items. I didn't want to hard code a table and have 7 entries in each row, so I used [React Bootstrap](https://react-bootstrap.github.io/) components (`Container`, `Row`, `Col`) and dynamically rendered each item by creating an array of `<Item>` components that added a new `<Row>` for every 7th entry. I needed a bit of StackOverflow for this part, and sourced it in the code.

As you can see, each row is neatly stacked.

![dynamic-row](https://i.imgur.com/cwTISP4.gif)

There was another thing I wasn't really sure how to implement neatly, which was the loading and error states. This is because I wanted to use a `switch` statement for the conditional rendering, but I wasn't sure if I could do that with one state for an error and another for loading. So, I just used React's `useState` hook to create one state called `isLoading` that took on a value of `0` if the JSON is still loading, `1` if it was successfully fetched, and `3` for an error.

If you look at the previous two GIFs, you can see that while the JSON feed is being fetched, there's a loading screen. 

If I omitt the JSON feed URL in the `<Movies>` component, we get an error screen.

![error](https://i.imgur.com/NPlP27k.gif)

## Possible Improvements
Honestly, I think it would have been better to fetch the JSON feed in `Home.js`, split the content into two arrays for each `programType`, then passed them into the `<Movies>` and `<Series>` components as props. Not only does this makes more sense architecturally, but it also saves up on redundant error and loading screens that I had in `<Movies>` and `<Series>`. If I fetched the JSON feed on my `<Home>` component, then there's only a need for one screen to have the loading statuses. If I were to do something like this again that's one change I would definitely implement.

I didn't really like how convoluted some of my implementations were; I tried to keep everything neatly contained in methods, but sometimes that made everything a little bit harder to navigate. For example, my sorting method in `Movies.js` and `Series.js` just used a modified version of JavaScript's `Array.sort()`. I put it in my own method called `sortItems()`, but I honestly could have just called `Array.sort()`. This is especially true for the dynamic rendering code, which seemed a little bit gimmicky.

## If I had more time...
I would definitely play around with the styles more to make the layout a bit more compact. I also definitely would have written some tests, but I wasn't really sure how to (if I'm going to be honest).

I would have also wanted to add additional features. Instead of having two links to the Movies and Series pages, I'd put that in the navigation bar and replace the main screen with a search bar. Additionally, on both content pages, I'd add functionality features like pagination so I could display more content, and different sorting displays. A couple I can think of is by `releaseYear`, or if the information was available, the video length of each content.

I had a lot of fun with this project, getting everything done didn't take too long, just around 4-6 hours. I just wish I had a little bit more time on my hands to add and fix things that I wanted to improve.