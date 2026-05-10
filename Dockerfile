# Використовуємо легкий Node.js образ
<<<<<<< HEAD
FROM node:lts-alpine
=======
FROM cypress/included:15.14.2
>>>>>>> 7a0472adc030ad6c7ce6a9983324846759012aa8

# Встановлюємо змінну середовища
ENV NODE_ENV=production

# Робоча директорія
WORKDIR /usr/src/app

# Копіюємо файли залежностей
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# Встановлюємо залежності
<<<<<<< HEAD
RUN npm install --production --silent && mv node_modules ../
=======
RUN npm install --production --silent
>>>>>>> 7a0472adc030ad6c7ce6a9983324846759012aa8

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
<<<<<<< HEAD
CMD ["npx", "cypress", "run"]
=======
CMD ["npx", "cypress", "run", "--browser", "firefox"]
>>>>>>> 7a0472adc030ad6c7ce6a9983324846759012aa8
