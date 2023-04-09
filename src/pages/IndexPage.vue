<template>
  <q-page style="margin-top: -60px">
    <section class="heroSection bg-primary">
      <div class="heroSection__content container q-mb-xl">
        <div class="row full-width q-mb-xl">
          <div class="col-12 col-md-6 vertical-middle self-center">
            <h2 class="text-h3 text-white text-weight-medium fredoka">No Plastic</h2>
            <h5 class="text-h5 text-white">Deixe sua pegada sustentável e ainda ganhe dinheiro! Adote o programa de
              cashback e diga não às sacolas plásticas em suas compras.</h5>
            <q-btn class="text-black" unelevated color="white" label="Conheça aqui" icon="info"
              @click="goToSection('features')" />
          </div>
          <div class="col-0 col-md-6 q-mt-lg">
            <img
              :style="($q.screen.md || $q.screen.lg || $q.screen.xl) ? 'width: 600px; max-width: fit-content;' : 'width: 100%; max-width: 100%;'"
              class="responsive" src="src/assets/hero1.svg">
          </div>
        </div>
      </div>
      <div class="waves">
        <svg class="waves__svg" preserveAspectRatio="none" shape-rendering="auto" viewBox="0 24 150 28"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
          </defs>
          <g class="parallax">
            <use fill="rgba(255,255,255,0.7)" x="48" xlink:href="#gentle-wave" y="0"></use>
            <use fill="rgba(255,255,255,0.5)" x="48" xlink:href="#gentle-wave" y="3"></use>
            <use fill="rgba(255,255,255,0.3)" x="48" xlink:href="#gentle-wave" y="5"></use>
            <use fill="rgba(255,255,255,1)" x="48" xlink:href="#gentle-wave" y="7"></use>
          </g>
        </svg>
      </div>
    </section>

    <section class="features q-py-xl">
      <div class="container">
        <div class="q-px-lg q-py-md">
          <h2 class="text-h3 text-weight-thin fredoka">O que é?</h2>
          <p class="text-gray text-subtitle1 text-justify">
            O programa de cashback tem como objetivo incentivar a população a recusar o uso de sacolas plásticas em
            compras, fornecendo informações sobre os impactos ambientais e recompensando os consumidores que aderirem à
            iniciativa. Dessa forma, a conscientização é promovida por meio da mudança de comportamento e da valorização
            de práticas sustentáveis.
          </p>
        </div>

        <div class="q-px-lg q-py-md">
          <h2 class="text-h3 text-weight-thin fredoka">Como funciona?</h2>
          <q-timeline color="secondary">
            <q-timeline-entry title="Compra" icon="shopping_cart">
              <p class="text-gray text-subtitle1 text-justify">
                O usuário se cadastra e realiza uma compra em um estabelecimento parceiro do programa de cashback e, ao
                ser questionado sobre a necessidade de sacolas, recusa o uso delas em prol do meio ambiente.
              </p>
            </q-timeline-entry>

            <q-timeline-entry title="Informa" icon="info">
              <p class="text-gray text-subtitle1 text-justify">
                Ao finalizar a compra, o consumidor é informado pelo caixa do estabelecimento sobre o programa de cashback
                e a possibilidade de ganhar uma recompensa por sua escolha sustentável.
              </p>
            </q-timeline-entry>

            <q-timeline-entry title="Recebe" icon="attach_money">
              <p class="text-gray text-subtitle1 text-justify">
                O consumidor registra a sua participação no programa através do cupom fiscal. Após um período determinado,
                o consumidor recebe sua recompensa em dinheiro ou créditos, incentivando-o a continuar a recusar sacolas
                plásticas em suas compras futuras.
              </p>
            </q-timeline-entry>
          </q-timeline>
        </div>

        <h2 class="text-h3 text-weight-thin fredoka">Por quê?</h2>
        <div class="row q-col-gutter-lg q-py-xl">
          <div class="col-12 col-md-4">
            <hover v-slot="{ hoverIsActive }">
              <q-card :class="{ 'shadow-6 cursor-pointer': hoverIsActive }">
                <q-card-section class="text-center">
                  <q-avatar size="70px" class="bg-primary text-white" icon="shopping_bag"></q-avatar>
                  <div class="text-h6 q-my-md">Redução da poluição</div>
                  <p class="text-gray text-subtitle1 text-center">Sacolas plásticas prejudicam a vida selvagem e os
                    ecossistemas. Ao reduzir o uso delas, ajudamos a prevenir a poluição e proteger a biodiversidade.</p>
                </q-card-section>
              </q-card>
            </hover>
          </div>
          <div class="col-12 col-md-4">
            <hover v-slot="{ hoverIsActive }">
              <q-card :class="{ 'shadow-6 cursor-pointer': hoverIsActive }">
                <q-card-section class="text-center">
                  <q-avatar size="70px" class="bg-primary text-white" icon="water_drop"></q-avatar>
                  <div class="text-h6 q-my-md">Conservação de recursos</div>
                  <p class="text-gray text-subtitle1 text-center">Sacolas plásticas requerem petróleo e outras
                    matérias-primas não renováveis. Ao reduzir a produção delas, ajudamos a conservar esses recursos para
                    o futuro.</p>
                </q-card-section>
              </q-card>
            </hover>
          </div>
          <div class="col-12 col-md-4">
            <hover v-slot="{ hoverIsActive }">
              <q-card :class="{ 'shadow-6 cursor-pointer': hoverIsActive }">
                <q-card-section class="text-center">
                  <q-avatar size="70px" class="bg-primary text-white" icon="whatshot"></q-avatar>
                  <div class="text-h6 q-my-md">Diminuição do efeito estufa</div>
                  <p class="text-gray text-subtitle1 text-center">Sacolas plásticas geram emissões que contribuem para as
                    mudanças climáticas. Ao reduzir o uso delas, ajudamos a diminuir essas emissões.</p>
                </q-card-section>
              </q-card>
            </hover>
          </div>
        </div>
      </div>


    </section>

    <section class="about q-mb-xl q-py-xl">
      <div class="container">
        <div class="row">
          <div class="col-0 col-md-6">
            <img
              :style="($q.screen.md || $q.screen.lg || $q.screen.xl) ? 'width: 600px; max-width: fit-content;' : 'width: 100%; max-width: 100%;'"
              class="responsive" src="src/assets/about.svg">
          </div>
          <div class="col-12 col-md-6 self-center text-right">
            <h2 class="text-h3 text-weight-thin fredoka">Sobre nós</h2>
            <p class="text-subtitle1 text-justify">
              Este trabalho tem como objetivo conscientizar a sociedade sobre o impacto do uso excessivo de sacolas
              plásticas e promover mudanças positivas.
            </p>
            <p class="text-subtitle1 text-justify">
              Por meio de um programa de cashback, incentivamos as pessoas a deixarem de pegar sacolas plásticas em
              compras, oferecendo dinheiro de volta como recompensa.
            </p>
            <p class="text-subtitle1 text-justify">
              Acreditamos que pequenas mudanças de comportamento podem fazer uma grande diferença no mundo em prol da
              sustentabilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { goToSection } from "src/support/helpers/scroll";
import Hover from "src/modules/common/components/HoverComponent.vue";

const features = [
  {
    icon: "fas fa-check",
    label: "Feature 1"
  },
  {
    icon: "fas fa-check",
    label: "Feature 2"
  },
  {
    icon: "fas fa-check",
    label: "Feature 3"
  }
];
</script>

<style scoped>
.heroSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  position: relative;
  overflow: hidden;
}

.waves {
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
}

.heroSection__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 1;
}

.heroSection__title {
  color: #fff;
  font-weight: bold;
  text-align: center;
}</style>
