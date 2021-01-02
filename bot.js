require('./config/alias');
require("dotenv").config();
const Commando = require("discord.js-commando");
const command_group = require("./config/command_group");

let { PREFIX, BOT_OWNER, SUPPORT_SERVER_LINK, TOKEN } = process.env;

const bot = new Commando.Client({
  commandPrefix: PREFIX,
  owner: BOT_OWNER.split(","),
  invite: SUPPORT_SERVER_LINK,
});

const ready = require("./eventHandlers/ready");
const shardReady = require("./eventHandlers/shardReady");
const shardError = require("./eventHandlers/shardError");
const shardReconnecting = require("./eventHandlers/shardReconnecting");
const shardResume = require("./eventHandlers/shardResume");
const shardDisconnect = require("./eventHandlers/shardDisconnect");

// Config Multiple Language
var i18next = require("i18next");
var Backend = require("i18next-node-fs-backend");
var SyncBackend = require("i18next-sync-fs-backend");

i18next.use(Backend);
i18next.use(SyncBackend);
i18next.init({
  lng: "en",
  fallbackLng: "vi",
  preload: ["en", "cat"],
  ns: ["translation", "emoji", "config"],
  defaultNS: "translation",
  debug: false,
  initImmediate: false,
  backend: {
    loadPath: "./locales/{{lng}}/{{ns}}.json",
    jsonIndent: 2,
  },
});

bot.registry.registerDefaultGroups();
bot.registry
  .registerDefaultTypes()
  .registerDefaultGroups()
  .registerDefaultCommands({
    help: true,
    prefix: false,
    eval: false,
    ping: true,
    commandState: false,
    unknownCommand: false,
  });
bot.registry.registerGroups(command_group);
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on("ready", async () => {
  await ready.main(bot);
});

bot.on("commandError", (cmd, err) => {
  if (err instanceof Commando.FriendlyError) return;
  console.error(`Error in command ${cmd.groupID}:${cmd.memberName}`, err);
});

bot.on("shardReady", async (id, unavailableGuilds) => {
  await shardReady.main(id, unavailableGuilds);
});

bot.on("shardError", async (error, shardID) => {
  bot.shard.send({
    type: "error",
    shardID: shardID,
  });
});

bot.on("shardDisconnect", async (event, id) => {
  await shardDisconnect.main(event, id);
});

bot.on("shardReconnecting", async (id) => {
  await shardReconnecting.main(id);
});

bot.on("shardResume", async (id, replayedEvents) => {
  await shardResume.main(id, replayedEvents);
});

bot.login(TOKEN);
