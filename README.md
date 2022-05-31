# Trying This Experiment

This experiment has a built in archive format that downloads the subject data into the browser at the end. This can be useful for anyone wanting to try the experiment without necessarily running it on a subject population. To try the archived version go to:
### `https://nrd-lab-test.github.io/Teacher_Horizon?archive=true`

For those wanting to run the experiment on subjects, they will need to have an Exius server running to securely handle subject data uploads. The project Exius can be found at:
### `https://github.com/LaneLewis/Exius` 

# Setting up the experiment
This project was built with Reactjs.

Prerequisites: git and nodejs installed
clone the repository
### `git clone https://github.com/NRD-Lab-test/Teacher_Horizon/tree/master`
install the npm packages
### `npm install`
## Running locally
### `npm start`
which will start up a local dev environment on 
### `http://localhost:3000`
without an id and access key (from an Exius server), the data won't upload and an error will appear. At this point, you have two options, if you want to run the experiment locally without attempting to send the data to an Exius server simply add the query string `archive=true` to localhost:
### `http://localhost:3000?archive=true`
if you have an Exius server, you will need to create a set of keys for the server and pass one into the url along with a subject id and a key. In addition, the Config component server field will need to be changed to the address of your Exius server.
### `http://localhost:3000?id=123&key=123456789...`
## Building the Experiment for Production
To build this experiment into plain html/javascript in the build folder, run:
### `npm run build`
To deploy your experiment to the gh-pages branch for free static hosting for your repository's expeirment, run 
### `npm run deploy`

