# Website Project:: Portfolio

Preview can be found on http://cfa-ss-portfolio.herokuapp.com – this project will be regularly updated and moved to http://setiyaputra.me

This is a website created for CFA Sydney bootcamp – term 1. The brief for this project is the following:
  - Create a website for personal portfolio using skills learnt to date: css, html, a bit of rails
  - Build prototype that can be expanded further to include new portfolio items
  - Need to have thoughtfully written bio
  - Need to have portfolio section of coding-related projects
  - Need to have a link for contacting owner of the page
  - Need to show characters of the creator

# Approach:

My focus is to build the website mobile first and practising the usage of css to create fully responsive website. To allow this, I chose to use Zurb Foundation's css framework. Foundation can be downloaded [here](https://foundation.zurb.com).


### Tech

The website uses the following requirements to work properly:

* [Rails v.5](https://www.rubyonrails.org) - Ruby on Rails
* [Foundation](https://foundation.zurb.com) - css framework
* [Typed.js](http://www.mattboldt.com/demos/typed-js/) - simple javascript for typing effect


### Installation

Create new Rails app using -foundation using the foundation-rails gem to make it super easy to use Foundation in your upcoming Rails project. Just add the following to your Gemfile:

Install the dependencies and devDependencies and start the server.

```sh
$ gem 'foundation-rails'
```
to Gemfile. Run bundle. Install zurb foundation.
```sh
$ rails g foundation:install
```
Say yes to overwrite application.html.erb. Include:
```sh
<%= javascript_include_tag "vendor/modernizr" %>
```

### Todos

 - Create content cards to show portfolio


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
