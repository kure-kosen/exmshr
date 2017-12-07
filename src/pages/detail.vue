<template>
<div>	
	<img src="https://placehold.jp/400x600.png" content="width=device-width">	
	<v-tabs fixed centered>
		<v-tabs-bar class="cyan" dark>
			<v-tabs-slider class="yellow"></v-tabs-slider>
			<v-tabs-item 
				v-for="i in items"
				:key="i"
				:href="'#tab-' + i"
			>
			{{ i }}
			</v-tabs-item>
		</v-tabs-bar>
		<v-tabs-items>
			<v-tabs-content
				v-for="i in items"
				:key="i"
				:id="'tab-' + i"
			>
				<v-card flat>
					<v-card-text>{{text}}</v-card-text>
				</v-card>
			</v-tabs-content>
		</v-tabs-items>
	</v-tabs>
</div>
</template>
<style>
</style>
<script>
	export default {           
	data () {                         
		return {                                 
			items: ['Item One', 'Item Seventeen', 'Item Five'],                                 
			text: ''                                 
			}                         
		}                 
	}
</script>
