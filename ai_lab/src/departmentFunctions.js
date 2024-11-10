export function findBestDepartment(decision) {
  if (decision.interest === "наукова робота") {
    return findBestResearchDepartment(decision);
  } else if (decision.interest === "штучний інтелект") {
    return findBestAIResearchDepartment(decision);
  } else {
    return findBestPracticalDepartment(decision);
  }
}

// Вибір кафедри для наукових досліджень
function findBestResearchDepartment(decision) {
  if (decision.math === "високий") {
    return decision.research === "так"
      ? "Кафедра прикладної математики"
      : "Кафедра статистики та аналізу даних";
  }
  if (decision.math === "середній") {
    return "Кафедра обчислювальної математики";
  }
  if (decision.math === "низький") {
    return "Кафедра базової математики";
  }

  if (decision.physics === "високий") {
    return decision.research === "так"
      ? "Кафедра теоретичної фізики"
      : "Кафедра інженерної фізики";
  }
  if (decision.physics === "середній") {
    return "Кафедра прикладної фізики";
  }
  if (decision.physics === "низький") {
    return "Кафедра основ фізики";
  }

  return generalResearchDepartment();
}

// Кафедра для спеціалістів з ШІ
function findBestAIResearchDepartment(decision) {
  if (decision.math === "високий") {
    return decision.programmingLevel > 7
      ? "Кафедра програмування для ШІ"
      : "Кафедра теоретичних досліджень у галузі ШІ";
  }
  if (decision.math === "середній") {
    return "Кафедра обчислювального інтелекту";
  }
  if (decision.math === "низький") {
    return "Кафедра основ ШІ";
  }
  return "Загальна кафедра для досліджень з ШІ";
}

// Вибір кафедри для практичного застосування
function findBestPracticalDepartment(decision) {
  if (decision.interest === "програмування") {
    if (decision.math === "високий") {
      return "Кафедра комп'ютерних наук";
    } else if (decision.math === "середній") {
      return "Кафедра інформаційних технологій";
    } else {
      return "Кафедра основ програмування";
    }
  }
  if (decision.interest === "електроніка") {
    if (decision.physics === "високий") {
      return "Кафедра електронних систем";
    } else if (decision.physics === "середній") {
      return "Кафедра прикладної електроніки";
    } else {
      return "Кафедра основ електроніки";
    }
  }
  return generalPracticalDepartment();
}

// Загальні кафедри для дослідників та практиків
function generalResearchDepartment() {
  return "Загальна кафедра для досліджень";
}

function generalPracticalDepartment() {
  return "Загальна кафедра для практики";
}
