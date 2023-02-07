<template>
  <q-card class="q-ma-xl">
    <div class="row">
      <div class="col-0 col-sm-5 bg-primary rounded-left-borders xs-hide">
        <div class="row full-width q-px-xl q-pb-xl full-height flex flex-center">
          <div class="">
            <div class="text-h4 text-uppercase text-white fredoka" style="min-width: 220px">Criar conta</div>
            <div class="text-white q-my-sm text-subtitle1">Informe seus dados para a criação da sua conta de acesso.
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-7">
        <div class="row q-ml-sm q-mt-sm sm-and-up-hide">
          <div class="col-12 fredoka text-subtitle1">
            <router-link class="text-primary" style="text-decoration: none" to="/">TCC Eng. Sw.
            </router-link>
          </div>
        </div>
        <div class="row q-pa-sm-sm q-pa-md">
          <div class="col-12">
            <q-card-section>
              <div class="q-pt-lg">
                <div class="col text-h6 ellipsis flex justify-center">
                  <div class="text-h4 text-uppercase q-my-none text-primary fredoka">Criar conta</div>
                </div>
              </div>
            </q-card-section>
            <q-card-section>
              <q-form class="q-gutter-md" @submit="submitForm">

                <q-input v-model="form.usuario" label="Nome de usuário" type="text" v-bind="$input"/>
                <q-input v-model="form.senha" label="Senha" type="password" v-bind="$input"/>
                <q-input v-model="form.email" label="Email" type="email" v-bind="$input"/>
                <q-input v-model="form.numeroCelular" label="Contato" type="tel" mask="(###) #####-####" fill-mask="0" reverse-fill-mask v-bind="$input"/>
                <q-btn-toggle
                    v-model="form.tipo"
                    spread
                    class="my-custom-toggle"
                    no-caps
                    rounded
                    unelevated
                    toggle-color="primary"
                    color="white"
                    text-color="primary"
                    :options="[
                      {label: 'Sou cliente', value: 'cliente'},
                      {label: 'Sou parceiro', value: 'parceiro'}
                    ]"
                />
                <q-input v-if="isCliente(form)" v-model="form.nome" label="Nome completo" type="text" v-bind="$input"/>
                <q-input v-if="isCliente(form)" v-model="form.cpf" label="CPF" mask="###.###.###-##" fill-mask="0" reverse-fill-mask type="text" v-bind="$input"/>
                <q-input v-if="isCliente(form)" v-model="form.dataNascimento" label="Data de nascimento" type="date" v-bind="$input"/>
                <q-input v-if="isParceiro(form)" v-model="form.razaoSocial" label="Razão social" type="text" v-bind="$input"/>
                <q-input v-if="isParceiro(form)" v-model="form.nomeFantasia" label="Nome fantasia" type="text" v-bind="$input"/>
                <q-input v-if="isParceiro(form)" v-model="form.cnpj" label="CNPJ" type="text" v-bind="$input"/>
                <q-input v-model="form.cep" label="CEP" mask="#####-###" type="text" v-bind="$input"/>
                <q-input v-model="form.logradouro" label="Logradouro" type="text" v-bind="$input"/>
                <q-input v-model="form.bairro" label="Bairro" type="text" v-bind="$input"/>
                <q-input v-model="form.cidade" label="Cidade" type="text" v-bind="$input"/>
                <q-input v-model="form.estado" label="Estado" type="email" v-bind="$input"/>
                <q-input v-model="form.numero" label="Número" type="number" v-bind="$input"/>
                <div>
                  <q-btn :loading="loading" class="full-width" to="/login" color="primary" label="Enviar" rounded
                         type="submit"></q-btn>
                  <div class="q-mt-lg">
                    <div class="q-mt-sm">
                      Realizar
                      <router-link class="text-primary" to="/login">Login</router-link>
                    </div>
                  </div>
                </div>
              </q-form>
            </q-card-section>
          </div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import {computed, ref} from 'vue';
import {useAuthStore, useCommonStore} from "stores/all";
import {useQuasar} from 'quasar';
import rules from 'src/support/rules/fieldRules';
import {handleErros} from 'src/support/errors/handleErros';
import {showPositive} from 'src/support/helpers/notification';

const $authStore = useAuthStore()
const $commonStore = useCommonStore()
const $q = useQuasar()

const form = ref({
  "tipo": "cliente",
  "nome": null,
  "usuario": null,
  "senha": null,
  "dataNascimento": "2000-01-01",
  "endereco": null,
  "cep": null,
  "email": null,
  "bairro": null,
  "cidade": null,
  "estado": null
})

const loading = computed(() => $commonStore.isLoading)

const isCliente = (form) => form.tipo === 'cliente'
const isParceiro = (form) => form.tipo === 'parceiro'

const submitForm = async () => {
  // console.log(JSON.stringify(form))
  // // try {
  // //   $commonStore.commit('common/ADD_REQUEST')
  // //   await $authStore('authentication/RESET_PASSWORD', {email: email.value})
  // //   showPositive('Um link para redefinir sua senha foi enviado para seu e-mail! O E-mail pode demorar alguns minutos para chegar.')
  // //   loading.value = false
  // // } catch (error) {
  // //   handleErros(error)
  // //   $commonStore.commit('common/ADD_REQUEST')
  // // }
}
</script>
