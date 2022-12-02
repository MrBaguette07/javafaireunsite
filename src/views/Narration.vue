<template>
    <div id="fond2">
        <div class="nom1" v-if="(personnage == 1)" href="#">Moi</div>
        <div class="nom2" v-if="(personnage == 2)" href="#">Don juan</div>
        <img id="entrerperso1" v-if="(personnage == 1)" src="../assets/toucheEntree.png">
        <img id="entrerperso2" v-if="(personnage >= 2)" src="../assets/toucheEntree.png">
        <img id="soi" v-if="(personnage == 1)" src="../assets/soi.png">
        <img id="ami" v-if="(personnage == 2)" src="../assets/ami.png">
        <img id="narrateur" v-if="(personnage == 3)" src="../assets/narrateur.png">
        <!-- <div class="narration">
            {{ narration.text }}
        </div> -->
        <TextNarration :text="texte" :personne="personnage"/>
    </div>
</template>
<script>

import TextNarration from "../components/TextNarration.vue";
import Dialogues from "../data/dialogues.json";
export default {
    name:"Narration-vue",
    
    data() { 
        return {
            dialogues: Dialogues,
            texte: Dialogues[this.$route.params['id']][this.$route.params['part']].text,
            personnage: Dialogues[this.$route.params['id']][this.$route.params['part']].personnage,
            next: Dialogues[this.$route.params['id']]['next']
          }
        },
    components: {
        TextNarration,
    },
    methods:{
        changementPlus(){
            var route = this.$route.params;
            var id = route['id'];
            var part = route['part'];
            if (this.dialogues[id][parseInt(part) + 1] == null) {
                if (id == "8") {
                    this.$router.push('/');
                } else {
                    this.$router.push('/app/combat/'+id+'/1');
                }
            } else {
                this.$router.push('/app/narration/'+id+'/' + (parseInt(part)+1));
                this.$router.go(0);
            }
            // this.typeTextActuel=this.typeTextActuel+1;
            // console.log(this.typeTextActuel);
        }
    },
    mounted() {
        const self=this;
        window.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                if (event.keyCode === 13) { 
                    self.changementPlus();
                }
            }
        });
    },
    created() {
        console.log(this.$route);
        console.log(this.texte);
    },
}
</script>
<style>
*{
    background: none;
    border: 0px;
    margin: 0px;
}
#entrerperso1 {
    position:absolute;
    right: 20px;
    bottom: 256px;
    animation: 2s linear 0s infinite alternate animationEntree;
}
#entrerperso2 {
    position:absolute;
    left: 20px;
    bottom: 256px;
    animation: 2s linear 0s infinite alternate animationEntree;
}

@keyframes animationEntree{
    0% {
        transform: scale(1);
    }50%{
        transform: scale(1.2);
    } 100% {
        transform: scale(1);
    }
}

#narrateur {
    transform: rotate(180deg);
    top: -30px;
    position: absolute;
    animation: 2s linear 0s infinite alternate animationAnimateur;
}
@keyframes animationAnimateur{
    0% {
        transform: rotate(160deg);
    } 100% {
        transform: rotate(200deg);
    }
}
#soi {
    position: absolute;
    display:block;
    float:left;
    top: 404px;
    left: 32px;
    width: 400px;
    animation: 2s linear 0s infinite alternate animationPerso;
}
#ami {
    position: absolute;
    display:block;
    float:left;
    top: 404px;
    right: 0;
    width: 400px;
    animation: 2s linear 0s infinite alternate animationPerso;
}

@keyframes animationPerso{
    0% {
        top: 350px;
        transform: rotate(-2deg)
    }25%{
        top: 400px;
        transform: rotate(2deg)
    }40%{
        top: 400px;
        transform: rotate(-2deg)
    } 100% {
        transform: rotate(2deg);
        top: 350px
    }
}
#fond2 {
    top: 0;
    background: url('../assets/fond-narration.jpg');
    width: 1440px;
    height: 1024px;
    margin-top: 0px;
    position: relative;
}

.nom1 {
    top: 250px;
    position: relative;
    display:block;
    float:left;
    width: 406px;
    height: 76px;
    border-radius: 10px;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 46px;
    line-height: 54px;
    text-align: center;

    color: #fff;

    margin-left: auto;
    margin-right: auto;
    

    padding-top: 20px;

    text-align: center;
    background: #DD0E45;
    box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.25);
}



.nom2 {
    top: 250px;
    position: relative;
    display:block;
    float:right;
    width: 400px;
    height: 76px;
    border-radius: 10px;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 46px;
    line-height: 54px;
    text-align: center;

    color: #fff;

    margin-left: auto;
    margin-right: auto;
    

    padding-top: 20px;

    text-align: center;
    background: #DD0E45;
    box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.25);
}


</style>
