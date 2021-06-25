<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '~bootstrap-v4-rtl';
 *{
   box-sizing: border-box;
 }
  html,body{
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
  }
  .wrapper{
    width: 1440px;
    margin: 0 auto;
  }


  @media (max-width: 320px) {
    .wrapper{
      width: 320px;
    }

  }
  @media (max-width: 375px) and (min-width: 320px) {
    .wrapper{
      width: 320px;
    }

  }
  @media (max-width: 425px) and (min-width: 375px) {
    .wrapper{
      width: 375px;
    }
  }
  @media (max-width: 768px) and (min-width: 425px) {
    .wrapper{
      width: 425px;
    }
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    .wrapper{
      width: 768px;
    }
  }

  @media (max-width: 1440px) and (min-width: 1024px) {
    .wrapper{
      width: 1024px;
    }
  }

</style>
