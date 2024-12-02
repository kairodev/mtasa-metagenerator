# mtasa-metagenerator
Automatic meta file generator for resources in MTA:SA, use it to optimize your time during development

## Supported file types
| Extension   | Status  |
| :---------- | :--------- | 
| `LUA` | ✅ | 
| `LUAC` | ✅ | 
| `TTF` | ✅ | 
| `EDF` | ✅ | 
| `ODF` | ✅ | 
| `TXD` | ✅ | 
| `DFF` | ✅ | 
| `COL` | ✅ | 
| `XML` | ✅ | 
| `MP3` | ✅ | 
| `WAV` | ✅ | 
| `OGG` | ✅ | 
| `LNG` | ✅ | 
| `FX` | ✅ | 
| `PNG` | ✅ | 
| `JPG` | ✅ | 
| `JPEG` | ✅ | 
| `SVG` | ✅ | 

## Before use

Remember that this script identifies client, server and shared files based on their names, there are pre-defined filters that are:
| Type   | Filter  | Example |
| :---------- | :--------- | :--------- | 
| `Client` | C, Client | nameExampleC.lua |
| `Server` | S, Server | nameExampleServer.lua |
| `Shared` | G | nameExampleG.lua |

## Dependencies
| Name   | Download  |
| :---------- | :--------- | 
| `NodeJS` | https://nodejs.org/en/download/current | 

## Installation
```bash
npm install -g mtasa-metagenerator
```

## Usage

Go to your resource directory and run the following command in cmd/terminal:<br>
Note: You need to have NodeJS installed.

```bash
generatemeta
```

## Author

- Github [@kairodev](https://www.github.com/kairodev)
