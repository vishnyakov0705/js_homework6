const company = {
  name: 'Велика Компанія',
  type: 'Головна компанія',
  platform: 'Платформа для продажу квитків',
  sellsSolution: 'Рішення для продажу квитків',
  clients: [
    {
      name: 'Клієнт 1',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків',
      partners: [
        {
          name: 'Клієнт 1.1',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
        },
        {
          name: 'Клієнт 1.2',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
          partners: [
            {
              name: 'Клієнт 1.2.3',
              type: 'subSubCompany',
              uses: 'Рішення для продажу квитків',
              sells: 'Рішення для продажу квитків',
            }
          ]
        }
      ]
    },
    {
      name: 'Клієнт 2',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків'
    }
  ]
};

function findValueByKey(companyObj, companyName) {
  // Перевіряємо наявность компанії з потрібним ім'ям
  if (companyObj.name === companyName) {
    return companyObj;
  }
  
  // Перевіряємо вкладених клієнтів (subCompany)
  if (companyObj.clients) {
    for (const client of companyObj.clients) {
      const result = findValueByKey(client, companyName);
      if (result) {
        return result;
      }
    }
  }

  // Перевіряємо партнерів (subSubCompany)
  if (companyObj.partners) {
    for (const partner of companyObj.partners) {
      const result = findValueByKey(partner, companyName);
      if (result) {
        return result;
      }
    }
  }

  // Якщо нічого не знайдено
  return null;
}

// Виклик функції
const companyName = 'Клієнт 1.2.3';
const companyInfo = findValueByKey(company, companyName);
console.log(companyInfo);