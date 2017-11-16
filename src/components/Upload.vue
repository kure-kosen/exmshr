<template>
	<div>
		<div v-if="!image">
			<h2>Select an image</h2>
			    <input type="file" v-on:change="fileSelected">
			<v-btn color="primary" >
			</v-btn>
		</div>
		<div v-else>
			<img :src="image" />
			<v-btn fab dark color="indigo" @click="removeImage">
				<v-icon dark>add</v-icon>
			</v-btn>
		</div>
	</div>
</template>
<style>
</style>
<script>
	module.exports=({
    	data: function() {
		return {
			image: ''
		}
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
</script>
