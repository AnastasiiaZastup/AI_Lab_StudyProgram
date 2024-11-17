import React, { useState } from "react";
import { findBestDepartment } from "./departmentFunctions"; // Імпорт функцій для вибору кафедри

function DepartmentForm() {
  const [data, setData] = useState({
    interest: "",
    math: "",
    physics: "",
    research: "",
    avgScore: "", // Середній бал НМТ
    programmingKnowledge: "", // Рівень знань з програмування
  });
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    const department = findBestDepartment(data); // Викликаємо функцію для вибору кафедри
    setResult(department); // Зберігаємо результат
  };

  return (
    <div className="department-form-container">
      <h2>Вибір кафедри для навчання в КПІ</h2>

      <label>
        Основна зацікавленість:
        <select
          onChange={(e) => setData({ ...data, interest: e.target.value })}
        >
          <option value="">- Оберіть -</option>
          <option value="наукова робота">Наукова робота</option>
          <option value="програмування">Програмування</option>
          <option value="електроніка">Електроніка</option>
          <option value="штучний інтелект">Штучний інтелект</option>
        </select>
      </label>

      <label>
        Рівень знань з математики:
        <select onChange={(e) => setData({ ...data, math: e.target.value })}>
          <option value="">- Оберіть -</option>
          <option value="низький">Низький</option>
          <option value="середній">Середній</option>
          <option value="високий">Високий</option>
        </select>
      </label>

      <label>
        Рівень знань з фізики:
        <select onChange={(e) => setData({ ...data, physics: e.target.value })}>
          <option value="">- Оберіть -</option>
          <option value="низький">Низький</option>
          <option value="середній">Середній</option>
          <option value="високий">Високий</option>
        </select>
      </label>

      <label>
        Чи цікавить вас дослідницька діяльність?
        <select
          onChange={(e) => setData({ ...data, research: e.target.value })}
        >
          <option value="">- Оберіть -</option>
          <option value="так">Так</option>
          <option value="ні">Ні</option>
        </select>
      </label>

      <label>
        Середній бал НМТ:
        <input
          type="number"
          min="100"
          max="200"
          value={data.avgScore}
          onChange={(e) => setData({ ...data, avgScore: e.target.value })}
        />
      </label>

      <label>
        Рівень знань з програмування:
        <select
          onChange={(e) =>
            setData({ ...data, programmingKnowledge: e.target.value })
          }
        >
          <option value="">- Оберіть -</option>
          <option value="початковий">Початковий</option>
          <option value="середній">Середній</option>
          <option value="просунутий">Просунутий</option>
        </select>
      </label>

      <button onClick={handleSubmit}>Отримати рекомендацію</button>

      {result && <p>Рекомендована кафедра: {result}</p>}
    </div>
  );
}

export default DepartmentForm;
