
<template>
  <div>
    <v-toolbar app scroll-off-screen>
      <v-btn icon>
        <v-icon>fa-search</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>fa-plus</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
        >
         <v-btn fab dark small color="primary">
           <v-icon dark>fa-remove</v-icon>
         </v-btn>
      </v-container>
    </main>
  </div>
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
