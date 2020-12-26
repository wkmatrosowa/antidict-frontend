import React from "react";

export function About() {
  return (
    <div>
	  <h2>О проекте</h2>
	  <p>Мы рады приветствовать вас на официальном сайте проекта Antidict. Наш проект посвящён автоматическому распознаванию англоязычных заимствования, экспрессивных форм и намеренных искажений (эрративов) в тексте. В основе нашего механизма лежит многоклассовый классификатор, изначально обученный для определения этих типов слов в корпусе ГИКРЯ. Для обучения распознаванию англоязычных заимствований наш классификатор был обучен на словаре Дьякова. Для классификации эрративов и экспрессивных слов нами были собраны отдельные датасеты, на которых классификатор обучался. Эрративы рассматриваются нами как подкласс слов с экспрессивной окраской, которые также включают в себя слова с экспрессивными аффиксами и мат.</p>
	  <p>Проект представлен студентами магистратуры школы лингвистики Научно-исследовательского университета Высшая Школа Экономики. Разработка проекта проходила в 2019-2020 годах. В данный момент над совершенствованием Antidict трудятся 5 человек: Антон Вахранёв, Алексей Доркин, Ирина Дьячкова, Лидия Остякова и Владислава Смирнова. Надеемся наш проект будет полезен для вас!</p>
	</div>
  );
}