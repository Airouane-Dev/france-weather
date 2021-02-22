<template>
    <div>
        <div class="flex flex-wrap overflow-hidden">

            <div class="w-1/2 overflow-hidden">
                {{ ville }}
            </div>

            <div class="w-1/2 overflow-hidden">
                <fa :icon="iconMeteo"/>
            </div>

            <div class="w-1/2 overflow-hidden">
                Température
            </div>

            <div class="w-1/2 overflow-hidden">
                Humidité
            </div>

            <div class="w-1/2 overflow-hidden">
                {{temperature}}°c
            </div>

            <div class="w-1/2 overflow-hidden">
                {{humidite}}%
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'CardOverView',
    props: [
        'ville',
        'iconMeteo',
        'temperature',
        'humidite'
    ]
}
</script>
<style lang="">
    
</style>