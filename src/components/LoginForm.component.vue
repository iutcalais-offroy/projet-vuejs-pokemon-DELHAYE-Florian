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
          <n-button type="primary">Se connecter</n-button>
          <p>Pas de compte ? <a @click="activeTab = 'register'">S'inscrire</a></p>
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
          <n-button type="primary">S'inscrire</n-button>
          <p>Déjà inscrit ? <a @click="activeTab = 'login'">Se connecter</a></p>
        </n-form>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { NCard, NTabs, NTabPane, NForm, NFormItem, NInput, NButton } from 'naive-ui';

const activeTab = ref('login');
const loginEmail = ref('');
const loginPassword = ref('');
const registerEmail = ref('');
const registerPassword = ref('');
const registerPasswordConfirm = ref('');
</script>

<style scoped>
.login-container, .login, .register {
    display: flex;
    flex-direction: column;
}
</style>