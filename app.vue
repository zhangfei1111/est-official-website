<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <!-- @font-face {
    font-family: 'MyFont';
    src: url('/assets/fonts/myfont.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  } -->
</template>

<style global lang="scss">
@font-face {
  font-family: 'MyFont';
  src: url('/assets/fonts/myfont.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

html,
body {
  font-size: calc(100vw / 3.75);
  margin: 0;
  padding: 0;
  font-family: 'MyFont'!important;

}
</style>