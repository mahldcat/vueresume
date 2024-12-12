<template>
  <SectionWrapper sectionTitle="Professional Experience" >
    <ResumeProfessional/>
  </SectionWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ResumeProfessional from '@/components/ResumeProfessional.vue'; 
import SectionWrapper from '@/components/SectionWrapper.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ResumeProfessional,
    SectionWrapper
  },
});
</script>

<style>
</style>
