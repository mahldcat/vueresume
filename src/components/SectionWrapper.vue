<template>
    <div class="row majorrow">
        <div class="col">
            <p class="h4">{{ sectionTitle }}</p>
        </div>
    </div>
    <slot>No child content</slot>
</template>

<script lang="ts">
  import { defineComponent} from 'vue';

  export default defineComponent({
    name: 'SectionWrapper',
    props:{
        sectionTitle:{
            type: String,
            required:true,
        }
    },
  });
</script>

<style lang="css" scoped>
    .majorrow {
        padding-left: 15px;
        background-color: gray;
        padding-top: 7px;
        padding-bottom: 5px;
    }
</style>