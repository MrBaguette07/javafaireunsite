<template>
    <div id="answers">
        <div class="rep" v-for="(answer,index) in answers" :key="index">
            <a :class="{ 'bouton': (selected+1 == index) }" href="#" @click="$emit('estCorrect',index);">{{answer}}</a>
        </div>
    </div>  
</template>

<script>
export default {
    name: "AnswerQuestion-vue",
    props: ["answers","selected"],
    data : function () { 
        return {
        }
    },
    methods:{
    },
}
</script>

<style lang="scss" sloped>
#answers{

    width: 100%;
    text-decoration: none;
    margin-top:00px;
    .rep{
        display:inline-flex;
        margin-top:25px;
        margin-left:15px;
        
        background-color:white;
        width:500px;
        border-radius: 10px;
        box-shadow: 0px 5px 4px 0px rgba(0,0,0,0.45);

        transition: all 0.5s;

        :hover{
            background-color:#FBE1E8;
            border-radius: 10px;
        }

        :active {
            transform: scale(1.01)
        }
        
        a {
            padding:20px;
            text-decoration: none;
            color: black;
            width:100%;
            height:100;
            font: 1.2em "Fira Sans", sans-serif;

        }
        .a:link { text-decoration: none; }
        .a:visited { text-decoration: none; }
        .a:hover { text-decoration: none; }
        .a:active { text-decoration: none; }


        .bouton{
            // background-color:; 
            display:block;
            font-size: 16px;
            color:black;
            text-decoration: none;
            width:100%;
            height:100;
        }   
    }
}
</style>