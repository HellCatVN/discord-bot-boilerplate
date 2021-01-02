exports.main = async function(bot) {
  try {
    console.log(`Logged in as ${bot.user.tag}!`);
  } catch (e) {
    console.log(e);
  }
};