<template>
    <div class="narration">
        <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    name : 'TextNarration-vue',
    props : [
        'text',
        'personne'
    ],

    mounted() {
        const self=this;
        window.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                if (event.keyCode === 13) { 
                    self.$emit('passerEntrer',(self.typeTextActuel+1));
                }
            }
        });
    }
}
</script>
<style lang="scss" scoped>

    .narration {
        padding-top: 24px;
        position: relative;
        display: block;
        width: 1440px;
        height: 224px;
        left: 0px;
        top: 800px;


        text-align: center;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 46px;
        line-height: 54px;
        color: #000;

        background: rgba(255, 255, 255, 0.8);
    }
</style>