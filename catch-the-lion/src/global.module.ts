/*
    현재 image들이 import로 불러올 때, 모듈로써 인식이 되지 않기 때문에 
    이를 global.module.ts라는 파일을 통해 해결.
*/ 
declare module "*.png"