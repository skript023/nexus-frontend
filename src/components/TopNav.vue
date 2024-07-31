<template>
    <v-img :src="header" cover class="header-image"></v-img>
    <v-container fluid class="nav-bar">
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-toolbar flat>
                    <v-toolbar-title>Nexus</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn id="nav-btn" v-for="btn in buttons" :key="btn.text" class="mx-2" @click="navigate(btn.link)">
                    {{ btn.text }}
                    </v-btn>
                    <v-btn icon="mdi-twitter" class="ml-10" id="nav-icon"></v-btn>
                    <v-btn icon="mdi-facebook" class="mx-2" id="nav-icon"></v-btn>
                    <v-btn icon="mdi-instagram" id="nav-icon"></v-btn>
                    <v-btn icon="mdi-magnify" class="mx-2" id="nav-icon"></v-btn>
                </v-toolbar>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts">
import '@/styles/blog.css';

export default {
    components: {
        
    },
    data() {
        return {
            header: '/cybernetic_b.jpg',
            buttons: [
                { text: 'HOME', link: '/' },
                { text: 'About', link: '/about' },
                { text: 'Contact', link: '/contact' },
                { text: 'Download', link: '/download' },
                { text: 'Report', link: '/report' },
                { text: 'Coming Soon', link: '/coming-soon' },
            ],
        }
    }
}
</script>