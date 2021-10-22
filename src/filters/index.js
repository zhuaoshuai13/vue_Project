import Vue from 'vue'
Vue.filter('saleNum', val => {
  return val >= 10000 ? (val / 10000).toFixed(1) + '万' : val
})
