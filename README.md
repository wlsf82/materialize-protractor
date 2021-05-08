# materialize-protractor

⚠️ **This project has been deprecated.** ⚠️

Sample project to demonstrate protractor tests created for websites developed using materializecss.

To install the project dependencies, run:

```
npm install
```

or (for short):

```
npm i
```

Then, to run the tests, run:

```
npm test
```

If all tests pass you will see a test report like this:

```
> materialize-protractor@0.0.1 test /Users/user/www/materialize-protractor
> protractor

[23:18:13] I/direct - Using ChromeDriver directly...
[23:18:13] I/launcher - Running 1 instances of WebDriver
Spec started
Started

  1 Materialize - Forms
    ✓ open date picker (5 secs)
.    ✓ pick today's date and close date picker (5 secs)
.    ✓ clear birthdate field right after picking today's date (7 secs)
.    ✓ select some date in the future (5 secs)
.    ✓ select some date in the past (5 secs)
.
Executed 5 of 5 specs SUCCESS in 26 secs.



5 specs, 0 failures
Finished in 26.226 seconds
[23:18:40] I/launcher - 0 instance(s) of WebDriver still running
[23:18:40] I/launcher - chrome #01 passed
```

**Note: The sleep times in the spec file are used only for demonstration reasons.**
