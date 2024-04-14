#!/usr/bin/env node

import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const fileName = process.argv[2];
const content = fs.readFileSync(path.join(
  __dirname,
  fileName
), 'utf-8');

// BEGIN
//Разделить строки столбы;
const rows = content.trim().split('\r\n');
const data = rows.map((row) => row.split(',').map((el) => el.replace('"', '').replace(' ', '')));
console.log(data);
//найти уникальный элемент
const ports = _.uniq(data.map((el) => el[12]).slice(0, 3))

//найти по значению
const gender = data.filter((el) => el[5] === 'male');
// найти процент и соотношение 
const percent = Math.round(100 * gender.length / data.length)
// найти слово начинающеся на что-то
const names = data.map((el) => el[3]).filter((name) => name.charAt(0) === 'А')
const eliteSeuad = data.map((el) => el.join('').trim(','));
const orc = eliteSeuad[1];









const colorsString = Object.entries(colors)
.reduce((str, [key, value ]) => `${str}${key}: ${value},` , '')
.slice(0,-2);
 console.log(`Все цвета: ${colorsString}`);
// вывести все цвета авто 










// задача про средний пробег всех авто 
const milage = _.mean(data.map((el) => Number(el[4]))) // через lodash 
const avg = data.reduce((acc,el) => acc + Number(el[4]), 0 )/ data.length 
console.log(`Средний пробег: ${avg}`)



// максимальная стоямость 
const maxPrise = _.max(data.map((el) => (el[7])))
console.log(`Стоимость самой дорогой машины: ${maxPrise}`);



//авто с самым ранним годом выпуска 
const oldestCars =_.minBy(data, (el) => Number(el[2])) // через lodash 
const oldCars = data.reduce((acc , el) => (Number(acc[2]) <Number(el[2]) ? acc : el));
console.log(`Самый старый авто: ${oldCars} `);








// выведите все виды замков существ через запятую Сделайте так чтобы имя каждого замка начиналась с большой буквы отсортирйте 
const castle = _.uniq(data.map((el) => el[1].charAt(0).toUpperCase()+el[1].slice(1).toLowerCase().sort()))
console.log(`Castless: ${castle.join(', ')}`);


//существо с самым большым здоровьем 
const larheHp =_.maxBy(data, (el) => Number(el[4]))
console.log(`largest: ${larheHp[2]}` );


// выведите средний арифметичсекий урон для каждого существа в таб если цифр две то их нужно сложить и разделить на два если цифра одна просто вернуть
const avarageDamage = data.reduce((acc, el) => {
  const res = el[3].split('-');
  const avarage = res.length === 1 ? res[0] : _.mean(res.map((item) => Number(item)));
  return{...acc, [el[2]]: avarage };
}, {});
  console.log(`Avarage damage: ${avarageDamage}`);





  // вывести список каротких описаний валют отсортированных в алфовиттном порядке 
 const letterCode = _.uniq(data.map((el) => el[3]).sort())
 console.log(`Curet: ${letterCode.join(', ')}`);
 

 // вывести на экран количество валют стоимость которых лежит в диапазоне от 10 до 30 включительно 
 const counCastle = data.filter((el) => Number(el[4]) >= 10 && Number(el[4]) <= 30)






















import _ from 'lodash'; 
export default function solution(content){

//step1 распарсинг примерный
    const data = content.trim().split('\r\n').splice(1).map((row)=> row.split(';'));
 
  
  console.log(`Count: ${data.length}`); // вывод всех 

  // step2 
  const cities = data.map((el) => el[2])

  console.log(`Cities: ${cities.join(', ')}`); // вывод городов с повторами 


  // step3

  const salarey = _.max(data.map((el) => Number(el[5].split( ' ')[0])))
  console.log(`Maximum salary: ${salarey}`)    // максимальная зарплата 


   // step 4
   


   const graduated = data.filter((el) => el[6].toLowerCase().includes('высшее'))

   console.log(`Graduated: ${graduated.length}`)  // Выведите количество вакансий, в которых обязательнвм требованием является высшее образование. числа где есть слово высшее 


   // step5


   const companyTypes = _.uniq(data.map((el) => el[0].split( ' ')[0]))
   

   console.log(`Company types: ${companyTypes.join(', ')}`)  // Выведите все встречающиеся варианты типов компаний. Обратите внимание, что здесь нужно вывести только уникальные значения без дублей.
}






import _ from 'lodash';
import onChange from 'on-change';
import axios from 'axios';

const validateName = (name) => (name.trim().length ? [] : ['name cannot be empty']);
const validateEmail = (email) => (/\w+@\w+/.test(email) ? [] : ['invalid email']);
const validateField = (fieldname, data) => (fieldname === 'name' ? validateName(data) : validateEmail(data));

export default () => {
  const formHTML = `
    <form id="registrationForm">
      <div class="form-group">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Введите ваше имя" name="name" required>
      </div>
      <div class="form-group">
        <label for="inputEmail">Email</label>
        <input type="text" class="form-control" id="inputEmail" placeholder="Введите email"
        name="email" required>
      </div>
      <input type="submit" value="Submit" class="btn btn-primary" disabled>
    </form>`;

  const formContainer = document.querySelector('.form-container');
  formContainer.innerHTML = formHTML;

  const state = {
    errors: {
      name: [],
      email: [],
    },
    values: {
      name: '',
      email: '',
    },
  };

  const form = document.querySelector('form');
  const submit = document.querySelector('[type="submit"]');

  const hasErrors = () => (_.values(state.errors).reduce((acc, curr) => (curr.length > 0
    ? acc.concat(curr)
    : acc), [])
    .length > 0);

  const watchedState = onChange(state, (path) => {
    const selector = path.split('.')[1];
    const input = document.querySelector(`[name=${selector}]`);
    const isFieldValid = validateField(selector, state.values[selector]).length === 0;
    if (!isFieldValid) {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
    } else {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
    }
    submit.disabled = hasErrors(state);
  });

  form.addEventListener('input', (e) => {
    e.preventDefault();
    const targetName = e.target.name;
    const targetData = new FormData(form).get(targetName);
    watchedState.values[targetName] = targetData;
    watchedState.errors[targetName] = (validateField(targetName, targetData));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    axios.post('/users', state.values)
      .then((response) => {
        document.body.innerHTML = `<p>${response.data.message}</p>`;
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

// END