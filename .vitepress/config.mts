import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'uk-UA',
  title: 'Green Paws LMS',
  description: 'Документація платформи Green Paws LMS — інструкції для адміністраторів, інструкторів та студентів.',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    siteTitle: 'Green Paws LMS — Документація',

    nav: [
      { text: 'Початок роботи', link: '/guide/getting-started' },
      { text: 'Адмін-панель', link: '/admin/dashboard' },
      { text: 'Гід студента', link: '/student/register' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Вступ',
          items: [
            { text: 'Початок роботи', link: '/guide/getting-started' },
            { text: 'Ролі користувачів', link: '/guide/roles' }
          ]
        }
      ],
      '/admin/': [
        {
          text: 'Огляд',
          items: [
            { text: 'Панель інструктора', link: '/admin/dashboard' }
          ]
        },
        {
          text: 'Навчальний контент',
          items: [
            { text: 'Курси', link: '/admin/courses' },
            { text: 'Модулі', link: '/admin/modules' },
            { text: 'Уроки', link: '/admin/lessons' },
            { text: 'Теми', link: '/admin/topics' },
            { text: 'Порядок навчального плану', link: '/admin/curriculum-order' },
            { text: 'Тести та питання', link: '/admin/quizzes' },
            { text: 'Завдання', link: '/admin/assignments' },
            { text: 'Перевірка завдань', link: '/admin/grading' }
          ]
        },
        {
          text: 'Заняття наживо',
          items: [
            { text: 'Когортні сесії', link: '/admin/sessions' },
            { text: 'Вебінари', link: '/admin/webinars' }
          ]
        },
        {
          text: 'Люди та доступи',
          items: [
            { text: 'Ко-інструктори', link: '/admin/co-instructors' },
            { text: 'Групи (когорти)', link: '/admin/groups' },
            { text: 'Студенти', link: '/admin/students' }
          ]
        },
        {
          text: 'Продажі та налаштування',
          items: [
            { text: 'Замовлення та повернення', link: '/admin/orders' },
            { text: 'Аналітика', link: '/admin/analytics' },
            { text: 'Налаштування', link: '/admin/settings' }
          ]
        }
      ],
      '/student/': [
        {
          text: 'Гід студента',
          items: [
            { text: 'Реєстрація та вхід', link: '/student/register' },
            { text: 'Каталог і запис на курс', link: '/student/catalog' },
            { text: 'Проходження курсу', link: '/student/learning' },
            { text: 'Тести та завдання', link: '/student/quizzes-assignments' },
            { text: 'Сертифікати', link: '/student/certificates' },
            { text: 'Вебінари', link: '/student/webinars' }
          ]
        }
      ]
    },

    outline: {
      level: [2, 3],
      label: 'На цій сторінці'
    },

    docFooter: {
      prev: 'Попередня сторінка',
      next: 'Наступна сторінка'
    },

    darkModeSwitchLabel: 'Оформлення',
    lightModeSwitchTitle: 'Перемкнути на світлу тему',
    darkModeSwitchTitle: 'Перемкнути на темну тему',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Догори',
    langMenuLabel: 'Мова',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Пошук',
            buttonAriaLabel: 'Пошук'
          },
          modal: {
            displayDetails: 'Показати деталі',
            resetButtonTitle: 'Скинути пошук',
            backButtonTitle: 'Закрити пошук',
            noResultsText: 'Нічого не знайдено за запитом',
            footer: {
              selectText: 'обрати',
              navigateText: 'навігація',
              closeText: 'закрити'
            }
          }
        }
      }
    },

    docFooterText: 'Green Paws LMS'
  }
})
