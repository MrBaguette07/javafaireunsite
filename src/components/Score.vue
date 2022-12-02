<template>
    <div id="container" v-if="((resultat==true) || (resultat==false))" >
        <div id="score">

            <div id="gagner" v-if="(resultat ==true)">
                <p class="text">
                    Réponse Correct !!
                    Tu peux passer à la question suivante!
                </p>
                <button class="continuer" v-on:click="continuerAventure()">
                    <p>CONTINUER</p>
                </button> 
            </div>

            <div id="perdu" v-if="(resultat == false)">
                <p class="text">
                    Réponse Incorrect :'(
                    Retente ta chance !
                </p>
                <button class="perdu" v-on:click="gameOverAventure()">
                    <p>RETOUR ACCUEIL</p>
                </button> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "Score-vue",
    props:[
        'resultat',
        'questions'
    ],
    methods:{
        continuerAventure(){
            var id = this.$route.params['id'];
            if (parseInt(id)+1 > this.questions.nombre) {
                this.$router.push('/app/narration/'+(parseInt(id)+1)+'/1');
            } else {
                console.log(parseInt(this.$route.params['part']))
                if (this.questions[parseInt(this.$route.params['id'])][parseInt(this.$route.params['part'])] != null){
                    this.$router.push('/app/combat/'+id+'/'+(parseInt(this.$route.params['part'])+1));
                } else {
                    this.$router.push('/app/narration/'+(parseInt(id)+1)+'/1');
                }
            }
        },
        gameOverAventure(){
            this.$router.push('/');
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
    #score{
        display:block;
        width:400px;
        background-color:white;
        margin:auto;
        border-radius:12px;
        margin-top:300px;
        #gagner{
            button{
                margin-top:20px;
                background-color:#1CAE3C;
                padding:10px;            
                border-top-left-radius:8px;
                border-top-right-radius:8px;
                font: 1.2em "Fira Sans", sans-serif;
                p{
                    color: white;
                }
            }
        }

        #perdu{
            button{
                margin-top:20px;
                background-color:#DD0E45;
                padding:10px;            
                border-top-left-radius:8px;
                border-top-right-radius:8px;
                font: 1.2em "Fira Sans", sans-serif;
                p{
                    color: white;
                }
            }
        }

        p{
            color:black;
            font-family:"Roboto";
            font-weight:Bold;
        }
    }

    
}
.text{
            padding-top:25px;
        }   
</style>