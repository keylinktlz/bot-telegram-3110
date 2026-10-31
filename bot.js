const { Telegraf } = require('telegraf');

// Thay thế chuỗi bên dưới bằng TOKEN MỚI tinh lấy từ BotFather sau khi bạn đã Revoke token cũ
const BOT_TOKEN = '9022860774:AAFDaiDM30hEOZF_d7B-JJQeYJiroGx8Zy8';

const bot = new Telegraf(BOT_TOKEN);

// Lệnh /start
bot.start((ctx) => {
    ctx.reply('👋 Chào bạn! Bot hệ thống đã khởi động thành công và sẵn sàng hoạt động.');
});

// Khởi động bot
bot.launch();
console.log('Bot Telegram đã khởi động thành công!');

// Kích hoạt dừng an toàn
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
