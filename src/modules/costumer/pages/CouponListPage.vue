<template>
  <q-page class="q-pa-sm">
    <q-card class="q-mt-xl">
        <q-table
          title="Meus cupons"
          :rows="rows"
          :columns="columns"
          row-key="name"
        />
    </q-card>
  </q-page>
</template>

<script setup>
import QrcodeStream from 'vue-qrcode-reader'

const onDecode = (data) => console.log(data)


const columns = [
  {
    name: 'dataHora',
    required: true,
    label: 'Data',
    align: 'left',
    field: row => row.dataHora,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'nomeParceiro', align: 'left', label: 'Parceiro', field: 'nomeParceiro', sortable: true },
  { name: 'nomeCidade', align: 'left', label: 'Cidade', field: 'nomeCidade', sortable: true },
  { name: 'siglaEstado', align: 'left', label: 'UF', field: 'siglaEstado', sortable: true },
  { name: 'quantidadeItens', label: 'Qtde de itens', field: 'quantidadeItens' , sortable: true },
  { name: 'valorCompra', label: 'Valor da compra', field: 'valorCompra', sortable: true },
  { name: 'valorCashback', label: 'Valor do cashback', field: 'valorCashback' , sortable: true },
  { name: 'status', label: 'Status', field: 'status' , sortable: true }
]

const rows = [
{
    "dataHora": "10/04/2023 14:25",
    "nomeParceiro": "Empresa A",
    "nomeCidade": "São Paulo",
    "siglaEstado": "SP",
    "quantidadeItens": 5,
    "valorCompra": "R$ 50.0",
    "valorCashback": "R$ 2.5",
    "status": "Pago"
  },
  {
    "dataHora": "11/04/2023 10:13",
    "nomeParceiro": "Empresa B",
    "nomeCidade": "Rio de Janeiro",
    "siglaEstado": "RJ",
    "quantidadeItens": 3,
    "valorCompra": "R$ 30.0",
    "valorCashback": "R$ 0.9",
    "status": "Pago"
  },
  {
    "dataHora": "11/04/2023 15:42",
    "nomeParceiro": "Empresa C",
    "nomeCidade": "Belo Horizonte",
    "siglaEstado": "MG",
    "quantidadeItens": 8,
    "valorCompra": "R$ 80.0",
    "valorCashback": "R$ 6.4",
    "status": "Pago"
  },
  {
    "dataHora": "12/04/2023 09:50",
    "nomeParceiro": "Empresa D",
    "nomeCidade": "Curitiba",
    "siglaEstado": "PR",
    "quantidadeItens": 2,
    "valorCompra": "R$ 15.0",
    "valorCashback": "R$ 0.3",
    "status": "Processando"
  },
  {
    "dataHora": "13/04/2023 11:05",
    "nomeParceiro": "Empresa E",
    "nomeCidade": "Porto Alegre",
    "siglaEstado": "RS",
    "quantidadeItens": 6,
    "valorCompra": "R$ 55.0",
    "valorCashback": "R$ 3.3",
    "status": "Pago"
  },
  {
    "dataHora": "14/04/2023 16:30",
    "nomeParceiro": "Empresa F",
    "nomeCidade": "Fortaleza",
    "siglaEstado": "CE",
    "quantidadeItens": 4,
    "valorCompra": "R$ 40.0",
    "valorCashback": "R$ 1.6",
    "status": "Processando"
  },
  {
    "dataHora": "15/04/2023 13:20",
    "nomeParceiro": "Empresa G",
    "nomeCidade": "Recife",
    "siglaEstado": "PE",
    "quantidadeItens": 7,
    "valorCompra": "R$ 70.0",
    "valorCashback": "R$ 4.9",
    "status": "Pago"
  }
]

</script>
