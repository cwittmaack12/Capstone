*Daily Planner*
===============

Developer's LinkedIn Profile:  https://www.linkedin.com/in/cody-wittmaack-35237980/

*Daily Planner* is a fullstack web application designed to allower a user to track their list of things they want to get done that day.
Axios Post and Delete requests are utilized to populate the list and remove items from that list while the data is stored on the server.
*Daily Planner* also provides the user the ability to check the current weather with a simple zip code search.  The search will tell the
user what the current temperature is, what the current conditions are, and provide a thumbnail image so they know what to expect.  Finally, *Daily Planner* gives the user a new quote from a famous figure each time the page is refreshed.

## Technologies
Javascript, CSS, HTML, Axios, Flex,
Express, Cors, Zenquotes AIP, & Accuweather API.

## Demo
https://share.vidyard.com/watch/bTSzSga8snPvaLm8a3EsZJ?

## Install
Run NPM I

## Version 2.0

###### Responsiveness
I would like to rework the CSS to allow the site to be responsive to different screen sizes.  When this was initially designed I hadn't
utilized any of those technologies but I believe I could rework the site using Bootstrap fairly easily.

###### Get Request for the to-do List
Currently the data in the list is stored in the server however the page doesn't run a Get request upon loading so if the page is 
refreshed the items in the to-do list will disappear until a new item is added then the items that have not been deleted will re-appear 
in the list.  

###### Location
I would like the weather box to pull in the name of the city when the search is done.  This shouldn't be very difficult however I didn't
consider this until I started testing the site and thought this might be a nice added touch.

###### Host the site
I would like to get the site hosted on AWS as well.