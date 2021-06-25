/**
 * 이부분이 특이했다!
 * 생각해보니 먼저 컴파일이 이루어진 다음에 실행하기 때문에,
 * typescript가 js 파일을 컴파일 후 생성하고,
 * 결과적으로 hello.js에서는 js 파일이 호출되는 것이다!
 * 결코 ts 파일에서 import 하는 것이 아님을 주의하자!
 * */ 
import add from './util.js';

const value = add(1, 2);
console.log(value);