#!/usr/bin/env node

const { program } = require('commander'); // Commander.js для обробки аргументів
const express = require('express'); // Express.js для створення сервера
const http = require('http'); // Вбудований модуль для роботи з HTTP

// Налаштування аргументів командного рядка
program
  .requiredOption('-h, --host <host>', 'Адреса сервера')
  .requiredOption('-p, --port <port>', 'Порт сервера')
  .requiredOption('-c, --cache <path>', 'Шлях до директорії з кешем');

program.parse(process.argv); // Парсимо аргументи

const options = program.opts(); // Отримуємо обʼєкт з опціями

// Перевірка обовʼязкових параметрів
if (!options.host || !options.port || !options.cache) {
  console.error('Помилка: не задано обовʼязковий параметр.');
  process.exit(1);
}

// Створення веб-сервера за допомогою Express.js
const app = express();

app.get('/', (req, res) => {
  res.send('Сервер працює!');
});

// Створення і запуск HTTP-сервера
const server = http.createServer(app);

server.listen(options.port, options.host, () => {
  console.log(`Сервер запущено на http://${options.host}:${options.port}`);
  console.log(`Кешована директорія: ${options.cache}`);
});
