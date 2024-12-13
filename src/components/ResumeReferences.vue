<template>
    <div class="row banda" v-if="loading">
      <div class="col-1">Loading...</div>
    </div>
    <div class="row banda" v-if="error">
      <div class="col-1">{{ error }}</div>      
    </div>
    <template v-if="references">
      <div v-for="(r, index) in references.references" :key="index" :class="getClass(index)">
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
import { useStore } from 'vuex';
import {ProfessionalReferences} from '@/data';

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
    const store = useStore();

    const references = computed<ProfessionalReferences | null>(() => store.getters.references);
    const loading = computed(() => store.getters.loading);
    const error = computed(() => store.getters.error);

    const fetchReferences = () => {
      if(!references.value){
        store.dispatch('fetchReferences');
      }
    };

    onMounted(() => {
      fetchReferences()
    });

    return { references, loading, error, fetchReferences };    
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