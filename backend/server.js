const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Простые тестовые данные
const testCourses = [
    {
        id: 1,
        title: 'Юный математик',
        description: 'Развитие логики и счета для детей 6-7 лет',
        category: 'Математика',
        duration_hours: 40,
        price: 12000,
        teacher_name: 'Мария Петрова',
        level: 'Начальный'
    },
    {
        id: 2,
        title: 'English Explorer',
        description: 'Английский язык в игровой форме для детей 5-7 лет',
        category: 'Английский',
        duration_hours: 48,
        price: 15000,
        teacher_name: 'Иван Смирнов',
        level: 'Начальный'
    },
    {
        id: 3,
        title: 'Робототехника Lego',
        description: 'Основы программирования для детей 7-10 лет',
        category: 'Робототехника',
        duration_hours: 50,
        price: 18000,
        teacher_name: 'Ольга Козлова',
        level: 'Продвинутый'
    }
];

const testSchedule = [
    {
        id: 1,
        course_title: 'Юный математик',
        teacher_name: 'Мария Петрова',
        start_time: new Date(Date.now() + 86400000).toISOString(),
        end_time: new Date(Date.now() + 86400000 + 3600000).toISOString(),
        room: 'Кабинет 101'
    },
    {
        id: 2,
        course_title: 'English Explorer',
        teacher_name: 'Иван Смирнов',
        start_time: new Date(Date.now() + 172800000).toISOString(),
        end_time: new Date(Date.now() + 172800000 + 3600000).toISOString(),
        room: 'Кабинет 103'
    }
];

// Маршруты API
app.get('/api/courses', (req, res) => {
    res.json(testCourses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = testCourses.find(c => c.id === parseInt(req.params.id));
    if (course) {
        res.json(course);
    } else {
        res.status(404).json({ error: 'Курс не найден' });
    }
});

app.get('/api/schedule', (req, res) => {
    res.json(testSchedule);
});

// Простая аутентификация (для демонстрации)
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    
    // Простая проверка для демонстрации
    if (email && password) {
        const testUsers = {
            'admin@wunderkind.ru': { role: 'admin', name: 'Администратор' },
            'teacher1@wunderkind.ru': { role: 'teacher', name: 'Учитель' },
            'parent1@wunderkind.ru': { role: 'parent', name: 'Родитель' },
            'student1@wunderkind.ru': { role: 'student', name: 'Ученик' }
        };
        
        const user = testUsers[email];
        if (user) {
            res.json({
                token: 'demo_token_' + Date.now(),
                user: {
                    email: email,
                    full_name: user.name,
                    role: user.role
                }
            });
        } else {
            res.status(401).json({ error: 'Неверные учетные данные' });
        }
    } else {
        res.status(400).json({ error: 'Заполните все поля' });
    }
});

// Старт сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
    console.log(`API доступен по адресу: http://localhost:${PORT}`);
    console.log('Доступные маршруты:');
    console.log('  GET  /api/courses');
    console.log('  GET  /api/courses/:id');
    console.log('  GET  /api/schedule');
    console.log('  POST /api/auth/login');
});