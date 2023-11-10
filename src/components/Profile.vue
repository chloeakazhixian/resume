<template>
  <div class="profile">
    <br/>
    <div>
      <br/>
      <h2>🌲자기주도개발자(SDD) 차지현🌲</h2>
      <br/>

      <div class="info">
        SDD: Self-Driven-Developer<br/>
        <a href="tel:050408287208">📞: 0504-0828-7208</a><br/>
        📧: thisis_chloe@naver.com<br/>
        👩‍💻: <a href="https://velog.io/@chloeakazhixian">https://velog.io/@chloeakazhixian</a><br/>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      이 페이지는<br/>
      서버 공부를 목적으로 만들어진 페이지입니다!<br/>
      서버는 제 집에있는 남는 본체를 활용했고,<br/>
      서버에는 도커를 설치해서<br/>
      로컬에서 변경되는 사항을 원격으로 주고받게 됩니다.<br/>
      GitHub Actions로 CICD 를 구축해놓았습니다.<br/>
      로드밸런싱은 적용 전이라,<br/>
      배포중 가끔 서버가 죽을수도 있습니다.<br/>
      양해부탁드립니다.


    </div>
  </div>
</template>

<script>
export default {
  name: "Divider",
  methods: {
    attendance() {
      window.open("https://youtu.be/yU9UULnBt0w");
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 30px;
}

a {
  text-decoration-line: none;
  color: #202121;
}


.profile {
  padding-top: 4px;
  padding-bottom: 68px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
}
</style>
