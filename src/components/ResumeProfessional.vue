<template>
    <template v-if="store.experience">
        <div v-for="(exp, index) in store.experience.jobExperience" :key="index" :class="getClass(index)">
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
    <div class="row banda" v-else-if="store.loading">
      <div class="col-1">Loading...</div>
    </div>
    <div class="row banda" v-else-if="store.error">
      <div class="col-1">{{ store.error }}</div>      
    </div>
    <div class="row banda" v-else>
      <div class="col-1">Unspecified Error...</div>      
    </div>
</template>

<script lang="ts">
import { defineComponent ,onMounted  } from 'vue';
import { useResumeStore } from '@/store';
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
    const store = useResumeStore();

    const fetchExperience = () => {
      if(!store.experience){
        store.fetchExperience();
      }
    };

    onMounted(() => {
        fetchExperience()
    });

    return { store, fetchExperience };    
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