//test15.js
'use strict'
           //0123456789
let text1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcde';
let text2 =  '  ABC  BCDEF  ABCGHI ABC  JKLMN .... AVC .. QPQ ABC     '

// demo.innerHTML = text1;
// demo.innerHTML = text1.length;

// demo.innerHTML = text1.substring(0,10);
// demo.innerHTML = text1.slice(0,10);  //  서브스트링하고 같음

// demo.innerHTML = text1.substring(10);
// demo.innerHTML = text1.slice(10);

// demo.innerHTML = text1.substr(10); // 잘 안씀 쓰지마셈

// demo.innerHTML = text1.replace('abc','opq'); 
// demo.innerHTML = text1.replace('ABC','opq'); 
// demo.innerHTML = text2.replace('ABC','opq');   // 자바와 다르게 첫번쨰 것만 바뀜
// demo.innerHTML = text2.replaceAll('ABC','opq');   // 자바와 같이 전부 다 바뀜 많이 사용함

// demo.innerHTML = text2.toUpperCase();
// demo.innerHTML = text2.toLowerCase();

// demo.innerHTML = text2.concat('안녕','1234');
// demo.innerHTML = concat('안녕','1234');  오류 주의

// demo.innerHTML = text2.trim();
// demo.innerHTML = text2.trim()+ "abc";
// demo.innerHTML = text2.trimStart()+ "abc"; 
// demo.innerHTML = "abc" + text2.trimEnd()+ "abc";
// demo.innerHTML = "abc" + text2.replaceAll(' ', '')+ "abc";

// demo.innerHTML = text1.charAt(5);
// demo.innerHTML = text1.charCodeAt(26);

// let mbc = text2.split('ABC');
// // demo.innerHTML = mbc;
// // demo.innerHTML = typeof(mbc);

// let temp = '';
// for(let item of mbc) {
//   console.log(item);
//   temp += item;
// }
// demo.innerHTML = temp;

// let title=['지역번호','국번','전화번호']
// let telTemp = '010-3423-2704';

// let tels = telTemp.split("-");

// tels.forEach((tel, i) => {
//   console.log( title[i] +":"+ tel );
// });


// demo.innerHTML = text1.indexOf('a');
// demo.innerHTML = text2.lastIndexOf('A');
// demo.innerHTML = text2.search('A');

// demo.innerHTML = text1.match('asdf')
// demo.innerHTML = text1.includes('asdf')

let price = 100;   //가격
let vat = 0.25;      //부가세
// let total = price * (1+vat);

// let str = '총금액 : ' + total;  억음 부호 사용했음 ~~ 에서 쉬프트 뺴고
let str = `총금액 : ${price * (1+vat)}원`;              //EL표기법(Expression Language) => ${}

demo.innerHTML = str;
