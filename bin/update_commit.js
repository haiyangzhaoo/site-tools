// const { exec } = require('child_process'); // 用于执行 Git 命令
import { exec } from 'child_process';

exec('git status --porcelain', (error, stdout, stderr) => {
  if (error) {
    return;
  }
  if (stderr) {
    return;
  }
  if (stdout) {
    exec('git stash', (error, stdout, stderr) => {
      exec('git pull', (error, stdout, stderr) => {
        if (error) {
          console.error(error);
        }
        if (stdout) {
          console.log(stdout);
        }
        if (stderr) {
          console.error(stderr);
        }
      });
    });
  } else {
    exec('git pull', (error, stdout, stderr) => {
      if (error) {
        console.error(error);
      }
      if (stdout) {
        console.log(stdout);
      }
      if (stderr) {
        console.error(stderr);
      }
    });
  }
});


