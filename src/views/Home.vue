<template>
  <div class="container">
    <div class="home" v-if="username">
      Welcome {{ username }}
      <questionnaire/>
    </div>
    <div v-else class="text-center">
      You have not set your username yet. Please set it to continue.
      <input type="text" placeholder="Username" class="form-control text-center" v-model="displayName"/><br/>
      <button class="btn" @click="setUsername">Set username</button>
    </div>
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
  displayName = '';
  async mounted() {
    this.username = await firebase.auth().currentUser.displayName;
  }
  async setUsername() {
    await firebase.auth().currentUser.updateProfile({ displayName: this.displayName, photoURL: null });
    this.username = firebase.auth().currentUser.displayName;
  }
}
</script>
