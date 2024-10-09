const { sync: exists } = require("command-exists");

const ruby = exists("ruby");
const jekyll = exists("jekyll");
const bundle = exists("bundle");

if (!ruby) {
  console.log("Ruby is not installed");

  if (process.platform === "win32") {
    console.log("Install it using the RubyInstaller");
    console.log("(choose the newest version, with Devkit)");

    console.log("https://rubyinstaller.org/downloads/\n");
  }

  if (process.platform !== "win32") {
    console.log("Follow instructions on the page below to install it");
    console.log("https://www.ruby-lang.org/en/documentation/installation/\n");
  }

  process.exit(1);
}

if (!jekyll) {
  console.log("Jekyll is not installed");
  console.log("Install it with 'gem install jekyll'\n");

  process.exit(1);
}

if (!bundle) {
  console.log("Bundle is not installed");
  console.log("Install it with 'gem install bundler'\n");

  process.exit(1);
}
