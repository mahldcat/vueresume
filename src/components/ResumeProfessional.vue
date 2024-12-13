<template>
    <div class="row banda" v-if="loading">
      <div class="col-1">Loading...</div>
    </div>
    <div class="row banda" v-if="error">
      <div class="col-1">{{ error }}</div>      
    </div>
    <template v-if="experience">
        <div v-for="(exp, index) in experience.jobExperience" :key="index" :class="getClass(index)">
            <div class="col-2">
                {{exp.startDate}}-{{exp.endDate}} {{exp.companyName}}<br/> 
                {{exp.jobTitle}}<br/> 
                {{exp.teamName}}
            </div>
            <div class="col-10">
                <div v-for="(values,key) in exp.jobFunctions" :key="key">
                    <p>{{ key }}</p>
                    <ul>
                        <li v-for="(val,idx) in values" :key="idx">{{ val }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </template>
</template>

<script lang="ts">
import { defineComponent ,computed,onMounted  } from 'vue';
import { useStore } from 'vuex';
import {Experience} from '@/data';

export default defineComponent({
  name: 'ResumeProfessional',
  components: {
  },
  methods: {
    getClass(index: number): string {
      return index % 2 === 0 ? 'row banda' : 'row bandb';
    },
  },
  setup(){
    const store = useStore();

    const experience = computed<Experience | null>(() => store.getters.experience);
    const loading = computed(() => store.getters.loading);
    const error = computed(() => store.getters.error);

    const fetchExperience = () => {
      if(!experience.value){
        store.dispatch('fetchExperience');
      }
    };

    onMounted(() => {
        fetchExperience()
    });

    return { experience, loading, error, fetchExperience };    
  }
});
</script>

<style scoped>
  .banda {
      padding-left: 30px;    
      padding-top: 5px;
      padding-bottom: 5px;
      background-color: #F5F5F5;
  }
  .bandb {
      padding-left: 30px;    
      padding-top: 5px;
      padding-bottom: 5px;
      background-color: #FFFAFA;			
  }
</style>