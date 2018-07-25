# AS220 Static HTML/CSS Code

This project contains SASS/CSS and markup samples for the AS220 website. [SASS](http://sass-lang.com) source code is compiled to CSS. Handlebars templates are compiled to HTML markup examples. 

The SASS/CSS code is built on the [Bulma framework](https://bulma.io). 

The markup examples are compiled using [Node.js](https://nodejs.org/en/), the [Grunt](https://gruntjs.com) task runner and the [Assemble static site generator](http://assemble.io). _(It is not necessary to use this in your application.)_


## Code Design

The code is designed to be consistent with conventions in the Bulma framework. The modular compoenets can be added in different orders to compose any number of page layouts. 

Using page-specific overrides, you can further customize the framework for special event or porgram sites. See `/output/special.html` as an example.


## Integration with Web Applications

The compiled CSS and HTML markup patterns can be used with any web application that allows you to customize CSS and HTML such as:

* static HTML
* static site generators including [Assemble](http://assemble.io) and [Jekyll](https://jekyllrb.com)
* content managment systems including [Drupal](https://www.drupal.org), [WordPress](https://wordpress.com), or [Craft CMS](https://craftcms.com)



## Up and Running

#### Requirements

* An understanding of HTML and CSS
* A recent operating system
* An internet connection
* A web browser
* A code editor
* A command terminal
* [Node.js](https://nodejs.org/en/)


#### Installation

1. Install Grunt, `npm install -g grunt-cli`, and `npm install -g grunt`
2. Go to the project directory: `cd [PATH_TO_PROJECT]`
3. Install the node modules: `npm install`
4. Run the command `grunt`. 

These steps should: 

1. install the required Node modules, 
2. compile the SASS and templates into static code, 
3. start a local server,
4. and open the home page in your web browser 

#### Making changes

1. Open the project in your code editor
2. Run the command `grunt`. 
3. Make changes to the templates or SASS code and save your file. 

Once a `.sass`, `.scss`, or `.hbs` file is saved the build script should recompile and refresh the website in your browser.

_It is recommended that you track your changes using [Git source code management](https://git-scm.com). Changes made to this code should be made vis pull request. Using this code to start a similiar project should be done by forking the project._


## The Bulma Framework

[Bulma](https://bulma.io) is an open source CSS framework that enables rapid and reliable front-end development. This project uses [Bulma v0.5.3](https://github.com/jgthms/bulma/releases).

See the [Bulma Documentation](http://bulma.io/documentation/) for details on how to use these code patterns. 

The **foo** theme created for AS220 builds on top of Bulma by chutomizing configuration via SASS variables, overriding default styling via CSS inheritance, and adding custom modules. 


## Directory Structure
    
`/output` — compiled CSS, fonts, and images for production

`/source` — compiled HTML

`/source/data` — JSON files used by Assemble that contain site metadata and populate the navigation menus.

`/source/sass/foo` — custom SASS for the AS220 website

`/source/sass/vendor` — vendor imports of the Bulma framework, fontawesome, and the Slick carousel styles

`/source/templates/pages` — the page-specific content for the markup samples

`/source/templates/partials` — the templates for the markup samples. The file `default.hbs` is the main page template.

`Gruntfile.js` — build script for the project

`package.json` — file requireed by Node.js to install the required modules. 

`/node_modules`


