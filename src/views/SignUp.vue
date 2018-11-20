<template>
  <div class="login text-center">
    <h2> Sign In </h2>
    <input type="text" placeholder="Email" class="form-control" v-model="email"/><br/>
    <input type="password" placeholder="Password" class="form-control" v-model="password"/><br/>
    <button class="btn" @click="signUp">Sign Up</button>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase';

@Component
export default class SignUp extends Vue {
  email = '';
  password = '';

  async signUp() {
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
      this.$router.push({name : 'login'});
    } catch (error) {
      alert(`error ${error}`);
    }
  }
}
</script>

<style scoped>
  .login {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 5px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
