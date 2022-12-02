<template>
    <div class="main">
      <div class="lesboutons">
      <button class="pokesex" @click="pokesex_opened = !pokesex_opened">Pokesex</button>
      <button class="accueil" @click="retourAccueil">Accueil</button>
      </div>
      <Pokesex v-if="pokesex_opened == true" @hidePokesex=closePokesex()></Pokesex>
      <Accueil></Accueil>
      <router-view></router-view>
      <div class="rondrouge1"></div>
      <div class="rondrouge2"></div>
      <img src="../assets/Plus_font_awesome.svg.png" class="plus">
    </div>
</template>
  
<script>
  import Pokesex from '../components/Pokesex.vue';
  export default {
    name: 'Main-vue',
    data() { return {
        pokesex_opened: false,
        accueil_opened: false


      }
    },
    components: {
      Pokesex
    },
    methods: {
      closePokesex(status){
        this.pokesex_opened = status;
      },
      retourAccueil(){
        this.$router.push('/');
      }
      
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
/* * {
  cursor: url('../assets/pokeball.png');
} */
body {
  background-color: #000;
}
.lesboutons{
  position: relative;
  width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
.plus {
  position: absolute;
  width: 200px;
  left: 250px;
  margin-top: 0px;
  
}
button {
  cursor: pointer;
}

.main {
  background-color: #fff;
  height: 1224px;
  position: relative;
  border-radius: 50px;
}

.pokesex {
  background-color: #DD0E45;
  width: 150px;
  height: 35px;
  border-radius: 30px;
  color: white;
  font: 1.2em "Fira Sans", sans-serif;
  top: 10px;
  position: absolute;
  right: 0px;
  z-index: 9999;
  transition: transform .2s;
}
.rondrouge1{
  background-color: red;
  border-radius: 100%;
  width: 64px;
  height: 64px;
  position: absolute;
  z-index: 9999999999999;
  top: 1120px;
  right: 440px;
  box-shadow: 0px 16px 4px rgba(0, 0, 0, 0.25);
}
.rondrouge2{
  background-color: red;
  border-radius: 100%;
  width: 64px;
  height: 64px;
  position: absolute;
  z-index: 9999999999999;
  top: 1050px;
  right: 330px;
  box-shadow: 0px 16px 4px rgba(0, 0, 0, 0.25);
}
.accueil {
  background-color: #DD0E45;
  width: 150px;
  height: 35px;
  border-radius: 30px;
  color: white;
  z-index: 9999;
  font: 1.2em "Fira Sans", sans-serif;
  top: 10px;
  position: absolute;
  left: 10px;
  transition: transform .2s;
}

.pokesex:hover {
  background-color:#EC7897;
  transform: scale(1.02);
}

.pokesex:active {
  background-color:#EC7897;
  transform: scale(1.06);

}

.accueil:hover {
  background-color:#EC7897;
}

</style>