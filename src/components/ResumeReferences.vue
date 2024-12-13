<template>
    <div class="row banda" v-if="store.loading">
      <div class="col-1">Loading...</div>
    </div>
    <div class="row banda" v-if="store.error">
      <div class="col-1">{{ store.error }}</div>      
    </div>
    <template v-if="store.references">
      <div v-for="(r, index) in store.references.references" :key="index" :class="getClass(index)">
            <div class="col-2">
              {{ r.name }}
            </div>
            <div class="col-10">
              <p>{{ r.description }}</p>
              <ul>
                <li>Linked In: {{ r.linkedIn }}</li>
                <li>Email: {{ r.email }}</li>
                <li>Phone: {{ r.phone }}</li>
              </ul>
            </div>
        </div>    
    </template>
</template>

<script lang="ts">
import { defineComponent ,computed,onMounted  } from 'vue';
import { useResumeStore } from '@/store';


export default defineComponent({
  name: 'ResumeReferences',
  components: {
  },
  methods: {
    getClass(index: number): string {
      return index % 2 === 0 ? 'row banda' : 'row bandb';
    },
  },
  setup(){
    const store = useResumeStore();

    const fetchReferences = () => {
      if(!store.references ){
        store.fetchReferences();
      }
    };

    onMounted(() => {
      fetchReferences()
    });

    return { store, fetchReferences };    
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