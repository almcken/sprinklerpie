# Sprinkler Pie

Welcome. The Sprinkler Pie is a Raspberry Pi controlled, Google sheets integrated, Rain Bird modular, lawn watering machine.

### Getting Started
Running `python chanTrue.py 2` will activate channel 2 on your Raspberry Pi. 

The mapping from GPIO pins to relay module:
- channel 2 = Relay switch 1
- channel 3 = Relay switch 2
- channel 4 = Relay switch 3
- channel 27 = Relay switch 4

This project relies on a Google speadsheet located here:

https://docs.google.com/spreadsheets/d/1wUf3MjScH6ryYlDLsUJTsy3XhVVZolqlCws6_696Yrw/edit?usp=sharing

I am not giving access to this docuemnt at this time.

### Using Node.js
On the Raspberry Pi, use the following to install Node.js and configure the required version.

- Install nvm: `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash`
- Install Node.js 8.9.0: `nvm install 8.9.0`
- Use Node.js 8.9.0: `nvm use 8.9.0`
- Run `cp .env.example .env` and configure the appropriate environment variables
