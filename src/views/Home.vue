<template>
  <div class="container">
    <questionnaire/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase';
import Questionnaire from './Questionnaire';
@Component({
  components: { Questionnaire }
})
export default class Home extends Vue {
  username = null;
  async mounted() {
    this.username = await firebase.auth().currentUser.email;
  }
}
</script>
