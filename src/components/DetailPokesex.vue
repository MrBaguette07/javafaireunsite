<template>
    <div class="container">
        <div class="carte-pokemon">
            

            <img id="logo" :src="require('@/assets/' + pokesex.nom + '.png')">
            <h2>{{pokesex.nom}}</h2>
            <div class="nb_coeurs" v-for="(coeur,index) in rarete" :key="index">
                <img :src="require('@/assets/pillule.png')">
            </div>
            <p>{{pokesex.description}}</p>


            <div v-if="(pokesex.contamination)" id="contamination">
                <h3>Contamination</h3>
                <p>
                    {{pokesex.contamination}}
                </p>
            </div>
            <div v-if="(pokesex.symptome)" id="symptome">
                <h3>Symptôme</h3>
                <p>
                    {{pokesex.symptome}}
                </p>
            </div>
            <div id="traitement">
                <h3>Traitement</h3>
                <p>
                    {{pokesex.traitement}}
                </p>
            </div>

            <div id="depistage">
                <h3>Depistage</h3>
                <p>
                    {{pokesex.depistage}}
                </p>
            </div>

            <div id="debut-symptome">
                <h3>Début Symptôme</h3>
                <p>
                    {{pokesex.debut_symptome}}
                </p>
            </div>

            <div id="complication">
                <h3>Complications</h3>
                <p>
                    {{pokesex.complications}}
                </p>
            </div>


            <button class="close" v-on:click="closeDetail()">FERMER</button>  
        </div>
    </div>
</template>

<script>

export default {
    name:"DetailPokesex-vue",
    data:function(){
    return{
        description:'',
        contamination:'',
        symptome:'',
        traitement:'',
        depistage:'',
        debut_symptome:'',
        complications:'',
        rarete:0
      }
    }, 
    props:[
        'pokesex'
    ],
    created(){
        this.description = this.pokesex.description;
        this.contamination = this.pokesex.moyen_contamination;
        this.symptome = this.pokesex.symptomes;
        this.traitement = this.pokesex.traitement;
        this.depistage = this.pokesex.depistage;
        this.debut_symptome = this.pokesex.debut_symptome;
        this.complications = this.pokesex.complications;
        this.rarete = this.pokesex.rarete;

        

    },
    mounted(){
        console.log('DETAIL POKEMON');
    },
    computed: {
        nom() {
            return this.pokesex.nom.toUpperCase()
        }
    },
    methods:{
        closeDetail(){
            this.$emit('closeDetailPokesex',false);
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    background-color:rgba(10, 7, 0, 0.562);
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    overflow-y: scroll;
    
    // z-index: 10;

    .carte-pokemon{
        background-color:white;
        width:30vw;
        margin:auto;
        border-radius: 10px;
        margin-top: 10vh;
        margin-bottom: 10vh;
        padding: 15px 15px 0px 15px;
        
        .nb_coeurs{

            display:inline-flex;
            img{
                width:40px;
                height:40px;
            }
        }

        h2{
            color:black;
            text-decoration: black underline;
            margin-top: 5px;
            margin-bottom: 10px;
        }

        
        
        h3{
            border-top:1px solid #DD0E45;
            padding-top:10px;
            color:black;
            margin-top: 8px;
            
        }

        #logo {
            width: 70px;
            height: 70px;
            display: inline-flex;
            margin-top: -7vh;
            background-color: #FFEF9E;
            border-radius:60px;
            border : 5px solid #DD0E45;
            padding: 15px;
        }


        button{
            margin-bottom:0px;
            margin-top: 15px;
            background-color:#DD0E45;
            color: white;
            padding:10px;            
            border-top-left-radius:8px;
            border-top-right-radius:8px;
            font: 1.2em "Fira Sans", sans-serif;
        }

        button:hover {
            background-color:#EC7897;
        }
        p{
            margin-top:10px;
        }
    }
}

</style>