<template>
  <div class="q-pa-md">

    <div class="row q-col-gutter-md">
      <div class="col-8">

        <!-- CARDS GRANDES NUMEROS -->
        <div class="row">
          <div class="col-6">
            <q-card class="q-mx-md q-pa-lg">
              <div class="text-overline flex-center row">Total de cashback gerado</div>
              <div class="flex flex-center row">
                <q-chip class="text-h6 q-mr-md" color="green-1" text-color="green-3" icon="fas fa-chevron-up">
                  R$ 39,32
                </q-chip>
              </div>
            </q-card>
          </div>

          <div class="col-6">
            <q-card class="q-mx-md q-pa-lg">
              <div class="text-overline flex-center row">Total de cashback sacado</div>
              <div class="flex flex-center row">
                <q-chip class="text-h6 q-mr-md" color="red-1" text-color="red-3" icon="fas fa-chevron-down">
                  R$ 10,00
                </q-chip>
              </div>
            </q-card>
          </div>

          <!-- SALDO DISPONÍVEL -->
          <div class="col-12 q-mt-lg">
            <q-card class="q-mx-md q-pa-lg">
              <q-timeline color="secondary">

                <q-expansion-item expand-icon-toggle dense expand-separator icon="payments" label="R$ 29,32"
                  caption="Saldo de cashback disponível para saque" header-class="text-h6">
                  <q-card>
                    <q-card-section>
                      <q-timeline-entry title="R$ 22,50" subtitle="02/04/2023 - 19:25" icon="add" color="primary"
                        body="Saldo: R$ 29,32">
                      </q-timeline-entry>

                      <q-timeline-entry title="R$ 10,00" subtitle="18/03/2023 - 09:11" icon="remove" color="red"
                        body="Saldo: R$ 6,82">
                      </q-timeline-entry>

                      <q-timeline-entry title="R$ 11,50" subtitle="17/03/2023 - 15:34" icon="add" color="primary"
                        body="Saldo: R$ 16,82">
                      </q-timeline-entry>

                      <q-timeline-entry title="R$ 5,32" subtitle="05/02/2023 - 11:15" icon="add" color="primary"
                        body="Saldo: R$ 5,32">
                      </q-timeline-entry>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-timeline>
            </q-card>
          </div>
        </div>
      </div>

      <!-- CARROSEL -->
      <div class="col-4 q-gutter-md">
        <q-card class="q-mx-sm">
          <div class="text-overline flex-center row q-pt-lg">Benefícios gerados</div>
          <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated
            control-color="primary" navigation padding arrows height="220px"
            class="text-primary shadow-1 rounded-borders">
            <q-carousel-slide name="shopping_bag" class="column no-wrap flex-center">
              <q-tooltip max-width="300px">
                Redução de toneladas de plástico: Cálculo da quantidade de plástico economizada a partir da multiplicação da quantidade de sacolas plásticas evitadas pela massa média de uma sacola, convertendo para toneladas.
              </q-tooltip>
              <q-icon name="shopping_bag" size="56px" />
              <div class="q-mt-md text-center text-grey">
                Evitou uma média de <strong>37</strong> sacolas plásticas
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="water_drop" class="column no-wrap flex-center">
              <q-tooltip max-width="300px">
                Economia de recursos naturais: Cálculo da quantidade de recursos naturais (como petróleo, gás e água) economizados com a redução do uso de sacolas plásticas, levando em consideração a quantidade de sacolas evitadas e o consumo médio desses recursos para produzir cada sacola.
              </q-tooltip>
              <q-icon name="water_drop" size="56px" />
              <div class="q-mt-md text-center text-grey">
                Reduziu o consumo de <strong>0,74</strong> gramas de petróleo e <strong>7,40</strong> de gramas de água
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="whatshot" class="column no-wrap flex-center">
              <q-tooltip max-width="300px">
                Redução de emissões de gases de efeito estufa: Cálculo das emissões de gases de efeito estufa (como CO2, metano e óxido nitroso) evitadas com a redução do uso de sacolas plásticas, com base na quantidade de sacolas evitadas e nas emissões médias associadas à produção, transporte e descarte de cada sacola.
              </q-tooltip>
              <q-icon name="whatshot" size="56px" />
              <div class="q-mt-md text-center text-grey">
                Diminuiu aproximadamente <strong>370 gramas</strong> na emissão de CO2
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="savings" class="column no-wrap flex-center">
              <q-tooltip max-width="300px">
                Economia de dinheiro: Cálculo da economia financeira obtida com a redução do uso de sacolas plásticas, multiplicando a quantidade de sacolas evitadas pelo preço médio de cada sacola.
              </q-tooltip>
              <q-icon name="savings" size="56px" />
              <div class="q-mt-md text-center text-grey">
                Economizou cerca de <strong>R$ 7,50</strong> em compras
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="handshake" class="column no-wrap flex-center">
              <q-tooltip max-width="300px">
                Estímulo à sustentabilidade: Avaliação do impacto da redução do uso de sacolas plásticas no comportamento dos consumidores em relação à sustentabilidade, por meio de pesquisas de opinião e levantamento de dados sobre o aumento do uso de sacolas reutilizáveis e outras práticas sustentáveis.
              </q-tooltip>
              <q-icon name="handshake" size="56px" />
              <div class="q-mt-md text-center text-grey">
                Colaborou na mudança e senso de <strong>responsabilidade</strong> da sociedade
              </div>
            </q-carousel-slide>
          </q-carousel>
        </q-card>
      </div>
    </div>
  </div>




  <!-- <q-card-section class="q-pt-none">
        <div class="row q-col-gutter-md">
          <div class="col-md-12">
            <q-list bordered class="rounded-borders">
              <q-item-label header>Items</q-item-label>
            </q-list>
          </div>
        </div>
      </q-card-section> -->
</template>

<script setup>
import { ref } from "vue";

const slide = ref("shopping_bag")
const selection = ref(["green"])

</script>
<!-- <script setup>
import {useAuthStore} from 'src/stores/all.js'
import {computed} from "vue";

const authStore = useAuthStore()

const userToken = computed(() => authStore.getUserToken)

// This request is to be intercepted when the token is invalid
authStore.GET_USER(userToken.value.access)
</script> -->
