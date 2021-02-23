<template>
    <div>
        <div class="grid-container">
            <div class="ville">
                <div class="nomVille">{{ ville }}</div>
                <div class="jours">Samedi 20/02/2021</div>
                <div class="heure">22:54</div>
            </div>
            <div class="icon"><fa :icon="iconMeteo"/></div>
            <div class="temperature">
                <div class="titreTemperature">Température</div>
                <div class="valeurTemperature">{{temperature}}°c</div>
            </div>
            <div class="humidite">
                <div class="titreHumidite">Humidité</div>
                <div class="valeurHumidite">{{humidite}}%</div>
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
<style lang="scss">
.grid-container {
  background-color: rgba(184, 255, 242, 0.43);
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "ville icon"
    "temperature humidite";
}

.ville {
    margin-left: 10%;
    margin-top: 10%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
        "nomVille"
        "jour"
        "heure";
    grid-area: ville;
}

.nomVille { 
    grid-area: nomVille; 
    font-size: 25px;
    font-weight: 600;
}

.jour { 
    grid-area: jour;
    font-size: 12px; 
}

.heure { 
    grid-area: heure;
    font-size: 12px;  
}

.icon { 
    margin-top: 10%;
    grid-area: icon;
}

.temperature {
    margin-left: 10%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
        "titreTemperature titreTemperature"
        "valeurTemperature valeurTemperature";
    grid-area: temperature;
}

.titreTemperature { 
    grid-area: titreTemperature; 
    font-size: 14px;
    font-weight: 500;
}

.valeurTemperature { 
    grid-area: valeurTemperature; 
    font-size: 25px;
    font-weight: 600;
}

.humidite {
    margin-left: 10%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
       "titreHumidite titreHumidite titreHumidite"
       "valeurHumidite valeurHumidite valeurHumidite";
    grid-area: humidite;
}

.titreHumidite { 
    grid-area: titreHumidite; 
    font-size: 14px;
    font-weight: 500;
}

.valeurHumidite { 
    grid-area: valeurHumidite;
    font-size: 25px;
    font-weight: 600; 
}
</style>