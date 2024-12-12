<template>
  <SectionWrapper sectionTitle="Tech Expertise" >
    <ResumeExpertise />
  </SectionWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SectionWrapper from '@/components/SectionWrapper.vue';
import ResumeExpertise from '@/components/ResumeExpertise.vue';

export default defineComponent({
  name: 'ExpertiseView',
  components: {
    ResumeExpertise,
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