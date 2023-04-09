<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff">
      <q-header elevated class="bg-primary">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title class="text-white">Área do Cliente</q-toolbar-title>
          <q-space />
          <!-- <q-btn flat dense round icon="settings" aria-label="Settings" to="/settings" /> -->
          <!-- <q-btn stretch flat label="Link" /> -->
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="500" bordered>
        <q-scroll-area class="fit">
          <q-list>

            <q-item to="/costumer" exact>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Início</q-item-label>
              </q-item-section>
            </q-item>

            <q-item to="/costumer/coupon" exact>
              <q-item-section avatar>
                <q-icon name="payments" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Meus Cupons</q-item-label>
              </q-item-section>
            </q-item>

            <!-- <q-item >
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Meus Dados</q-item-label>
              </q-item-section>
            </q-item> -->

            <q-separator />

            <q-item to="/login">
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Sair</q-item-label>
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from 'vue'

const $q = useQuasar()
$q.dark.set(false)

const drawer = ref(false)
</script>


<style scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: 0;
}

.login-image {
  z-index: 1;
}

.bg-auth {
  background-color: #F0F4F3;
  background-image: url("src/assets/login/bg-auth.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
