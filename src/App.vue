<script lang="ts">
import router from '@/routes';
import TopNav from '@/components/TopNav.vue';
import SidePanel from '@/components/SidePanel.vue';
import { RouterView } from 'vue-router';
import { ProgressFinisher, useProgress } from '@marcoschulte/vue3-progress';

import '@/styles/blog.css';

export default {
	components:{
		TopNav,
		SidePanel,
		RouterView
	},
	inject: [
		'progress'
	],
	setup() {
		const progresses = [] as ProgressFinisher[];

		router.beforeEach((_to: any, _from: any, next: any) => {
			progresses.push(useProgress().start());
			next();
		});
		router.afterEach((_to: any, _from: any) => {
			progresses.pop()?.finish();
		});
		
		return {
			progresses,
		}
	},
	mounted() {
		console.log(import.meta.env.VITE_API_URL_DEV);
	},
	created() {

	}
}
</script>

<template>
	<div id="app">
		<v-app  id="content">
			<v-main>
				<v-container class="pa-0">
					<top-nav/>
					<v-row>
						<v-col cols="12" md="8">
							<router-view/>
    					</v-col>
						<side-panel/>
					</v-row>
				</v-container>
			</v-main>
			<!-- Footer -->
			<v-footer color="#ff66B2" class="mt-5">
				<v-container>
					<v-row>
						<v-col class="text-center" cols="12">
							Copyright <span>&copy; 2024 Seulbi Cybernetic - Designed by Vladimir Leonov</span>
						</v-col>
					</v-row>
				</v-container>
			</v-footer>
		</v-app>
	</div>
</template>