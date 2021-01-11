# balena-iota

This is an application that send a micropayment of 1 IOTA to a node based on the IOTA [Javascript tutorial](https://docs.iota.org/docs/core/1.0/tutorials/js/transfer-iota-tokens) running on balena.

Follow the instructions to get test IOTA tokens, in order to see some success Devnet transaction.

## Getting started

### Hardware required

* Raspberry Pi 3 or 4
* SD card

### Software

* A balenaCloud account ([sign up here](https://dashboard.balena-cloud.com/))
* [balenaEtcher](https://balena.io/etcher)

Once all of this is ready, you are able to deploy this repository following instructions below.


## Deploy the code

Running this project is as simple as deploying it to a balenaCloud application. You can do it in just one click by using the button below:

[![](https://www.balena.io/deploy.png)](https://dashboard.balena-cloud.com/deploy?repoUrl=https://github.com/balena-io-playground/balena-iota)

Follow instructions, click Add a Device and flash an SD card with that OS image dowloaded from balenaCloud. Enjoy the magic 🌟Over-The-Air🌟!

## Variables

### Device Variables

Variable Name | Value | Description | Default
------------ | ------------- | ------------- | -------------
**`RECEIVING_ADDRESS`** | `STRING` | The receiving address for IOTA tokens | 
**`SEED_ADDRESS`** | `STRING` | The seed address for the IOTA tokens | 


