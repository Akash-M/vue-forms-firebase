<template>
  <div class="login text-center">
    <h2> Sign In </h2>
    <input type="text" placeholder="Email" class="form-control" v-model="email"/><br/>
    <input type="password" placeholder="Password" class="form-control" v-model="password"/><br/>
    <button class="btn" @click="signIn">Login</button>
    <p>Don't have an account? Create one
      <router-link to="signup">here!</router-link>
    </p>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase';

@Component
export default class Login extends Vue {
  email= '';
  password= '';

  async signIn() {
    try {
      await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
      const user = firebase.auth().currentUser;
      const token = await user.getIdToken();
      localStorage.setItem('token', token);
      this.$router.push({ name: 'home' });
    } catch (err) {
      alert(`error authenticating ${err.message}`);
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
