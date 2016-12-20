# Gulp Workflow
### Dependencies Included
This workflow includes a `package.json` as well as a `gulpfile.js`. The `gulpfile.js` includes the following dependencies:
* gulp
* SASS
* Autoprefixer
* Concat
* Cssnano
* gulp-util
* Uglify
* Image Minifier
* Cache

### Builds
* Compiles, autoprefixes and minimizes your Scss (can easily switch to Sass or LESS)
* Uglifys and concatenates your JS
* Compresses your Images
* Moves all html files to the dist folder

### File Structure
This gulp template expects the following file structure:

```
dist/
  |- assets/
  |  |- js/
  |  |- css/
  |  |- images/
  |- index.html
source/
  |- js/
  |- css/
  |- images/
  |- index.html
gulpfile.js
packages.json
node-modules/
```
`source` includes the original files you wrote and `dist` is the destination folder for compiled files.

### Using This Template

#### Getting Setup
Clone this repository

`git clone https://github.com/breecarrick/gulp-template.git`

NPM install all dependencies within your project directory

`npm install`

#### Altering The Template to Fit Your Project
Change the name and description in the package.json. Either follow the file structure suggested or change the file paths within the package.json files.
