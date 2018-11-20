<template>
  <div class="row container mt-4 text-center">
    <div class="col-4" style="min-height: 80px;">
      <section-panel
        :sections="q1.sections"
        :currentIndex="currentIndex"
        v-on:index="currentIndex = $event"
      ></section-panel>
    </div>
    <div class="col-8" v-for="section in q1.sections" :key="section.id" v-if="section.index === currentIndex">
      <div class="row" v-for="question in section.questions" :key="question.id">
        <div v-if="question.type === 'textField'">
          <div>
            <div v-if="question.type === 'textField'" class="row">
              <q-input
                :title="question.title"
                :subTitle="question.subTitle"
                :questionIndex="question.index"
                :value="value"
                v-on:value="value = $event"
              ></q-input>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <button class="btn" @click="save(section.index)">Save</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import QInput from '@/components/questionnaire/questionnaire-types/QInput';
  import { ques1 } from '@/components/questionnaire/templates/q1-template';
  import firebase from 'firebase';
  import SectionPanel from '../components/questionnaire/SectionPanel';

  @Component({
    components: {SectionPanel, QInput }
  })
  export default class Questionnaire extends Vue {
    q1 = ques1;
    value = '';
    currentIndex = 1;

    async save(sectionIndex) {
      const uid = await firebase.auth().currentUser.uid;
      try {
        const storeUrl = uid + '/questionnaire/';
        const res = await firebase.database().ref(storeUrl).set({
          questionnaireId: this.q1.id,
          results: {
            section: {
              index: sectionIndex,
              question: {
                index: 1,
                value: this.value,
              },
            },
          },
        });
        console.log(`saved successfully ${this.value}`);
      } catch (err) {
        console.log(err.message);
        console.log(err.code);
      }
    }
  }
</script>
