<template>
    <div id="personnage">
        <img :src="image_personnage_url">
    </div>
</template>
<script>
export default {
    name:"Personnage-comp-vue",
    props:[
        'image_personnage_url'
    ]
}
</script>
<style lang="scss" scoped>
#personnage{
    display:flex;
    justify-content:center;
    margin-top:50px;
    img {
        width:300px;
        height:300px;
    }
}
</style>