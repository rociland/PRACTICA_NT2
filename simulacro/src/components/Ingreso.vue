<template lang="html">

  <section class="scr-components-ingreso">
    <div class="jumbotron">
      <h1>Simulacro Parcial</h1>
      <hr>
      <input type="text" id="texto" v-model="texto" required name="texto" autocomplete="off" class="form-control" />
      <p>{{texto | vocales | mayus}}</p>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'scr-components-ingreso',
    props: [],
    mounted () {
     
    },
    data () {
      return {
        texto: " "

      }
    },
    methods: {
     
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .scr-components-ingreso {

  }
</style>
