<template>
    <SectionWrapper sectionTitle="Education" >
      <ResumeEducation />
    </SectionWrapper>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import SectionWrapper from '@/components/SectionWrapper.vue';
  import ResumeEducation from '@/components/ResumeEducation.vue';
  
  export default defineComponent({
    name: 'ExpertiseView',
    components: {
      ResumeEducation,
      SectionWrapper
    },
  });
  </script>
  
  <style scoped>
    .banda {
        padding-left: 30px;    
        padding-top: 5px;
        padding-bottom: 5px;
        background-color: #F5F5F5;
    }
  </style>