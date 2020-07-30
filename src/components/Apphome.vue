<template>
<div>
<v-row  class="lightbox white--text fill-height" fluid>
<v-col>
<v-parallax :aspect-ratio="16/9" src="https://video.cgtn.com/news/7959544e336b444d7955444f31597a4e356b6a4e31457a6333566d54/video/a1b7617e81284bc68fd22892b3c025e3/a1b7617e81284bc68fd22892b3c025e3.jpg" fluid>
        <div class="pa-12">
            <v-btn color="primary" :height="100" :width="100"  to="/dashboard" fab dark>
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
            <div class="text3" headline><h1>Precious Angel Tamparong</h1></div>
            <div class="text3">preciousangel.tamparong@student.passerellesnumeriques.org</div>
        </div>
  </v-parallax>
</v-col>
</v-row>
</div>
</template>
<style>
.text4{
  font-family:courier,garamond,helvetica;
  height:40px;
  align:center;
}
</style>