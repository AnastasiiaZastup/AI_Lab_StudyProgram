// Функція для визначення найкращої кафедри
export function findBestDepartment(decision) {
  if (decision.interest === "наукова робота") {
    return findBestResearchDepartment(decision);
  } else if (decision.interest === "штучний інтелект") {
    return departmentForAIResearch(decision);
  } else {
    return findBestPracticalDepartment(decision);
  }
}

// Функція для визначення кафедри для наукових досліджень
function findBestResearchDepartment(decision) {
  if (decision.math === "високий") {
    return departmentForHighMath(decision);
  }
  if (decision.physics === "високий") {
    return departmentForHighPhysics(decision);
  }
  if (decision.ai === "так") {
    return departmentForAIResearch(decision);
  }
  return generalResearchDepartment(decision);
}

// Функція для кафедри, що спеціалізується на ШІ
function departmentForAIResearch(decision) {
  if (decision.math === "високий" && decision.physics === "високий") {
    return "Кафедра штучного інтелекту та робототехніки";
  }
  return "Кафедра теоретичних досліджень в галузі штучного інтелекту";
}

// Функція для визначення кафедри для практичного застосування
function findBestPracticalDepartment(decision) {
  if (decision.interest === "програмування") {
    return departmentForProgramming(decision);
  }
  if (decision.interest === "електроніка") {
    return departmentForElectronics(decision);
  }
  if (decision.interest === "машинне навчання") {
    return departmentForMachineLearning(decision);
  }
  return generalPracticalDepartment(decision);
}

// Кафедра для студентів з високим рівнем знань з математики
function departmentForHighMath(decision) {
  if (decision.research === "так") {
    return "Кафедра прикладної математики";
  }
  return "Кафедра статистики та аналізу даних";
}

// Кафедра для студентів з високим рівнем знань з фізики
function departmentForHighPhysics(decision) {
  if (decision.research === "так") {
    return "Кафедра теоретичної фізики";
  }
  return "Кафедра інженерної фізики";
}

// Кафедра для програмістів
function departmentForProgramming(decision) {
  if (decision.math === "високий") {
    return "Кафедра комп'ютерних наук";
  }
  return "Кафедра інформаційних технологій";
}

// Кафедра для електроніки
function departmentForElectronics(decision) {
  if (decision.research === "так") {
    return "Кафедра електронних систем";
  }
  return "Кафедра прикладної електроніки";
}

// Кафедра для машинного навчання
function departmentForMachineLearning(decision) {
  if (decision.math === "високий") {
    return "Кафедра машинного навчання та обробки даних";
  }
  return "Кафедра інтелектуальних систем";
}

// Загальні кафедри для дослідників та практиків
function generalResearchDepartment(decision) {
  return "Загальна кафедра для досліджень";
}

function generalPracticalDepartment(decision) {
  return "Загальна кафедра для практики";
}
