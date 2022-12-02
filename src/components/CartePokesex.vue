<template>
    <div class="carte">
        <img class="logo" :src="require('@/assets/' + info_pokesex.nom + '.png')">
        <div class="nb_coeurs" v-for="(coeur,index) in info_pokesex.rarete" :key="index">
            <img :src="require('@/assets/pillule.png')">
        </div>
        
        <h4>{{info_pokesex.nom}}</h4>
    </div>

</template>

<script>
export default {
    name:"CartePokesex-vue",

    props:[
        'info_pokesex',
    ],
    mounted(){
        console.log("Mis à jour carte Pokesex");
        // this.url_pokemon = this.info_pokesex;
    }
}
</script>

<style lang="scss" scoped>

    .carte{
        margin:auto;
        margin-top:-10px;
        width:100px;
        height:100px;
        .nb_coeurs{
            display:inline-block;
            img{
                width:15px;
                height:15px;
            }
        }
    }

    .logo{
        float:right;    
        width:100px;
        height:100px;
    } 

    h4 {
        font-size: 10px;
        display:block;
    }

    
</style>