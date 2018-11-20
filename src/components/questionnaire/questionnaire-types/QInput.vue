<template>
  <div>
    <div class="row">
      <span>{{ questionIndex }}</span>
      <span class="ml-2">{{ title }}</span>
    </div>
    <div class="row ml-2">
      {{ subTitle }}
    </div>
    <div class="row ml-2">
      <input
        type="text"
        v-model="value"
        placeholder="Type here"
        class="form-control"
        :onchange="$emit('value', value)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class QInput extends Vue {
  @Prop({ required: true, type: String })
  title: string;
  @Prop({ required: false, type: String })
  subTitle: string;
  @Prop({ required: true, type: Number })
  questionIndex: string;
  @Prop({ required: true, type: String })
  value: string;
}
</script>

<style scoped>
.form-control {
  border-radius: 0;
}
</style>
