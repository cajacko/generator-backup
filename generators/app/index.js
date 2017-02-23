const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([{
      type: 'list',
      name: 'type',
      message: 'What type of authentication do you want?',
      default: 'oAuth',
      choices: ['oAuth', 'Service Account']
    }]).then((answers) => {
      this.type = answers.type;
    });
  }

  writing() {
    let file = 'Dockerfile.oauth';

    if (this.name === 'Service Account') {
      file = 'Dockerfile.service';
    }

    this.fs.copy(
      this.templatePath(file),
      this.destinationPath('Dockerfile')
    );
  }
};
