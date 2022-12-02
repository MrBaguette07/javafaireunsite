<template>
    <div id="fond">
        <a class="jouer" href="app/narration/1/1">JOUER</a>
        <a class="quitter" href="https://skylord.fr">QUITTER</a>
    </div>
</template>
<script>
// import fond from '@static/assets/fond-accueil.png';
// import backgroundUrl from '../assets/fond-accueil.png'

export default {
    name:"Accueil-vue",
    
    // data() { 
    //     return {
    //         // fond: require("../assets/fond-accueil.png")
    //         backgroundUrl
    //     }
    // },
    mounted() {
        const self=this;
        window.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                if (event.keyCode === 13) { 
                    self.changementPlus()
                }
            }
        });
    }
}
</script>
<style>
*{
    background: none;
    border: 0px;
    margin: 0px;
}
#fond {
    background: url('../assets/fondaccueil.jpg');
    width: 1440px;
    height: 1024px;
    top: 0;
    position: absolute;
}
.jouer {
    margin-top: 396px;
    display:block;
    width: 823px;
    height: 232px;

    padding-top:64px;
    
    margin-left: auto;
    margin-right: auto;
    background: #EFEFEF;
    box-shadow: 0px 16px 4px rgba(0, 0, 0, 0.25);
    border-radius: 48px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 128px;
    line-height: 150px;
    align-items:center;

    color: #000000;
    text-decoration: none;
    margin-bottom: 16px;
}

.jouer:hover{
    height: 216px;
    margin-top: 412px;
    background: #D3D0D0;
    color: #000;
    box-shadow: 0px 16px 4px rgba(0, 0, 0, 0.25);
}


.quitter{
    position: relative;
    width: 320px;
    height: 80px;

    margin-top: 32px;

    display:block;
    margin-left: auto;
    margin-right: auto;

    background: #DD0E45;
    border-radius: 16px;

    padding-top: 22px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 47px;
    color: #fff;
    box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
    text-decoration: none;
    transition: background 200ms;
}




.quitter:hover {
    transition: background 200ms;
    background: #EC7897;
}
</style>
