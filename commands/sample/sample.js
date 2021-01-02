const commando = require('discord.js-commando');
const { tl, escapeMarkdown } = require('cat-utils');

class TestCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'sample',
      group: 'sample',
      memberName: 'sample',
      description: 'sample',
    });
  }
  async run(msg, args) {
    try {
      await msg.say('this is test command');
      await msg.say(tl.trans('sample', 'vi'));
      await msg.say(tl.trans('sample', 'en'));
      await msg.say(tl.trans('sample_with_value', 'en', {
        value: 10
      }));
      await msg.say(`This is config value: ${tl.config('sample.value')}`);
      return;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = TestCommand;
