const Employee = require("./emplyee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
        this.getGithub = function() {
            return this.github;
        }
    }
};


module.exports = Engineer;