# Scaling Garbanzo

### Getting started with the project

- clone the project and then run `.code` in the same terminal.
- then run `cd server` and then run `npm install`
- then start a new terminal and run `cd client`
- then in the client terminal run `npm install`
- Create a `.env` folder in client directory and paste your MONGODB url to it as shown below:
```
GOOGLE_ID = <Google Id>
GOOGLE_SECRET = <Google Secret>
```
- now replace `<Google Id>` , `<Google Secret>` with your respective Google credentials.
- Create a `.env` folder in server directory and paste your MONGODB url to it as shown below:

```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.muywy8r.mongodb.net/<collection>?retryWrites=true&w=majority
```

- replace `<username>` , `<password>` and `<collection>` with your respective MondoDB credentials.
- now you are good to go.
- Start the local server in development mode using `npm run dev` in frontend terminal
- Frontend server listens on `PORT 3000`
- Start the local server in development mode using `npm run dev` in backend terminal
- Backend server listens on `PORT 4000`


Thanks.