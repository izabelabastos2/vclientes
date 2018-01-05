<template>
  <div class="add container">

    <h1 class="page-header">cadastro</h1>


    <form v-on:submit="addcliente">   
      
      <div class="well">
              <h4>Dados cliente</h4>
              <div class="form-group">
                  <label>CPF</label>
                  <input type="num" class="form-control" placeholder="cpf" v-model="cliente.cpf" required ="">
              </div>
              <div class="form-group">
                  <label>Senha</label>
                  <input type="password" size=8 class="form-control" placeholder="senha" v-model="cliente.senha" required="">
              </div>
              <div class="form-group">
                  <label>Nome</label>
                  <input type="text" class="form-control" placeholder="nome" v-model="cliente.nome" required="">
              </div>
              <div class="form-group">
                  <label>Telefone</label>
                  <input  type="tel" class="form-control" placeholder="telefone" v-model="cliente.telefone" required="">
              </div>
              <div class="form-group">
                  <label>Email</label>
                  <input type="email" class="form-control" placeholder="Email" v-model="cliente.email">
              </div>
              <div class="form-group">
                  <label>Data de Nascimento</label>
                  <input type="date" class="form-control" placeholder="data de nascimento" v-model="cliente.nascimento" required="">
              </div>
          </div>


          <div class="well">
              <h4>Endereço Cliente</h4>
              <div class="form-group">
                  <label>CEP</label>
                  <input type="num" size="8" class="form-control" placeholder="CEP" v-model="cliente.cep"  required="" >
              </div>
              <div class="form-group">
                  <label >Logradouro</label>
                  <input type="text" class="form-control" placeholder="Logradouro" v-model="cliente.logradouro" required="">
              </div>
              <div class="form-group">
                  <label  >Numero</label>
                  <input type="num" size=4 class="form-control" placeholder="Numero" v-model="cliente.num" required="">
              </div>
              <div class="form-group">
                  <label>Complemento</label>
                  <input type="text" class="form-control" placeholder="Complemento" v-model="cliente.complemento">
              </div>
              <div class="form-group">
                  <label>Bairro</label>
                  <input type="text" class="form-control" placeholder="Bairro" v-model="cliente.bairro" required="">
              </div>
              <div class="form-group">
                  <label>Cidade</label>
                  <input type="text" class="form-control" placeholder="Cidade" v-model="cliente.cidade" required="">
              </div>
              <div class="form-group">
                  <label>Estado</label>
                  <input type="text" class="form-control" placeholder="Estado" v-model="cliente.estado" required="">
              </div>
          </div>

          <div class="well">
            <h4>Detalhes Cliente</h4>
            <div class="form-group">
                <label>RG</label>
                <input type="num" class="form-control" placeholder="RG" v-model="cliente.rg" required="">
            </div>
            <div class="form-group">
                <label>Data de Expedição</label>
                <input type="date" class="form-control" placeholder="Expedição" v-model="cliente.expedicao" required="">
            </div>
            <div class="form-group">
                <label>Orgão Expeditor</label>
                <input type="text" class="form-control" placeholder="Orgão Expeditor" v-model="cliente.orgao_expeditor" required="">
            </div>
            <div class="form-group">
                <label class="mr-sm-2" for="estadoCivilSelect">Estado Civil</label>
                <select class="custom-select mb-2 mr-sm-2 mb-sm-0"  v-model="cliente.estado_civil" required="" id="estadoCivilSelect">
                  <option value="casado">Casado</option>
                  <option value="solteiro">Solteiro</option>
                  <option value="divorciado">Divorciado</option>
                  <option value="viuvo">Viúvo</option>
                </select>
            </div>
            <div class="form-group">
                <label class="mr-sm-2" for="categoriaSelect">Preference</label>
                <select class="custom-select mb-2 mr-sm-2 mb-sm-0" v-model="cliente.categoria" required="" id="categoriaSelect">
                  <option value="empregado">Empregado</option>
                  <option value="empregador">Empregador</option>
                  <option value="autonomo">Autônomo</option>
                </select>
            </div>
            <div class="form-group">
                <label>Empresa</label>
                <input type="text" class="form-control" placeholder="Empresa em que trabalha" v-model="cliente.empresa">
            </div>
            <div class="form-group">
                <label>Profissão</label>
                <input type="text" class="form-control" placeholder="Profissão" v-model="cliente.profissao" required="">
            </div>
            <div class="form-group">
                <label>Renda Bruta</label>
                <input type="num" class="form-control" placeholder="Renda bruta" v-model="cliente.renda_bruta">
            </div>
        </div>         
          <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>

  
  export default {
    name: 'add',
    data () {
      return {
       cliente: {}
      }
    },
    methods: {
      addcliente(e){
        console.log(123);

        let newCliente = {

                    cpf: this.cliente.cpf,
                    senha: this.cliente.senha,
                    nome: this.cliente.nome,
                    telefone: this.cliente.telefone,
                    email: this.cliente.email,
                    nascimento: this.cliente.nascimento,
                    
                    cep: this.cliente.cep,
                    logradouro: this.cliente.logradouro,
                    num: this.cliente.num,
                    complemento: this.cliente.complemento,
                    bairro: this.cliente.bairro,
                    cidade: this.cliente.cidade,
                    estado: this.cliente.estado,
                    
                    rg: this.cliente.rg,
                    expedicao: this.cliente.expedicao,
                    orgao_expeditor: this.cliente.orgao_expeditor,
                    estado_civil: this.cliente.estado_civil,
                    categoria: this.cliente.categoria,
                    empresa: this.cliente.empresa,
                    profissao: this.cliente.profissao,
                    renda_bruta: this.cliente.renda_bruta
        }

        this.$http.post('http://localhost/apiphp/public/index.php/api/cliente/add', newCliente)
                      .then(function(response){
                        //redirecionamento
                          this.$router.push({path: '/lista', query: {alert: 'Cliente Cadastrado'}});
                      }); 

        e.preventDefault();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

