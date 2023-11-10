<template>
  <div class="books">
    <img class="icons" src="~@/assets/images/rabbit.png"/>
    <h2>
      리팩토링으로 이어진 방법론과 도서들
    </h2>

    <p>협업개발에 필요한 인사이트는<br/>
      책에 가장 고효율로 집약되어있다고 생각합니다.<br/>
      읽은 책들과 적용사례입니다.<br/>
    </p>

    <p>
      <br/>
      - 적용프로젝트: WiseAI<br/>
      - 문제상황과 적용한 방법론<br/><br/>
      (1) 길지만 쪼개기 힘든 코드의 가독성을 위한 수단이 필요<br/>
      <bold>Modern Java In Action</bold>
      <br/>
      Java 1.8 버전부터 도입된<br/>
      함수형 인터페이스 및 람다를 활용해,<br/>
      코드의 간결함과 가독성을 확보<br/><br/>

      (2) 디자인패턴 도입 전 불필요한 코드중복<br/>
      <bold>Java 객체지향 디자인패턴(정인상)</bold>
      <br/>
      유지보수의 용이함을 위해 전략패턴 적용,<br/>
      반복되는 로직들은 추상, 인터페이스화,<br/>
      코드 확장시 작업시간 및 테스트시간 축소<br/><br/>
      (3) 불필요한 쿼리요청 과다, 과도하게 긴 트랜잭션<br/>
      <bold>Object(조영호)</bold>
      <br/>
      과도한 연관관계로 발생된 N+1 문제로 인한<br/>
      성능저하를 개선할 방법 조사결과<br/>
      - 1. 기존코드를 QueryDsl로 가져와
      <br/>불필요한 관계는 끊어서 쿼리실행<br/>
      - 2. 새로 설계하는 엔티티들은<br/>
      (개념상 하나의 객체로 보는 경우가 아니라면)<br/>
      객체참조 연관관계 대신 Id를 참조하도록 적용<br/>


    </p>

  </div>
</template>

<script>
export default {
  name: "Books",
  props: {
    presents: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.books {
  padding-top: 32px;
  padding-bottom: 50px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  color: #295138;
  cursor: pointer;

  a {
    text-decoration-line: none;
    color: #202121;
  }

  p {
    line-height: 24px;

    &.black {
      color: #202121;
    }
  }


}
</style>
