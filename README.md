# GiveCampus - Tech Assessment 

Hello GiveCampus! 

This code is written to solve two take-home code assessments. I solved the problems in JavaScript first and then learned that GiveCampus is a Ruby shop and decided to solve them in Ruby as well. Included with the code is unit testing (Jest for JavaScript and RSpec for Ruby). For privacy reasons, I did not include the test problems/wording in this repo.

#### Setting Up

First, fork and clone the repo to your machine.

`git clone git@github.com:{username}/give_campus_tech_assessment.git`

After it repo is successfully on your local machine, open the directory in the code editor of your choice. Once open, you can view the code and run the test cases. Before running the test commands, you may need to run `npm install jest` and/or `gem install rspec` followed by `rspec --init` in the repo directory. 

The commands for the unit testing are as follows:

##### JavaScript

`npm run test`

This will check the JavaScript code against the test cases for both problems.

##### Ruby 

`rspec spec/continuous_numbers.rb`

`rspec spec/most_years_alive.rb`

This will check the Ruby code against the test cases for the specified problem.
