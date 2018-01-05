<template>
  <div class="clientes container">
  </br>
  	<Alert v-if="alert" v-bind:message="alert"/>
    <h1 class="page-header">Lista de Clientes</h1>
       <table class="table table-striped">
        <thead>
          <tr>
            <th>cpf</th>
            <th>nome</th>
            <th>telefone</th>
            <th>email</th>    
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="clientes in cliente">
            <td>{{clientes.cpf}}</td>
            <td>{{clientes.nome}}</td>
            <td>{{clientes.telefone}}</td>
            <td>{{clientes.email}}</td>
            
    
          </tr>
        </tbody>
    </table>


  </div>
</template>

<script>  
	import Alert from './Alert';
	export default {
	  name: 'cliente',
	  data () {
	    return {
	     cliente: [],
	     alert:'',
	    }
	  },
	   methods:{
	    fetchClientes(){
	      this.$http.get('http://localhost/apiphp/public/index.php/api/cliente')
	          .then(function(response){
	            //console.log(response.body);
	            this.cliente = response.body;

	          });
	      }
	    },
	    created: function(){
	    	if(this.$route.query.alert){
        		this.alert = this.$route.query.alert;
      		}
	      	this.fetchClientes();
	  },
	  update: function(){
	      this.fetchClientes();
	  },
	  
	  components: {
      	Alert
      }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>