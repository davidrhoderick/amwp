var Generator = require('yeoman-generator'),
    simpleGit = require('simple-git')(),
    fs = require('fs-extra');

var dir = {
      project: 'wordpress',
      acfProPlugin: 'wordpress/wp-content/plugins/advanced-custom-fields-pro',
      timberPlugin: 'wordpress/wp-content/plugins/timber',
      wordpressTheme: 'wordpress/wp-content/themes/timber-starter-theme'
    }, repo = {
      wordpress: 'https://github.com/WordPress/WordPress.git',
      acfProPlugin: 'https://github.com/wp-premium/advanced-custom-fields-pro.git',
      timberPlugin: 'https://github.com/timber/timber.git',
      timberStarterTheme: 'https://github.com/timber/starter-theme.git'
    }/*, links = {
      timberPlugin: 'https://downloads.wordpress.org/plugin/timber-library.zip'
    }*/;

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }

  cloneWordPress() {
    console.log('Downloading latest WordPress version...');
    simpleGit.clone(repo.wordpress, dir.project, function (error) {
      if(error !== null) {
        console.log(error);
      } else {
        console.log('Latest WordPress downloaded!');

        console.log('Downloading ACF Pro and Timber plugins...');
        simpleGit.clone(repo.acfProPlugin, dir.acfProPlugin, function (error) {
          if(error !== null) {
            console.log(error);
          } else {
            console.log('ACF Pro plugin installed!');

            simpleGit.clone(repo.timberPlugin, dir.timberPlugin, function (error) {
              if(error !== null) {
                console.log(error);
              } else {
                console.log('Timber plugin installed!');
              }
            });

            // request(links.timberPlugin)
            //   .pipe(fs.createWriteStream('timber.zip'))
            //   .on('close', function () {
            //     fs.createReadStream('timber.zip')
            //       .pipe(unzip.Extract({ path: 'wordpress/wp-content/plugins/' }));

            //     if (fs.existsSync('wordpress/wp-content/plugins/timber-library')) {
            //       console.log('Timber plugin installed!');
            //       fs.unlink('timber.zip');
            //     }
            //   });
          }
        });
      }
    });
  }
};