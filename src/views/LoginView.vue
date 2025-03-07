<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import logoRubbik from '@/assets/rubbik.png';

  const router = useRouter()
  const username = ref('')
  const password = ref('')
  const error = ref('')

  const login = () => {
    if (username.value === 'admin' && password.value === '1234') {
      localStorage.setItem('auth', 'true')
      router.push('/')
    } else {
      error.value = 'Credenciais inválidas!'
    }
  }
</script>

<template>
  <div class="login-container">
    <div class="login-content">
      <div class="form">
          <img style="width: 237px;" :src="logoRubbik" alt="Logo Futura" />
          <div class="input-group">
            <v-text-field
              v-model="username"
              label="E-mail"
              density="compact"
              class="input-form"
              autocomplete="new-email"
              autofill="off"
            ></v-text-field>
          </div>
          <div class="input-group">
            <v-text-field
              v-model="password"
              label="Senha"
              type="password"
              density="compact"
              class="input-form"
              autocomplete="new-password"
              autofill="off"
            ></v-text-field>
          </div>

          <v-btn class="btn-form" color="#5c2e74" @click="login">Entrar</v-btn>
      </div>
    </div>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<style scoped>
.login-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-position: center;
  background-size: cover;
  background-image: url('../assets/fundo-login.jpg');
}
.login-content {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #2c1e46cf;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form
{
  height: 500px;
    width: 400px;
    background-color: #fffffff0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 34px;
}
.input-group
{
  width: 100%;
  height: 36px;
}
.input-form {
  display: block;
  width: 100%;
  padding: 10px;
}
.btn-form {
  width: 312px;
}
.error {
  color: red;
}
</style>

