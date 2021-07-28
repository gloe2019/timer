let args = process.argv.slice(2);

const timer = (args) => {
  args.forEach((arg) => {
    if (arg > 0 && !isNaN(arg)) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, 1000 * arg);
    }
  });
};

timer(args);
