<template>
  <q-page class="q-pa-sm">

    <div>
      <form @submit.prevent="pesquisar">
        <div class="form-group">
          <label for="texto">ID da solicitação de cashback:</label>
          <input type="number" id="idSolicitacao" v-model="idSolicitacao" class="form-control q-ml-sm q-mr-sm"  />
          <button type="submit" class="btn btn-primary">Pesquisar</button>
        </div>
      </form>
    </div>

    <q-card class="q-mt-xl">
      <q-table
        title="Meus cupons"
        :rows="rows"
        :columns="columns"
        row-key="name"
      >
      
        <template v-slot:body-cell-options="props">
          <q-btn class="bg-negative q-mt-sm" @click="cancelarSolicitacao(props.row.id)">Cancelar</q-btn>
        </template>
      </q-table>
    </q-card>

    <div class="q-mt-xl flex-center row">
      <q-btn class="bg-primary" @click="exibirCupomsDisponiveis" v-if="!mostrarCadastrarCupom">+ Solicitar Cashback</q-btn>
      <q-btn @click="mostrarCadastrarCupom = false" v-if="mostrarCadastrarCupom">Cancelar</q-btn>
      <div class="q-mt-xl" v-if="mostrarCadastrarCupom">
        <div class="text-overline flex-center row">Cupons disponíveis na SERPRO</div>
        <div class="flex flex-center row">
          <q-btn @click="selecionarCupom(cupom)" class="q-mt-sm q-mb-sm q-mr-md" v-for="cupom of cupomsDisponiveis" :key="cupom">{{ cupom }}</q-btn>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import CouponsService from '../services/couponsService.js';
import SolicitacaoCashbackService from '../services/solicitacaoCashbackService.js';
import {showPositive} from 'src/support/helpers/notification';

export default {

  data() {
    return {
      cupomsDisponiveis: [],
      mostrarCadastrarCupom: false,
      rows: [],
      idSolicitacao: null,
      columns: [
        { name: 'dataHoraAtualizacaoFormatado', align: 'left', label: 'Data', field: 'dataHoraAtualizacaoFormatado', sortable: true },
        { name: 'id', align: 'left', label: 'ID Solicitação', field: 'id', sortable: true },
        { name: 'cupomFiscal.parceiro.nome', align: 'left', label: 'Parceiro', field: row => row.cupomFiscal.parceiro.nome, sortable: true },
        { name: 'cupomFiscal.parceiro.cidade', align: 'left', label: 'Cidade', field: row => row.cupomFiscal.parceiro.cidade, sortable: true },
        { name: 'cupomFiscal.parceiro.estado', align: 'left', label: 'UF', field: row => row.cupomFiscal.parceiro.estado, sortable: true },
        { name: 'cupomFiscal.quantidadeTotal', label: 'Qtde de itens', field: row => row.cupomFiscal.quantidadeTotal , sortable: true },
        { name: 'cupomFiscal.valorTotalFormatado', label: 'Valor da compra', field: row => row.cupomFiscal.valorTotalFormatado, sortable: true },
        { name: 'ordemPagamentoCashback.valorFormatado', label: 'Valor do cashback', field: row => row.ordemPagamentoCashback.valorFormatado , sortable: true },
        { name: 'status', label: 'Status', field: 'statusAtual' , sortable: true },
        { name: 'options', label: 'Ações', align: 'center'}
      ]
    }
  },
  mounted() {
    this.listar();
  },
  methods: {
    listar() {
      SolicitacaoCashbackService.listar().then(response => {
        this.rows = response.data.content
        console.log(this.rows)
      })
    },
    preencherCupomsDisponiveis() {
      CouponsService.listarDisponiveis().then(response => {
        this.cupomsDisponiveis = response.data
      })
    },
    selecionarCupom(codigoCupom) {
      SolicitacaoCashbackService.registrar(codigoCupom).then(response => {
        console.log(response)
        this.mostrarCadastrarCupom = false;
        showPositive(`Solicitação de cashback registrada com sucesso!`)
        this.listar();
      })
    },
    exibirCupomsDisponiveis() {
      this.mostrarCadastrarCupom = true;
      this.preencherCupomsDisponiveis();
    },
    cancelarSolicitacao(id) {
      SolicitacaoCashbackService.deletar(id).then(response => {
        console.log(response)
        showPositive(`Solicitação de cashback cancelada com sucesso!`)
        this.listar();
      })
    },
    pesquisar() {
      SolicitacaoCashbackService.consultar(this.idSolicitacao).then(response => {
        this.rows = []
        this.rows.push(response.data)
        console.log(this.rows)
      })
    }
  }
}

</script>
