<template>
  <div>
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush" >
        <li class="list-group-item"
            v-for="section in sections"
            :class="{ 'current-section': (currentIndex === section.index)}"
            @click="$emit('index', section.index)">
          {{ section.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SectionPanel extends Vue {
  @Prop({ required: true, type: [] })
  sections: string[];
  @Prop({ required: true, type: Number })
  currentIndex: number;
}
</script>

<style scoped>
.current-section {
  border: 1px solid orange !important;
}
.list-group-item:hover {
  cursor: pointer;
}
</style>
