<template>
    <div class="row banda" v-if="loading">
      <div class="col-1">Loading...</div>
    </div>
    <div class="row banda" v-if="error">
      <div class="col-1">{{ error }}</div>      
    </div>
    <div class="row banda"  v-else-if="expertise">      
      <div class='col-4'>                
        <p class='h5'>Technology</p>
        <ul>
            <li v-for="(tech, index) in expertise.technology" :key="index">
              {{ tech }}
            </li>
        </ul>
      </div>
      <div class='col-4'>                
        <p class='h5'>Languages</p>
        <ul>
          <li v-for="(lang, index) in expertise.languages" :key="index">
              {{ lang }}
          </li>
        </ul>
        <p class='h5'>Development Practices</p>
        <ul>
          <li v-for="(dprac, index) in expertise.devPractices" :key="index">
              {{ dprac }}
          </li>
        </ul>
      </div>
      <div class="col-4">
        <p class="h5">Hobbies</p>
        <ul>
          <li v-for="(hobby, index) in expertise.hobbies" :key="index">
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
</template>

<script lang="ts">
import { defineComponent,computed,onMounted  } from 'vue';
import { useStore } from 'vuex';
import {Expertise} from '@/data';

export default defineComponent({
  name: 'ResumeExpertise',
  components: {
  },
  setup(){
    console.log("ResumeExpertise.setup()");
    const store = useStore();

    const expertise = computed<Expertise | null>(() => store.getters.expertise);
    const loading = computed(() => store.getters.loading);
    const error = computed(() => store.getters.error);

    const fetchExpertise = () => {
      console.log("fetching expertise from store");
      
      if(!expertise.value){
        store.dispatch('fetchExpertise');
      }
    };
    
    onMounted(() => {
      fetchExpertise()
    });

    return { expertise, loading, error, fetchExpertise };    
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