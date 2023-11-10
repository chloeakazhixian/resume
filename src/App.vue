<template>
  <div id="chloe">
    <Profile/>
    <Skills/>
    <Books/>
    <Licenses/>
  </div>
</template>

<script>
import Profile from "./components/Profile.vue";
import Skills from "./components/Skills.vue";
import Books from "./components/Books.vue";
import Licenses from "@/components/Licenses.vue";

export default {
  name: "App",
  components: {
    Profile,
    Skills,
    Books,
    Licenses,
  },
  data() {
    return {
      isOpen: false,
      presents: [],
      selectedPresent: {},
    };
  },
};
</script>

<style>
@font-face {
  font-family: 'ChosunGu';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunGu.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

button {
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  font: inherit;
}

* {
  box-sizing: border-box;
}

#chloe {
  font-family: 'ChosunGu', sans-serif;
  max-width: 460px;
  margin: 0 auto;
  font-size: 13px;
  color: #202121;
  background-color: #fffdf9;
}

h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #295138;
}

bold {
  font-weight: bold;
}

.icons {
  width: 100px;
  margin-top: 35px;
  margin-bottom: 30px;
}
</style>
