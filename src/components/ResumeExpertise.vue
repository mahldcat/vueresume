<template>

    <div class="row banda"  v-if="store.expertise">      
      <div class='col-4'>                
        <p class='h5'>Technology</p>
        <ul>
            <li v-for="(tech, index) in store.expertise.technology" :key="index">
              {{ tech }}
            </li>
        </ul>
      </div>
      <div class='col-4'>                
        <p class='h5'>Languages</p>
        <ul>
          <li v-for="(lang, index) in store.expertise.languages" :key="index">
              {{ lang }}
          </li>
        </ul>
        <p class='h5'>Development Practices</p>
        <ul>
          <li v-for="(dprac, index) in store.expertise.devPractices" :key="index">
              {{ dprac }}
          </li>
        </ul>
      </div>
      <div class="col-4">
        <p class="h5">Hobbies</p>
        <ul>
          <li v-for="(hobby, index) in store.expertise.hobbies" :key="index">
            {{ hobby.name }}
            <ul v-if="hobby.properties && hobby.properties.length">
              <li v-for="(prop, idx) in hobby.properties" :key="idx">
                {{ prop }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
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
import { defineComponent,onMounted  } from 'vue';
import { useResumeStore } from '@/store';

export default defineComponent({
  name: 'ResumeExpertise',
  components: {
  },
  setup(){
    const store = useResumeStore();

    const fetchExpertise = () => {
      if(!store.expertise){
        store.fetchExpertise();
      }
    };
    
    onMounted(() => {
      fetchExpertise()
    });

    return { store, fetchExpertise };    
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
</style>