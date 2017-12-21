<template>
	<div>
		<div v-if="!image">
			<h2>select the image</h2>
			<div class="add">
				<label id="addlabel">
				<i class="fa fa-plus fa-3x fa-skyblue" aria-hidden="true"></i>
				<input type="file" style="display:none;"v-on:change="fileSelected">
				</label>
			</div>

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
	.fa-skyblue {color: skyblue},
	.add {
		text-align: center;
		width: 500px;
	}
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
