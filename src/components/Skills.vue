<template>
  <div class="skills">
    <img class="icons" src="~@/assets/images/squirrel.png"/>
    <h2>
      사용가능한 기술들
    </h2>
    <br/>

    <br/>

    <div></div>
    <p class="header">
      Java, Spring Boot, Spring MVC
      <br/>
      <br/>
      JPA, Querydsl, MyBatis
      <br/>
      <br/>
      MySql, Oracle
      <br/>
      <br/>
      Junit5, Mockito, PlantUml
      <br/>
      <br/>
      JS(ES6), Vue.js2
      <br/>
      <br/>
      Git, Sourcetree
      <br/>
      <br/>
      Docker, GitHubActions(초급)
      <br/>
      <br/>
      Jira, Confluence

    </p>


  </div>
</template>

<script>
export default {
  name: "skills",
};
</script>

<style lang="scss" scoped>
.v-carousel::v-deep .v-window__next {
  right: 10px;
}

.skills {
  padding-top: 32px;
  padding-bottom: 50px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  color: #295138;
  overflow: hidden;
}
</style>
