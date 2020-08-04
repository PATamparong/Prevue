<template>
  <div>
    <v-row class="lightbox white--text fill-height" fluid>
      <v-col>
        <v-parallax
          :aspect-ratio="16/9"
          src="https://video.cgtn.com/news/7959544e336b444d7955444f31597a4e356b6a4e31457a6333566d54/video/a1b7617e81284bc68fd22892b3c025e3/a1b7617e81284bc68fd22892b3c025e3.jpg"
          fluid
        >
          <div class="pa-12">
            <v-btn color="primary" :height="100" :width="100" fab>
              <v-icon :size="90" class="btn ma-8">mdi-account-circle</v-icon>
            </v-btn>
            <div class="text3" headline>
              <h1>Precious Angel Tamparong</h1>
            </div>
            <div class="text3">preciousangel.tamparong@student.passerellesnumeriques.org</div>
          </div>
        </v-parallax>
      </v-col>
    </v-row>
    <v-toolbar color="grey darken-1">
      <v-btn class="mx-2" color="orange darken-2" to="/dashboard"  dark>
        <v-icon dark left>mdi-arrow-right</v-icon>next
      </v-btn>
    </v-toolbar>
    <!--grid-->
    <v-container fluid>
      <v-card-text class="font-weight-medium mt-4 text-center overline">
        Learned:
        <v-divider></v-divider>
        </v-card-text>
      <v-row class="ma-2 pa-4">
        <v-col cols="4" sm="2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 18 : 4" class="mx-auto" height="150" max-width="220">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSb9lDb96m6O8tBsZJFrbxQMgvzlaYfh2tcw&usqp=CAU"
              >
                <div class="fill-height bottom-gradient"></div>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >VueJs</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="4" sm="2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 18 : 4" class="mx-auto" height="150" max-width="220">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT92UjtY-w461zR8pj3E09FWKbDrSuurYs3aw&usqp=CAU"
              >
                <div class="fill-height bottom-gradient"></div>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >ReactJs</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="4" sm="2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 18 : 4" class="mx-auto" height="150" max-width="220">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2b-RU0FilDwu3A_uvAsAwaZduNWQ23cWBqw&usqp=CAU"
              >
                <div class="fill-height repeating-gradient"></div>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >AngularJs</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="4" sm="2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 18 : 4" class="mx-auto" height="150" max-width="220">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtHs8d3cVJOVSQwOIj0Zk7ZxfEUPexZu6a7g&usqp=CAU"
              >
                <div class="fill-height repeating-gradient"></div>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >PhpLaravel</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="4" sm="2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 18 : 4" class="mx-auto" height="150" max-width="220">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsGUUowID1gcwm3yUAEqxLfC1UvfX032eYLQ&usqp=CAU"
              >
                <div class="fill-height repeating-gradient"></div>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >NodeJs</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="4" sm="2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 18 : 4" class="mx-auto" height="150" max-width="220">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHI4Z_lG0C8fNI18bqIG3gcZ_7sQsQfUoXQg&usqp=CAU"
              >
                <div class="fill-height repeating-gradient"></div>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >MongoDB</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="4" sm="2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 18 : 4" class="mx-auto" height="150" max-width="220">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDLwr7jJ6JsaWlR2mXUn7861iSFgmEL7Arzw&usqp=CAU"
              >
                <div class="fill-height repeating-gradient"></div>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >ExpressJs</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <!--language-->
        <v-col cols="4" sm="2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 18 : 4" class="mx-auto" height="150" max-width="220">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhBVUD87kIQCSsacDkFCJT_AKB2K6e_i70HQ&usqp=CAU"
              >
                <div class="fill-height repeating-gradient"></div>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >php</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="4" sm="2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 18 : 4" class="mx-auto" height="150" max-width="220">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQz5ZsHHFeIr1L7nC5yCO2SawBUxJTkGIQbXw&usqp=CAU"
              >
                <div class="fill-height repeating-gradient"></div>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >Python</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="4" sm="2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 18 : 4" class="mx-auto" height="150" max-width="220">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSY2qsHO2kw9ClksNop61uMsCJ1DjVJJPYqXg&usqp=CAU"
              >
                <div class="fill-height repeating-gradient"></div>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >c++</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="4" sm="2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 18 : 4" class="mx-auto" height="150" max-width="220">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoiOjCLzSq0iRp1UhXBiEGlPoQF8nPlwecIQ&usqp=CAU"
              >
                <div class="fill-height repeating-gradient"></div>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >Java</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="4" sm="2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 18 : 4" class="mx-auto" height="150" max-width="220">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-O6OZwUZo1eoN9J1GAtgmoYByD3vU3gFfGA&usqp=CAU"
              >
                <div class="fill-height repeating-gradient"></div>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >css</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="4" sm="2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 18 : 4" class="mx-auto" height="150" max-width="220">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr5kve8uJvA1JcDmKbSh1a_JFvLt5tUI8n2A&usqp=CAU"
              >
                <div class="fill-height repeating-gradient"></div>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >html</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="4" sm="2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 18 : 4" class="mx-auto" height="150" max-width="220">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnhBhwJuuqUnwP4WbEua-v90mOj2h70POFHQ&usqp=CAU"
              >
                <div class="fill-height repeating-gradient"></div>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >Bootstrap</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="4" sm="2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 18 : 4" class="mx-auto" height="150" max-width="220">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHOC1Mdk2Kf3kzCr7Kyi37WTXsyCfZREgv6w&usqp=CAU"
              >
                <div class="fill-height repeating-gradient"></div>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >Javascript</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="4" sm="2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 18 : 4" class="mx-auto" height="150" max-width="220">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCjdajr1iZJjHHk-8tI_027OgMifHq-w4TEA&usqp=CAU"
              >
                <div class="fill-height repeating-gradient"></div>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >jQuery</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-card-text class="font-weight-medium mt-6 text-center subtitle-1">
        <h1 class="ma-3">About</h1>
        This talks about the life of this developer and the journey she takes to go where she is right now.
        Her Life is full of challenges especially to her studies. But this doesn't stop her from achieving her goal.
      </v-card-text>
      <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
        She specializes in backend development and experience all the stages of the development cycle for dynamic web projects.
      </v-card-text>

      <v-divider></v-divider>
    </v-container>
    <v-footer dark padless class="footer">
      <v-card class="flex" flat tile>
        <v-card-title class="grey darken-3">
          <strong class="subheading">Get connected with me on social networks!</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 grey white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>
<style>
.text4 {
  font-family: courier, garamond, helvetica;
  height: 40px;
  text-align: center;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.footer {
  margin-top: 40px;
}
.btn{
  margin-left:20px;
}
</style>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>