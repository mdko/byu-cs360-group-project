# Food Storage Counselor

Ryan Baxter, Michael Christensen, Colin Thompson, Jamie Visker

https://github.com/mdko/cs360-group-project

## Project Description

Lots of people keep a food storage, but many people don’t actually keep an accurate record of what they store. What’s more, if they’re not careful they won’t know when it goes bad or they will forget to either eat it or throw it out before it goes bad. Many people need to keep track of this information, but keeping it organized is something many people don’t have time for. People often wish that storing food was easier and more straightforward. People also need reminders that a good food storage takes maintenance and balance.

The food storage counselor will be user-friendly, making it a great application for people who don’t often use the internet. The food storage manager aims to make taking care of food storage fun and easy. The manager allows people to test their food storage in day-to-day living, warns them of out-of-date food, and helps them maintain an organized food storage.

## Features

### What we would ideally implement:

The food storage counselor allows users to log in and access several food storage management tools. These tools include a food storage calendar, showing when your foods will go bad, and raising warnings when some of your food has gone bad. The manager also allows people to add basic foods to their personal inventory. Special foods not immediately supported by the manager will be added and if others add the same item they can take other user’s inputs as suggestions. Expiration dates and other settings can be customized by users after they have logged in, and their preferences will be bound to their account. The manager allows users to run a simulation week, showing what food would be available per day if they were only living on their food storage. It would also be ideal if the system suggested meals that could be made to more effectively rotate the food storage. Lastly, a barcode-reading phone app allows users to enter foods into their inventory rather than manual inputs.

### Features we will implement:

The food storage counselor will implement a way to be able to keep track of foods and be able to rotate them. Users will be notified of food that is about to expire. We will attempt to make the barcode scanner work unless we see that it will not work.

## Architecture

To create our website, we will use AngularJS for the front end and node.js for our back end, with MySQL for our relational database to store all the information about the foods and each user’s inventory.
In addition to the main website, we want a small mobile application for our barcode scanner. This mobile application will be Android-based because it’s the most-straightforward and open platform to program in, in addition for it being Java-based and easy to connect to MySQL. There are already barcode libraries that we can leverage (http://www.keepedge.com/products/android_barcode/), and we’ll be able to connect to UPC databases already created, like http://www.upcdatabase.com/itemform.asp.
