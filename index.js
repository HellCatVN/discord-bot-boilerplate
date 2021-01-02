require('dotenv').config();

const { ShardingManager, ShardClientUtil } = require('discord.js');
const { TOKEN } = process.env;

const manager = new ShardingManager('./bot.js', {
  token: TOKEN
});

manager.on('shardCreate', shard => {
  console.log(`Creating shard ${shard.id}`);
  shard.on('message', msg => {
    if (msg.type === 'error') {
      return shard.manager.createShard(msg.shardID);
    }
  });
});

manager.spawn(2);
