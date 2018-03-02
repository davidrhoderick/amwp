# amwp
Yeoman.io scaffolding for a WordPress installation with ACF Pro and Timber plus automation and database synchronization.  The generator does the following tasks:

1. Downloads the latest WordPress
2. Downloads the ACF Pro plugin (**attention: you will need your own license**)
3. Downloads the Timber plugin
4. Downloads the Timber Starter theme
5. Updates functions.php with timber-starter-theme-clean-functions (removes demo code, emoji, jQuery, and default styles)
6. Sets up gulp automation with yarn dependency management

It also includes some non-setup tools such as a function that allows the databases from local, development, and production servers to syncrhonize and a git pull file for the server.
