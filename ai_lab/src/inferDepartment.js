import rules from "../src/data/rules";

export function inferDepartment(data) {
  for (const rule of rules) {
    if (rule.condition(data)) {
      return rule.result;
    }
  }
  // Якщо жодне правило не застосовується, повертаємо дефолтну кафедру
  return "Кафедра комп'ютерних наук";
}
