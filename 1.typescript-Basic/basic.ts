function add(a: number, b: number) {
  return a + b;
}

const result = add(2, 3);

export {};

// 1. [[원시형 밸류]]

let age: number;
age = 12;
// age = "12" // error

let name: string;
name = "ms";

let isName: boolean;
isName = true;

// 2. [[반드시 타입은 소문자]]

// let age:Number   // 자바스크립트 객체 Number 를 가르킨다.

// 3. [[배열 및 객체]]
// 배열이름:타입[]  으로 지정한다.

let hobbies: string[];
hobbies = ["soccer", "baseball"];

let special: string[] = ["soccer", "baseball"];
console.log(special);

//  객체이름:{
//    프로퍼티이름 : 타입
//    프로퍼티이름 : 타입2 ...
//  }

let person: any; // any 타입으로하면 무엇이든 쓸 수 있다. 하지만, 타입스크립트 사용 이유에 반대되지

person = {
  name: "js",
  age: 32,
};

let animal: {
  //타입의 지정
  name: string; // , 없이 ; 으로 한줄씩 마무리
  age: number;
};

animal = {
  name: "js",
  age: 23,
};

// 배열과 객체의 혼합

let animals: { name: string; age: number }[] = [
  { name: "cs", age: 5 },
  { name: "bs", age: 25 },
  { name: "ks", age: 35 },
];

// [[타입 스크립트의 강력한 타입 추론]]

let course = "React";

//  course = 123  // error

// course 의 값을 "String" 으로 지정하고 변수를 초기화했다.
// 그러므로, course 는 자동으로  course:string 이 된 것이다.
// 그러므로 course 에 number 값인 123 을 넣으면 에러가 발생한다.

// 이렇게, 초기화한 변수의 타입을 추론해, 적용시키는 것이, 타입스크립트의 큰 장점이자, 기능이다.

// 앞으로는 이런식으로, 직접 명명 하기보단, "타입추론" 을 사용해, 처리 하는 것이 더 좋을 것이다.
// 다만 반드시 필요할 때에는 명명할 것이다.

// [[ 여러 타입이 존재하는 변수 생성 ]] - union

// number 와 string 의 타입이 동시에 존재하는 "멀티 타입의 값을 만들자" - union 을 사용하여

let food: string | number = "potato";

food = 3;

// 타입을 여러개 정했기 때문에, 숫자도, 문자도 가능하다.

// * 타입 추론은 안된다.

// [[ 똑같은 타입을 사용하면, 타입 자체를 변수에 넣고, 여러군데 사용하기 - 타입 별칭(Type aliases) ]]

type Person = {
  name: string;
  age: number;
};

const people: Person = {
  name: "js",
  age: 23,
};

const friends: Person[] = [
  { name: "cs", age: 23 },
  { name: "ys", age: 52 },
];

// [[ 함수 ]]

// 파라미터, 결과까지 전부 지정
function moreAdd(a: number, b: number): number {
  return a + b;
}

// 파라미터만 지정, 결과는 추론으로 나오도록
function lessAdd(a: number, b: number) {
  return a + b;
}

// 타입 void

function justPrint() {
  console.log("print");
}

// 마우스르 올려보면, justPring() : void 라는 타입을 볼 수 있다.
//  이는 undefined 와 거의 동일하다고 보면 된다.
// void 타입은, 함수의 "리턴"이 없을 경우 나오는 타입이다.

// [[제네릭]]

function insertAtBeginning(array: any[], value: any) {
  return [value, ...array];
}

const demoArray = [1, 2, 3];
const demoStrArray = ["a", "b", "c"];

const newArray = insertAtBeginning(demoArray, 4);
const stringArray = insertAtBeginning(demoStrArray, "d");

//  ==> 둘 다, 결과값이 any 이다. == 타입스크립트의 도움을 전혀 받을 수 없다.
// 둘 모두의 결과값이, 파라미터의 타입을 따르게 만들 수 있다.

// < > 안에, 타입의 파라미터 같은 것을 만드는 것
function gendricsInsertAtBeginning<T>(array: T[], value: T) {
  return [value, ...array];
}

const gendricsDemoArray = [1, 2, 3];
const gendricsDemoStrArray = ["a", "b", "c"];

const newGendricsArray = gendricsInsertAtBeginning(gendricsDemoArray, 4);
const stringGendricsArray = gendricsInsertAtBeginning(
  gendricsDemoStrArray,
  "d"
);

//  ==> 둘 모두의 결과값이, 파라미터의 값을 따라간다.
//  만약 두개의 파라미터가 서로 타입이 같지 않다면
//  제네릭에 의해, 오류가 발생될 것이다.
//  이는 타입스크립트로 타입검증을 한 것이다.
