<template>
  <div id="combat">
      <Question :text="combatInfos[parseInt(this.$route.params['part'])-1].question"/>
      <Personnage :image_personnage_url ="image_personnage_url" />
      <Answers :answers="(Object.keys(combatInfos[parseInt(this.$route.params['part'])-1]).filter(key => parseInt(key) > 0).reduce((obj, key) => {
        obj[key] = combatInfos[parseInt(this.$route.params['part'])-1][key];
        return obj;
      }, {}))" :selected="currentHover" @estCorrect="this.isCorrect"/>
      <Score :resultat="display_answer" :questions="questions"/>
  </div>
</template>

<script>
import Question from "../components/Question.vue";
import Personnage from "../components/Personnage.vue";
import Answers from "../components/Answers.vue";
import Questions from "../data/questions.json";
import Infos from "../data/info.json";
import Score from "../components/Score.vue";
export default {
  name:"Combat-vue",
  data() { return {
      currentHover: 1, // question qu'on a choisie avec les touches du clavier
      questions: Questions,
      display_answer:null,
      combatInfos: Questions[this.$route.params['id']],
      image_personnage_url : require('../assets/'+Infos.infos[this.$route.params['id']]['nom']+'.png')
    }
  },
  components: {
      Question,
      Personnage,
      Answers,
      Score
  },
  methods:{
      isCorrect(id){
        console.log("test")
        // console.log(id);
        console.log(this.combatInfos[parseInt(this.$route.params['part'])-1].correct == id)
        this.display_answer = (this.combatInfos[parseInt(this.$route.params['part'])-1].correct == id)
      }
  },
  mounted(){
      const self=this;
      window.addEventListener('keyup', function(event) {
        if (event.keyCode === 40) { 
          self.currentHover = ((self.currentHover+1)%4);
        }
        if (event.keyCode === 38) { 
          self.currentHover = ((self.currentHover-1)%4 +4)%4;
        }
      });
  }
};
</script>

<style lang="scss" scoped>

  #combat{
    background-image:url('https://cdn.discordapp.com/attachments/1032179560516681728/1048051149904806009/combat_background.png');
    margin-top: 0px;
    height: 850px;
  }

</style>
