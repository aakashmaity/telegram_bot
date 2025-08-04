const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
dotenv.config();

const TOKEN = process.env.BOT_TOKEN;
const bot = new TelegramBot(TOKEN, {polling: true});


// Listen for any kind of message
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  // console.log(msg);

  bot.sendMessage(chatId, `Received your message, chatId: ${chatId}, msg: ${msg.text}`);
});

// 'match' is the result of executing the regexp above on the text content of the message
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  console.log(match);

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/start/, (msg, match) => {
  const chatId = msg.chat.id;
  const text = chat.text;

  
  bot.sendMessage(chatId, `Hi ${msg.from.first_name}, How can I help you!`);
});
