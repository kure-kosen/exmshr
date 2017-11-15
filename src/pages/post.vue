
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
	  <div id="app">
	    <div v-if="!image">
	      <h2>Select an image</h2>
	      <input type="file" @change="onFileChange">
	    </div>
	    <div v-else>
	      <img :src="image" />
	      <button @click="removeImage">Remove image</button>
	    </div>
	  </div>
      </v-container>
    </main>
  </div>
</template>

<script>
  var app = new Vue({
      el: '#app',
      data: {
        image: ''
      },
      methods: {
        onFileChange: function(e){
	  var files = e.target.files || e.dataTransfer.files;
	  if (!files.length) {
	    return;
	  }
	  this.createImage(files[0]);
	},
	createImage(file) {
	  var image = new Image();
	  var reader = new FileReader();
	  var vm = this;
	  reader.onload = function(e) {
	    vm.image = e.target.result;
	  };
	  reader.readAsDataURL(file);
	},
	removeImage: function(e) {
	  this.image = '';
	}
      },
  });
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
