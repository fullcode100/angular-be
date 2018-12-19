# One Server (client)

This is the setup for an Angular projects that packages its frontend together with its backend server. This way all calls made to the backend are just made to the same server ( / ). 

To run this example, start from the `one-server-api` folder and run:
```bash
npm install # if necessary
npm start
```
That will build the backend and the frontend and place them in the same directory to be served together by a small Express server.
