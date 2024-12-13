<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">Resumé</a>
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
                <li v-for="item in navBarLinks" :key="item.path">
                    <router-link :to="item.path" class="nav-link" active-class="active" exact-active-class="active" aria-current="page">
                    {{item.name}}
                   </router-link>
               </li>    
            </ul>
        </div>
        </div>
    </nav>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { NavBarData } from '@/data/NavBarData';

  export default defineComponent({
    name: 'ResumeNavBar',
    components: {
    },
    props:{
        navBarLinks: {
            type: Array as PropType<NavBarData[]>,
            required: true,
        }
    }
  });
</script>
