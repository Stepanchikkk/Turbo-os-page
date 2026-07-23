import React, { createContext, useContext, useState } from 'react';

const translations = {
  ru: {
    free_version: 'Free версия',
    plus_version: 'Plus версия',
    plus_release: 'от',
    download: 'Скачать',
    changelog: 'Список изменений',
    price: 'Цена',
    discount_if: 'при наличии PLUS от',
    no_roms: 'Нет доступных прошивок',
    official: 'Официальная',
    port: 'Порт',
    off_short: 'Офиц.',
    port_short: 'Порт',
    search_placeholder: 'Поиск устройства...',
    all: 'Все',
    official_plural: 'Официальные',
    ports: 'Порты',
    no_devices: 'Устройства не найдены',
    created_by: 'Создано',
    author: 'Автор:',
    support_title: 'Поддержать проект',
    support_desc: 'Для тех кто хочет помочь проекту',
    buy_plus: 'Купить Plus',
    channel: 'Канал',
    chat: 'Чат',
    message_author: 'Написать автору',
    last_update: 'Обновлено',
    plus_version_title: 'Plus версия',
    buy_plus_title: 'TURBO OS Plus',
    buy_plus_desc: 'Приобретите подписку TURBO OS Plus для получения раннего доступа к новым версиям, приоритетной поддержки и эксклюзивных возможностей.',
    plus_benefits: 'Преимущества Plus:',
    benefit_early: 'Ранний доступ к новым версиям',
    benefit_support: 'Приоритетная поддержка',
    benefit_exclusive: 'Эксклюзивные функции',
    contact_author: 'Свяжитесь с автором для покупки:',
    contact_button: 'Написать в Telegram',
    close: 'Закрыть',
  },
  en: {
    free_version: 'Free version',
    plus_version: 'Plus version',
    plus_release: 'from',
    download: 'Download',
    changelog: 'Changelog',
    price: 'Price',
    discount_if: 'with PLUS from',
    no_roms: 'No firmware available',
    official: 'Official',
    port: 'Port',
    off_short: 'Off.',
    port_short: 'Port',
    search_placeholder: 'Search device...',
    all: 'All',
    official_plural: 'Official',
    ports: 'Ports',
    no_devices: 'No devices found',
    created_by: 'Created by',
    author: 'Author:',
    support_title: 'Support the project',
    support_desc: 'For those who want to help',
    buy_plus: 'Buy Plus',
    channel: 'Channel',
    chat: 'Chat',
    message_author: 'Message author',
    last_update: 'Updated',
    plus_version_title: 'Plus version',
    buy_plus_title: 'TURBO OS Plus',
    buy_plus_desc: 'Purchase a TURBO OS Plus subscription for early access to new versions, priority support, and exclusive features.',
    plus_benefits: 'Plus benefits:',
    benefit_early: 'Early access to new versions',
    benefit_support: 'Priority support',
    benefit_exclusive: 'Exclusive features',
    contact_author: 'Contact the author to purchase:',
    contact_button: 'Message on Telegram',
    close: 'Close',
  },
};

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('ru');
  const t = translations[lang];
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
