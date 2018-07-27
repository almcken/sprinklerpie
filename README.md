# Sprinkler Pie

Welcome. The Sprinkler Pie is a Raspberry Pi controlled, Google sheets integrated, Rain Bird modular, lawn watering machine.

### Getting Started
On the Raspberry Pi, use the following to install Node.js and configure the required version.

- `git clone https://github.com/almcken/sprinklerpie.git`
- cd `sprinklerpie`
- Install nvm: `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash`
- Install Node.js: `nvm install 8.9.4`
- Use Node.js version: `nvm use 8.9.4`
- Run `cp .env.example .env` and configure the appropriate environment variables. Enter the spreadsheet id for the Google Sheet in the `.env` file.
- Ensure you have the appropriate credentials in the root directory. You can download them from the [Google Developer Console](https://console.developers.google.com/apis/credentials). Rename the downloaded json file to `credentials.json` and move to the root directory.
- Run `npm install`
- Run `npm start` and follow the prompts to configure Google OAuth. You will only have to do this the first time you run the project.

### Dependencies
This project relies on a Google speadsheet located here:

https://docs.google.com/spreadsheets/d/1wUf3MjScH6ryYlDLsUJTsy3XhVVZolqlCws6_696Yrw/edit?usp=sharing

I am not giving access to this docuemnt at this time.
