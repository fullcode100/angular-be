# JSON-config

This is the setup for an Angular projects that fetches the config file from the server or from assets (locally).

When you deploy it to a server you can put the `config.json` file in the application directory to fetch it at runtime. This way the config can change per server without the application having to change.

Example
```bash
npm start -- json-config
```
