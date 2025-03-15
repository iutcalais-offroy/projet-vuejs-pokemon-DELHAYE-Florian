<template>
  <n-card>
    <n-tabs v-model:value="activeTab">
      <n-tab-pane name="login" tab="Connexion">
        <n-form>
          <n-form-item label="Email">
            <n-input v-model:value="loginEmail" placeholder="Entrez votre email" />
          </n-form-item>
          <n-form-item label="Mot de passe">
            <n-input type="password" v-model:value="loginPassword" placeholder="Entrez votre mot de passe" />
          </n-form-item>
          <n-button type="primary" @click="handleLogin">Se connecter</n-button>
          <p>Pas de compte ? <a @click="activeTab = 'register'">S'inscrire</a></p>
          <p v-if="userStore.errorMessage" class="error">{{ userStore.errorMessage }}</p>
          <p v-if="userStore.successMessage" class="success">{{ userStore.successMessage }}</p>
        </n-form>
      </n-tab-pane>
      <n-tab-pane name="register" tab="Inscription">
        <n-form>
          <n-form-item label="Email">
            <n-input v-model:value="registerEmail" placeholder="Entrez votre email" />
          </n-form-item>
          <n-form-item label="Mot de passe">
            <n-input type="password" v-model:value="registerPassword" placeholder="Entrez votre mot de passe" />
          </n-form-item>
          <n-form-item label="Confirmer le mot de passe">
            <n-input type="password" v-model:value="registerPasswordConfirm" placeholder="Confirmez votre mot de passe" />
          </n-form-item>
          <n-button type="primary" @click="handleRegister">S'inscrire</n-button>
          <p>Déjà inscrit ? <a @click="activeTab = 'login'">Se connecter</a></p>
          <p v-if="userStore.errorMessage" class="error">{{ userStore.errorMessage }}</p>
          <p v-if="userStore.successMessage" class="success">{{ userStore.successMessage }}</p>
        </n-form>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { NCard, NTabs, NTabPane, NForm, NFormItem, NInput, NButton } from 'naive-ui';
import { useUserStore } from '../stores/userStore';

const activeTab = ref('login');
const loginEmail = ref('');
const loginPassword = ref('');
const registerEmail = ref('');
const registerPassword = ref('');
const registerPasswordConfirm = ref('');
const userStore = useUserStore();

const handleRegister = async () => {
  if (registerPassword.value !== registerPasswordConfirm.value) {
    userStore.errorMessage = 'Les mots de passe ne correspondent pas.';
  } else {
    console.log('Register Email:', registerEmail.value);
    console.log('Register Password:', registerPassword.value);
    await userStore.register(registerEmail.value, registerPassword.value);
  }
};

const handleLogin = async () => {
  console.log('Login Email:', loginEmail.value);
  console.log('Login Password:', loginPassword.value);
  await userStore.login(loginEmail.value, loginPassword.value);
};
</script>

<style scoped>
.login-container, .login, .register {
    display: flex;
    flex-direction: column;
}
.error {
    color: red;
}
.success {
    color: green;
}
</style>