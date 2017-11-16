
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
        <div>教科</div>
	<v-select v-bind:items="dropdown_font1" overflow label="教科" append-icon="fa-arrow-down"></v-select>
        <div>学年</div>
        <v-select v-bind:items="dropdown_font2" overflow label="学年" append-icon="fa-arrow-down"></v-select>
        <v-layout row wrap>
        <v-flex xs3 v-for="i in 3" :key="i">
        <v-card dark color="secondary">
          <v-card-text class="px-0"></v-card-text>
        </v-card>
      </v-flex> 
         <v-btn color="search">検索</v-btn>
        </v-layout>
             
      </v-container>
   </main>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    dropdown_font1: ['bando', '坂東', '微積', '物理'],
    dropdown_font2: ['１年','２年','３年','4年','5年'],
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
