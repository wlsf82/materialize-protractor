# materialize-protractor
Sample project to create protractor tests in websites developed using materializecss.

To install the project dependencies, run:

```
npm install
```

or (for short):

```
npm i
```

To update `webdriver-manager`, run:

```
./node_modules/.bin/webdriver-manager update
```

Then, to run the tests, run:

```
npm test
```

If all tests pass you will see a test report like this:

```
> materialize-protractor@0.0.1 test /Users/user/www/materialize-protractor
> protractor

[21:50:18] I/direct - Using ChromeDriver directly...
[21:50:18] I/launcher - Running 1 instances of WebDriver
Spec started
Started

  1 Materialize - Forms
    ✓ date picker is opened (12 secs)
.    ✓ pick today date and close date picker (16 secs)
.    ✓ clear birthdate field right after picking today's date (18 secs)
.    ✓ select some date in the future (13 secs)
.    ✓ select some date in the past (13 secs)
.
Executed 5 of 5 specs SUCCESS in 1 min 12 secs.



5 specs, 0 failures
Finished in 72.409 seconds
[21:51:31] I/launcher - 0 instance(s) of WebDriver still running
[21:51:31] I/launcher - chrome #01 passed
```

**Note: The sleep times in the spec file are used only for demonstration reasons.**
