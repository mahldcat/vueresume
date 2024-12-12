<template>

  <div class="main">
    <ResumeNavBar :navBarLinks="navData" />
    <ResumeHeader/>
    <router-view />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import ResumeHeader from '@/components/ResumeHeader.vue';
  import ResumeNavBar from './components/ResumeNavBar.vue';
  import { NavBarData } from './data/NavBarData';

  export default defineComponent({
    name: 'App',
    components: {
      ResumeNavBar,
      ResumeHeader,
    },
    data() {
      return {
        navData: [
          { name: 'Professional Experience', path: '/' },
          { name: 'Tech Skills', path: '/expertise' },
        ] as NavBarData[],
      }
    },
  });
</script>


<style scoped>
 .main{
  margin-left: 10px;
  margin-top: 10px;
 }

</style>
