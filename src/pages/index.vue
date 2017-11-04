<template>
  <v-container
    fluid
    style="min-height: 0;"
    grid-list-lg
    >
    <v-layout row wrap>
      <v-flex xs12 v-for="i in 3" :key='i'>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div class="headline">Unlimited music now</div>
            <div>Listen to your favorite artists and albums whenenver and wherever, online and offline.</div>
          </v-card-title>
          <v-card-media
                 :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                 height="150px"
                 >
          </v-card-media>
            <v-card-actions>
              <v-btn flat dark>
                <v-icon>fa-search</v-icon>
              </v-btn>
            </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: true
  }),
  props: {
    source: String
  }
}
</script>

<style lang="stylus">
.group
    display: flex
    flex: 1
    justify-content: space-around
</style>
