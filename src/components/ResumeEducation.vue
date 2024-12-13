<template>
    <div class="row banda" v-if="loading">
      <div class="col-1">Loading...</div>
    </div>
    <div class="row banda" v-if="error">
      <div class="col-1">{{ error }}</div>      
    </div>
    <template v-if="education">
        <div v-for="(ed, index) in education.schools" :key="index" :class="getClass(index)">
          <div class="col-2">{{ ed.name }}</div>
          <div class="col-10">
            <ul>
              <li>{{ ed.degree }}</li>
              <li>{{ ed.field }}</li>
            </ul>

          </div>
        </div>
    </template>
</template>

<script lang="ts">
import { defineComponent ,computed,onMounted  } from 'vue';
import { useStore } from 'vuex';
import {Education} from '@/data';


export default defineComponent({
  name: 'ResumeEducation',

  components: {
  },

  methods: {
    getClass(index: number): string {
      return index % 2 === 0 ? 'row banda' : 'row bandb';
    },
  },

  setup(){
    const store = useStore();

    const education = computed<Education | null>(() => store.getters.education);
    const loading = computed(() => store.getters.loading);
    const error = computed(() => store.getters.error);

    const fetchEducation = () => {
      if(!education.value){
        store.dispatch('fetchEducation');
      }
    };

    onMounted(() => {
      fetchEducation()
    });

    return { education, loading, error, fetchEducation };    
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
  .bandb {
      padding-left: 30px;    
      padding-top: 5px;
      padding-bottom: 5px;
      background-color: #FFFAFA;			
  }
</style>