export function findBestDepartment(decision) {
  if (decision.interest === "наукова робота") {
    return findBestResearchDepartment(decision);
  } else if (decision.interest === "штучний інтелект") {
    return findBestAIResearchDepartment(decision);
  } else if (decision.interest === "програмування") {
    return findBestPracticalProgrammingDepartment(decision);
  } else if (decision.interest === "електроніка") {
    return findBestElectronicsDepartment(decision);
  }
  return "Загальна кафедра для різних напрямків";
}

// Наукова робота
function findBestResearchDepartment(decision) {
  if (decision.math === "високий") {
    if (decision.avgScore >= 180) {
      return decision.research === "так"
        ? "Кафедра математичного моделювання"
        : "Кафедра прикладної математики";
    }
    return "Кафедра статистики та аналізу даних";
  }
  if (decision.math === "середній") {
    return decision.physics === "високий"
      ? "Кафедра обчислювальної фізики"
      : "Кафедра обчислювальної математики";
  }
  return "Кафедра базової математики";
}

// Штучний інтелект
function findBestAIResearchDepartment(decision) {
  if (decision.math === "високий" && decision.physics === "високий") {
    return "Кафедра ШІ в робототехніці";
  }
  if (decision.math === "високий") {
    return "Кафедра машинного навчання";
  }
  if (decision.math === "середній") {
    return "Кафедра обчислювального інтелекту";
  }
  return "Кафедра основ ШІ";
}

// Програмування
function findBestPracticalProgrammingDepartment(decision) {
  if (
    decision.programmingKnowledge === "просунутий" &&
    decision.avgScore >= 175
  ) {
    return "Кафедра комп'ютерних наук";
  }
  if (decision.programmingKnowledge === "середній") {
    return "Кафедра інформаційних технологій";
  }
  return "Кафедра основ програмування";
}

// Електроніка
function findBestElectronicsDepartment(decision) {
  if (decision.physics === "високий") {
    return decision.research === "так"
      ? "Кафедра електронних систем"
      : "Кафедра інженерної електроніки";
  }
  if (decision.physics === "середній") {
    return "Кафедра прикладної електроніки";
  }
  return "Кафедра основ електроніки";
}
