<template>
    <div id="container">
        <div id="pokesex">
            <h2>Pokesex</h2>
            <article class="card" v-for="poke in poketeubs" v-on:click="showPokesexDetailEmit(poke)" :key="poke.nom">
               <div class="property">
                    <CartePokesex :info_pokesex="poke"/>
               </div>
            </article>
            <DetailPokesex v-if="display_detail" :pokesex="display_pokesex" @closeDetailPokesex="hidePokemonDetailEmit"/>
            <button class="close" v-on:click="closePokesex()">
                <p>FERMER LE POKESEX</p>
            </button>  
        </div>
    </div>
</template>

<script>    
import dat from '../data/info.json';
import CartePokesex from '../components/CartePokesex.vue';
import DetailPokesex from '../components/DetailPokesex.vue';
export default {
    name: 'Pokesex-vue',
    data() {
        return {
            poketeubs: {},
            display_detail:false,
            display_pokesex:''
        }
    },
    created() {
        this.poketeubs = dat.infos;
        console.log(this.poketeubs)
    },
    components:{
        CartePokesex,
        DetailPokesex
    },
    methods:{   
        showPokesexDetailEmit(pokesex){
            this.display_detail = true;
            this.display_pokesex = pokesex;
        },
        closePokesex(){
            this.$emit('hidePokesex',false);
        },
        hidePokemonDetailEmit(){
            this.display_detail = false;
        }
    }
}
</script>
<style lang="scss" scoped>
    #container{
        background-color:rgba(10, 7, 0, 0.562);
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:100%;
        overflow-y: scroll;
        transition: all 0.2s;
        z-index: 9999;

    .card {
        transition: all 0.2s;
    }

    .card:hover {
        transform: scale(1.03);
    }
    button p{
        cursor: pointer;
    }
    #pokesex{
        
        padding-top:15px;
        border-radius:12px;
        margin:auto;
        background-image: url('https://cdn.discordapp.com/attachments/1032179560516681728/1048036002154938428/backgroundPokedex.png'); 
        width:50%;
        margin-top: 4vh;
        margin-bottom: 4vh;
        

        h2{
            color:black;
            font-size:40px;
            font-weight:bold;
        }

        article {
            display: inline-flex;
            margin:30px 50px 30px 50px;
            justify-content:center;
            align-items:center;
            width:150px;
            height:150px;
            border-radius:12px;
            background-color:white;
            :hover{
                cursor:pointer;
            }

            .property {
                width:200px;
                height:100px;
                overflow-wrap: break-word;

                img{
                    display:inline-flex;
                    width:25px;
                    height:25px;
                }
            }
        }
        button{
            background-color:white;
            display:block;
            margin:auto;
            padding:15px;
            border:None;
            border-top-left-radius:8px;
            border-top-right-radius:8px;
            transition: all 0.1s;
            

            p{
                font-weight:bold;
                font-size:35px;
            }
            // text-decoration:none;
            :hover{
                font-size: 35px;
            }
        }

        button:hover {
            transform: scale(1.02);
        }
    }
}
</style>