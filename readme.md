GoIT Node.js Project PRO TEST

View the website at: https://team-project-protest.netlify.app/

Команди:

- npm start — старт сервера в режимі production
- npm run dev — старт сервера в режимі розробки (development)
- npm run lint — запустити виконання перевірки коду з eslint, необхідно виконувати перед кожним PR та виправляти всі помилки лінтера
- npm lint:fix — та ж перевірка лінтера, але з автоматичними виправленнями простих помилок

пакети у проекті:

bcryptjs - для засолювання паролів.
cookie-session - для забезпечення сеансу на основі файлів cookie.
cors -  робить безпечні перехресні запити та передачі даних між web-браузерами та web-серверами.
cross-envг - робить так, що ви можете мати одну команду, не турбуючись про належне налаштування чи використання змінної середовища для платформи.
dotenv - зберігає конфігурації в середовищі окремо від коду.
express - веб-фреймворк для програм Node.js
express-session - читає та записує файли cookie.
jimp - оброблює зображення.
joi - для валідації прийнятих даних
jsonwebtoken - для шифрування та розшифровувати jwt-токени.
localStorage -  запускає модульні тести для модулів браузера-y у вузлі.
mongoose - для застосування структурованої схеми до колекції MongoDB.
morgan - проміжний компонент для протоколювання запитів на сервер.
multer - можливість завантаження аватарки користувача.
nanoid - генератор ідентифікаторів.
passport - для автентифікації запитів.
passport-google-oauth2 - дозволяє автентифікуватися за допомогою Google.
sendGrid - сервіс для верифікації email користувача після реєстрації.
swagger-ui-express - дозволяє обслуговувати автоматично згенеровані swagger-ui документи API з Express на основі swagger.jsonфайлу.

REST API підтримує наступні маршрути:

@ POST / api / auth /register - pеєстрація користувача
@ POST / api / auth /login - авторизація користувача
@ POST / api / auth /logout - припинення сеансу зареєстрованого користувача
@ GET  / api / test /:type - відображає питання за типом "tech" або "theory"
@ POST / api / test /results - надсилає результати тестування

Додаткові можливості:

@ GET / api / auth / current - дані поточного користувача 
@ GET / api / auth / google - авторизація за допомогою google




<!-- ## GoIT Node.js Course Template Homework

Виконайте форк цього репозиторію для виконання домашніх завдань (2-6)
Форк створить репозиторій на вашому http://github.com

Додайте ментора до колаборації

Для кожної домашньої роботи створюйте свою гілку.

- hw02
- hw03
- hw04
- hw05
- hw06

Кожна нова гілка для др повинна робитися з master

Після того, як ви закінчили виконувати домашнє завдання у своїй гілці, необхідно зробити пулл-реквест (PR). Потім додати ментора для рев'ю коду. Тільки після того, як ментор заапрувить PR, ви можете виконати мердж гілки з домашнім завданням у майстер.

Уважно читайте коментарі ментора. Виправте зауваження та зробіть коміт у гілці з домашнім завданням. Зміни підтягнуться у PR автоматично після того, як ви відправите коміт з виправленнями на github
Після виправлення знову додайте ментора на рев'ю коду.

- При здачі домашньої роботи є посилання на PR
- JS-код чистий та зрозумілий, для форматування використовується Prettier

### Команди:

- `npm start` &mdash; старт сервера в режимі production
- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок -->


