Internship Task 2 — Nunjucks + Gulp

This project is the completed implementation of Internship Task 2.
The task requires recreating the Task-1 Document using a templating engine and a bundler/task runner.
This project uses Nunjucks as the templating engine and Gulp as the task runner.

Objective:
Recreate the original Internship Task-1 document using templates and a build system.
The final output in the “dist” folder should look similar to the Task-1 document with proper formatting, emojis, links, and styling.

Chosen Technology Stack:
Templating Engine: Nunjucks
Task Runner: Gulp

These tools were chosen because Nunjucks supports layouts and partials, while Gulp automates building, compiling, and running a development server.

Project Structure:

project/
gulpfile.js
package.json
README.md
src/
templates/
layout.njk
index.njk
assets/
css/style.css
js/main.js
dist/ (auto-generated after build)

Requirements Completed:

Templates created using Nunjucks

Build process handled by Gulp

Proper folder structure followed

Final HTML generated inside dist folder

Dedicated GitHub repository

Ready for deployment on Netlify or any other hosting platform

How to Install and Run:

Install dependencies:
npm install

Run development server:
npm start
or
gulp

This compiles templates into the dist folder, starts BrowserSync, and reloads automatically when files change.
Your local development URL will be:
http://localhost:3000

Build for production:
npm run build

This generates the final compiled site inside the dist folder.

Deployment Instructions (Using GitHub and Netlify):

Push the project to GitHub.

Open Netlify and choose “Add new site”.

Select “Import from GitHub”.

Choose your repository.

Set these values:
Build command: npm run build
Publish directory: dist

Deploy the site.

References:
Nunjucks Documentation: https://mozilla.github.io/nunjucks

Gulp Documentation: https://gulpjs.com

Live Preview Link: https://task2-nunjucks-gulp.netlify.app/

