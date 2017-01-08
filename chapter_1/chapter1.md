# 챕터 1 : 좋은 소프트웨어 만들기

* 자바스크립트 함수는 다른 함수 내부에 충접해서 사용가능, 스코프를 다스리는 중요한 수단
* 자바스크립트 함수가 일급 객체이다.
  * 일급객체란 인자로 전달, 함수로 반환, 변수로 할당 자료구조로 저장할 수 있다는 의미
  ```javascript
  var aaa = function() {}; //변수로 할당
  var bbb = function(func) {return function() {}};  //결과로 반환
  bbb(aaa) //인자로 전달
  ...
  ```
* 자바스크립트에 오버로딩 개념은 함수의 arguments를 보고 여기에 웜가 맞추는 행위
  ```javascript
  line.x = function(funcToGetX) {
      if (arguments.length) return getX;
      getX = funcToGetX;
      return line;
  }
  ```

* 덕타이핑
  * 생성자 함수로 객체를 만들어서 사용하는 방식
  * 오리처럼 생겨서 오리처럼 걷고 오리처럼 꽥꽥 소리를 낸다면 그건 오리다.라는 속담에서 유래
  ```javascript
  function XYPair(x,y) {
      this.x = x;
      this.y = y;
  }

  var objectData = [
      new XYPair(10,130),
      new XYPair(100,60),
      new XYPair(190,160),
      new XYPair(280,10)
  ];

  //판별
  if (something instanceof XYPair)
  //그런데 이게 자바스크립트에서는 과연 필요할까?
  //자바스크립트는 다른 자바나 c#과 같이 명시적인 데이터 타입이 아니기 때문에 굳이 위와 같이 판별할 필요는 없음
  //그래서 x,y의 프로퍼티가 존재하는 여부만 체크하면 된다. 
  if ('x' in something)
  if (something.hasOwnProperty('x'))
  ```
* 클로저,this 다 중요하다! 제대로 알자
* this는 함수를 호출한 객체를 참조한다!!
* 자바스크립트는 싱글 스레드로 움직인다.
  * 이떤 이벤트가 끝나자마자 실행할 함수를 큐에 넣는다.
  * https://developer.mozilla.org/ko/docs/Web/JavaScript/EventLoop
  ```javascript
  function a() {
      for (var i=0; i < 10000000; i++) {

      }

      console.log(100);
  }

  function b() {
      console.log(200);
  }

  setTimeout(b, 0);
  a();

  //출력순서는 100,200
  ```
* 자바스크립트 모듈이 아니다. 
  * 예전에는 스크립트 파일을 하나만 사용했지면 요즘은 여러 스크립트 파일을 다 같이 사용하고 있다.
  * 자바스크립트를 캡슐화한 모듈로 만들어서 써야한다!
* 스코프틑 중첩 함수로 다스린다.
* 규약을 지켜서 코딩을 하자!

## 소프트웨어 공학 원칙

### SOLID
### DRY 원칙

## 바르게 유지되는 코드 작성

### 단위테스트
### 테스트 주도 개발
