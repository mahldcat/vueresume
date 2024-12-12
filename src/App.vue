<template>

  <div class="main">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Resume</a>
        <button class="navbar-toggler" type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
                <router-link to="/" class="nav-link" active-class="active" exact-active-class="active" aria-current="page">
                  Professional Experience
                </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/expertise" class="nav-link" active-class="active" exact-active-class="active" aria-current="page">
                  Tech Skills
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <ResumeHeader/>
    <router-view />
  </div>
</template>

<script lang="ts">
  import { defineComponent,ref } from 'vue';
  import ResumeHeader from '@/components/ResumeHeader.vue';

  export default defineComponent({
    name: 'App',
    components: {
      ResumeHeader,
    },
  });
</script>


<style scoped>
 .main{
  margin-left: 10px;
  margin-top: 10px;
 }

</style>
