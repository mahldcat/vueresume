<template>
    <template v-if="store.education">
        <div v-for="(ed, index) in store.education.schools" :key="index" :class="getClass(index)">
          <div class="col-2">{{ ed.name }}</div>
          <div class="col-10">
            <ul>
              <li>{{ ed.degree }}</li>
              <li>{{ ed.field }}</li>
            </ul>

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
import { defineComponent,onMounted  } from 'vue';
import { useResumeStore } from '@/store';

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
    const store = useResumeStore();

    const fetchEducation = () => {
      if(!store.education){
        store.fetchEducation();
      }
    };

    onMounted(() => {
      fetchEducation()
    });

    return { store, fetchEducation };    
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