<template>
    <v-main>
        <v-container class="pa-0">
            <top-nav/>
            <v-row>
                <post/>    
                <side-panel/>
            </v-row>
        </v-container>
    </v-main>
</template>
  
<script lang="ts">
import Post from './Post.vue';
import TopNav from '@/components/TopNav.vue';
import SidePanel from '@/components/SidePanel.vue';

import '@/styles/blog.css';

export default {
    components: {
        TopNav,
        Post,
        SidePanel
    },
    data() {
        return {
            
        };
    },
};
</script>