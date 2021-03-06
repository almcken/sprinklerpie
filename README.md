# Sprinkler Pie

Welcome. The Sprinkler Pie is a Raspberry Pi controlled, Google sheets integrated, Rain Bird modular, lawn watering machine.

### Getting Started
On the Raspberry Pi, use the following to install Node.js and configure the required version.

- `git clone https://github.com/almcken/sprinklerpie.git`
- cd `sprinklerpie`
- Install nvm: `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash`
- Install Node.js: `nvm install 8.9.4`
- Use Node.js version: `nvm use 8.9.4`
- Run `cp .env.example .env` and configure the appropriate environment variables in the `.env` file:
  - `NODE_ENV`: the Node.js environment to use. Defaults to `development`.
  - `OSC_MODE`: if set to true, enables a manual mode of triggering each valve. Requires the [TouchOSC](https://hexler.net/software/touchosc) app for iOS or Android. See below for configuring the TouchOSC app.
  - `GOOGLE_SHEET_ID`: the spreadsheet id for the Google Sheet. See below for configuring the Google Sheet.
- Ensure you have the appropriate credentials in the root directory. You can download them from the [Google Developer Console](https://console.developers.google.com/apis/credentials). Rename the downloaded json file to `credentials.json` and move to the root directory.
- Run `npm install`
- Run `npm start` and follow the prompts to configure Google OAuth. You will only have to do this the first time you run the project.

### Dependencies
#### Google Sheets
This project relies on a Google speadsheet located here:

https://docs.google.com/spreadsheets/d/1wUf3MjScH6ryYlDLsUJTsy3XhVVZolqlCws6_696Yrw/edit?usp=sharing

I am not giving access to this docuemnt at this time.

#### TouchOSC
If `OSC_MODE` is set to true in the `.env` file, starting the server will also allow you to connect the iOS or Android TouchOSC app to the Sprinkler Pie application. In the TouchOSC app under CONNECTIONS, use the following options to allow the app to connect to Sprinkler Pie:
  - Host: `hostname` of your Raspberry Pi, usually `raspberrypi.local`
  - Port (outgoing): 3000
  - Port (incoming): 3333
  - Local IP address: N/A it is set for you by the app
Using the 'Simple' layout, select the first page of the layout. The bottom right button will trigger relay 4.
