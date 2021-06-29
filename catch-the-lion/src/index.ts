/**
 * index.ts -> 가장 핵심적인 script 부분.
 * */ 

// parcel 번들러가 CSS를 모듈로써 추가할 수 있도록 해줌
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';

// Named export. 이름을 통해서 내보내기.
import { Game } from './Game';

new Game();