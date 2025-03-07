<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      location="bottom"
    >
      <template v-slot:activator="{ props }">
       <button class="btn-header-user" v-bind="props">
          <div style="display: flex; flex-direction: column; align-items: start; justify-content: space-between;">
            <span class="user-name">Carla Silva</span>
            <small class="user-profile">Administrador</small>
          </div>
          <v-avatar icon="$vuetify" image="https://images.pexels.com/photos/4219924/pexels-photo-4219924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" size="45"></v-avatar>
       </button>
      </template>

      <v-card min-width="200">
        <v-list>
          <v-list-item
            prepend-avatar="https://images.pexels.com/photos/4219924/pexels-photo-4219924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            subtitle="carla@gmail.com"
            title="JCarla Silva"
          >
            <template v-slot:append>
              <v-btn
                :class="fav ? 'text-red' : ''"
                icon="mdi-star"
                variant="text"
                @click="fav = !fav"
              ></v-btn>
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-btn
              style="width: 100%;"
              color="primary"
              @click="logout"
            >
              Logout
            </v-btn>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const fav = ref(true)
  const menu = ref(false)

   import { useRouter } from 'vue-router'

    const router = useRouter()

    const logout = () => {
      localStorage.removeItem('auth')
      router.push('/login')
    }

</script>

<style scoped>
  .btn-header-user
  {
    height: 60px;
    width: 190px;
    display: flex;
    padding: 10px 12px;
    align-items: start;
    justify-content: space-between;
    background-color: #5c2e74;
  }
  .user-name
  {
    color: #fff;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    max-width: 121px;
  }
  .user-profile
  {
    font-size: 12px;
    color: #cbcbcb;
    text-transform: uppercase;
  }
</style>
