# Environments

This is the setup for an Angular projects that uses the environment files to bake in environment variables during build.
You can switch configuration while serving or building by using the `--configuration` or `-c` option.

Possible configurations for this project are
- test
- acc
- production

Example
```bash
npm start -- environments --configuration=acc
```
