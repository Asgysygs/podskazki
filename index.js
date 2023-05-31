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




// END