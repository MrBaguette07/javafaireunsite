<template>
    <div id="container">
        <div id="question">
            <div id="title">
                <h1>La Question :</h1>
            </div>
            <div id="box-question">
                <p>{{text}}</p>
            </div>
        </div>
    </div>
</template> 

<script>
export default {
    name : 'Question-vue',
    props : [
        'text'
    ]
}
</script>
<style lang="scss" scoped>
    #container{
        padding-top: 80px;
        #question{

            // display à voir en fonction de gauthier
            width : 950px;
            height : 140px;
            background-color:white;
            display:block;
            border-radius:32px;
            margin:auto;
            box-shadow: 0px 5px 4px 0px rgba(0,0,0,0.45);
            
            #title{
                h1{
                    padding-top:35px;
                    font-family:"Roboto";
                    font-size:24px;
                }
            }
            #box-question {

                h1 {
                    margin-top: 30px;
                    padding-top: 30px;
                }
      
                p{
                    font-family:"Roboto";
                    font-size:18px;
                    margin-top: 20px;
                }
            }   
        }
    }
</style>