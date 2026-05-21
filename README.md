# Образовательная платформа "Вундеркинд"

Полнофункциональная веб-платформа для детского образовательного центра.

## 📍 Проект сохранен на рабочем столе в папке: `Wunderkind_Platform`

## 🚀 Быстрый старт:

### Вариант 1: Открыть сайт напрямую
1. Откройте папку `Wunderkind_Platform\frontend\`
2. Дважды кликните на файл `index.html`
3. Сайт откроется в вашем браузере

### Вариант 2: Запустить с Docker
```bash
# Откройте командную строку в папке проекта
cd C:\Users\Ольга\Desktop\Wunderkind_Platform
docker-compose -f docker/docker-compose.yml up -d
```

### Вариант 3: Ручная установка
1. Установите PostgreSQL
2. Запустите скрипты из `database\`
3. В `backend\` выполните: `npm install && npm start`
4. Откройте `frontend\index.html`

## 🔑 Тестовые учетные записи:

- **Администратор:** admin@wunderkind.ru / admin123
- **Учитель:** teacher1@wunderkind.ru / teacher123  
- **Родитель:** parent1@wunderkind.ru / parent123
- **Ученик:** student1@wunderkind.ru / student123

## 📁 Структура проекта:

```
Wunderkind_Platform/
├── backend/          # Node.js/Express API
├── frontend/         # Веб-интерфейс
├── database/         # SQL скрипты
├── docker/           # Docker конфигурации
├── README.md         # Эта документация
├── QUICK_START.md    # Быстрый старт
└── DEPLOY.md         # Инструкции по деплою
```

## 🌐 Открыть сайт:
Просто откройте файл: `frontend\index.html` в любом браузере!