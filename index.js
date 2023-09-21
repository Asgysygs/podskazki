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












import _ from 'lodash'; 
export default function solution(content){

//step1
    const data = content.trim().split('\r\n').splice(1).map((row)=> row.split(';'));
 
  
  console.log(`Count: ${data.length}`);

  // step2
  const cities = data.map((el) => el[2])

  console.log(`Cities: ${cities.join(', ')}`);


  // step3

  const salarey = _.max(data.map((el) => Number(el[5].split( ' ')[0])))
  console.log(`Maximum salary: ${salarey}`)


   // step 4
   


   const graduated = data.filter((el) => el[6].toLowerCase().includes('высшее'))

   console.log(`Graduated: ${graduated.length}`)


   // step5


   const companyTypes = _.uniq(data.map((el) => el[0].split( ' ')[0]))
   

   console.log(`Company types: ${companyTypes.join(', ')}`)
}



// END