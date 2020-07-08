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

The biggest challenge for me was rendering the items. I didn't want to hard code a table and have 7 entries in each row, so I used [React Bootstrap](https://react-bootstrap.github.io/) components (`Container`, `Row`, `Col`) and dynamically rendered each item by creating an array of `<Item>` components that added a new `<Row>` for every 7th entry. 

As you can see, each row is neatly stacked.

![dynamic-row](https://i.imgur.com/cwTISP4.gif)

There was another thing I wasn't really sure how to implement neatly, which was the loading and error states. This is because I wanted to use a `switch` statement for the conditional rendering, but I wasn't sure if I could do that with one state for an error and another for loading. So, I just used React's `useState` hook to create one state called `isLoading` that took on a value of `0` if the JSON is still loading, `1` if it was successfully fetched, and `3` for an error.

If you look at the previous two GIFs, you can see that while the JSON feed is being fetched, there's a loading screen. 

If I omitt the JSON feed URL in the `<Movies>` component, we get an error screen.

![error](https://i.imgur.com/NPlP27k.gif)