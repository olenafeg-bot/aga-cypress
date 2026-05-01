# Використовуємо легкий Node.js образ
FROM cypress/included:15.14.2

# Встановлюємо змінну середовища
ENV NODE_ENV=production

# Робоча директорія
WORKDIR /usr/src/app

# Копіюємо файли залежностей
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# Встановлюємо залежності
RUN npm install --production --silent

# Копіюємо решту коду
COPY . .

# Встановлюємо Cypress (залежно від версії, яку ви хочете)
RUN npx cypress install

# Відкриваємо порт (якщо ваш застосунок має UI або сервер)
EXPOSE 3000

# Надаємо права користувачу node
RUN chown -R node /usr/src/app
USER node

# Команда за замовчуванням
CMD ["npx", "cypress", "run", "--browser", "firefox"]
