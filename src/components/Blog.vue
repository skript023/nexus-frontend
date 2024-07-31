<template>
    <v-app  id="content">
        <v-main>
            <v-container class="pa-0">
                <v-img :src="header" cover class="header-image"></v-img>
                <v-row class="nav-bar" justify="center">
                    <v-col cols="12" md="8">
                        <v-toolbar flat>
                            <v-toolbar-title>Nexus</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn id="nav-btn">HOME</v-btn>
                            <v-btn id="nav-btn">About</v-btn>
                            <v-btn id="nav-btn">Contact</v-btn>
                            <v-btn id="nav-btn">Download</v-btn>
                            <v-btn id="nav-btn">Report</v-btn>
                            <v-btn id="nav-btn">Coming Soon</v-btn>
                            <v-btn id="nav-btn" icon="mdi-twitter" style="margin-left: 12rem;"></v-btn>
                            <v-btn id="nav-btn" icon="mdi-facebook" class="mx-2"></v-btn>
                            <v-btn id="nav-btn" icon="mdi-instagram"></v-btn>
                            <v-btn id="nav-btn" icon="mdi-magnify" class="mx-2 mr-12"></v-btn>
                        </v-toolbar>
                    </v-col>
                </v-row>
  
                <v-row>
                    <v-col cols="12" md="8">
                        <v-row>
                            <!-- Post Card -->
                            <v-col cols="12" md="6" v-for="(post, index) in posts" :key="index" class="mb-4">
                                <v-card class="post-card">
                                    <v-img :src="post.image" height="400px" width="600px">
                                        <v-card-title class="post-title">{{ post.title }}</v-card-title>
                                    </v-img>
                                    <!-- Description hidden until hover -->
                                    <v-card-text class="post-description">{{ post.excerpt }}</v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                        <!-- Pagination -->
                        <div class="text-center my-4">
                            <v-btn class="mx-2" outlined color="#ff66b2">Prev</v-btn>
                            <v-btn class="mx-2" outlined color="#ff66b2">Next</v-btn>
                        </div>
                    </v-col>
    
                    <v-col cols="12" md="4">
                        <v-card class="mb-4">
                            <v-card-title class="sidebar-title">Popular Post</v-card-title>
                            <v-card-text>
                                <v-list>
                                    <v-list-item v-for="(popularPost, index) in popularPosts" :key="index" class="popular-post-item">
                                        <v-list-item-media>
                                            <v-img :src="'https://via.placeholder.com/600x400'" style="height: 50%; width: 50%;"></v-img>
                                        </v-list-item-media>
                                        <v-list-item-title>{{ popularPost.title }}</v-list-item-title>
                                        <v-list-item-subtitle>{{ popularPost.excerpt }}</v-list-item-subtitle>
                                    </v-list-item>
                                </v-list>
                            </v-card-text>
                        </v-card>

                        <v-card class="mb-4">
                            <v-card-title class="sidebar-title">Blog Archive</v-card-title>
                            <v-card-text>
                                <v-treeview :items="archiveItems"></v-treeview>
                            </v-card-text>
                        </v-card>

                        <v-card>
                            <v-card-title class="sidebar-title">Weekly Post</v-card-title>
                            <v-card-text>
                                <v-list>
                                    <v-list-item v-for="(popularPost, index) in popularPosts" :key="index" class="popular-post-item">
                                        <v-list-item-media>
                                            <v-img :src="'https://via.placeholder.com/600x400'" style="height: 50%; width: 50%;"></v-img>
                                        </v-list-item-media>
                                        <v-list-item-title>{{ popularPost.title }}</v-list-item-title>
                                        <v-list-item-subtitle>{{ popularPost.excerpt }}</v-list-item-subtitle>
                                    </v-list-item>
                                </v-list>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <!-- Footer -->
        <v-footer color="#ff66B2">
            <v-container>
                <v-row>
                    <v-col class="text-center" cols="12">
                        Copyright <span>&copy; 2024 Seulbi Cybernetic - Designed by Vladimir Leonov</span>
                    </v-col>
                    </v-row>
            </v-container>
        </v-footer>
    </v-app>
</template>
  
<script lang="ts">
import { VTreeview } from 'vuetify/labs/VTreeview';


export default {
    components: {
        VTreeview
    },
    data() {
        return {
            header: '/cybernetic_b.jpg',
            posts: [
                { title: 'Indirect Speech', excerpt: 'Some text here...', image: 'https://via.placeholder.com/600x400'},
                { title: 'Percakapan Langsung (Quoted)', excerpt: 'Some text here...', image: 'https://via.placeholder.com/600x400' },
                { title: 'Business Report', excerpt: 'Some text here...', image: 'https://via.placeholder.com/600x400' },
                { title: 'Accepting and Confirming in Negotiation', excerpt: 'Some text here...', image: 'https://via.placeholder.com/600x400' },
                { title: 'Tugas Komunikasi Bisnis Complain Letter', excerpt: 'Some text here...', image: 'https://via.placeholder.com/600x400' },
            ],
            popularPosts: [
                { title: 'Pindad SS2 V4 Mod for Resident Evil 4', excerpt: 'Some text here...', image: '/path/to/thumb1.jpg' },
                { title: 'Download Here Author: Sklrpt47', excerpt: 'Some text here...', image: '/path/to/thumb2.jpg' },
                { title: 'Percakapan Langsung (Quoted Speech)', excerpt: 'Some text here...', image: '/path/to/thumb3.jpg' },
            ],
            archives: [
                { month: 'July', year: 2018 },
                { month: 'May', year: 2018 },
                { month: 'March', year: 2018 },
            ],
            archiveItems: [
                {
                    id: 1,
                    title: '2018',
                    children: [
                        {
                            id: 2,
                            title: 'July',
                            children: [
                                { id: 3, title: 'Review Game NDS' },
                                { id: 4, title: 'Terjemahan' },
                            ],
                        },
                        {
                            id: 5,
                            title: 'May',
                            children: [
                                { id: 6, title: 'Post 1' },
                                { id: 7, title: 'Post 2' },
                            ],
                        },
                        {
                            id: 8,
                            title: 'March',
                            children: [
                                { id: 9, title: 'Post 1' },
                                { id: 10, title: 'Post 2' },
                            ],
                        },
                    ],
                },
                {
                    id: 2,
                    title: '2019',
                    children: [
                        {
                            id: 2,
                            title: 'July',
                            children: [
                                { id: 3, title: 'Review Game NDS' },
                                { id: 4, title: 'Terjemahan' },
                            ],
                        },
                        {
                            id: 5,
                            title: 'May',
                            children: [
                                { id: 6, title: 'Post 1' },
                                { id: 7, title: 'Post 2' },
                            ],
                        },
                        {
                            id: 8,
                            title: 'March',
                            children: [
                                { id: 9, title: 'Post 1' },
                                { id: 10, title: 'Post 2' },
                            ],
                        },
                    ],
                },
            ],
        };
    },
};
</script>
  
<style scoped>
    .header-image {
        position: relative;
        height: 400px;
        z-index: 1;
    }

    .nav-bar {
        position: absolute;
        top: 200px;
        width: 100%;
        z-index: 2;
    }

    .v-toolbar {
        background-color: #ff66b2;
    }

    .v-toolbar-title {
        font-family: 'Arial', sans-serif;
        font-size: 24px;
        color: #ffffff;
    }

    .nav-btn {
        color: #ff66b2;
    }

    #nav-btn {
        color: rgb(255, 255, 255);
    }

    .mb-4 {
        margin-bottom: 16px;
    }

    .v-card-title {
        font-weight: bold;
    }

    .post-card {
        position: relative;
        overflow: hidden;
    }

    .post-title {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #ff66b2;
        color: white;
        font-weight: bold;
        padding: 10px;
    }

    .post-description {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: #ff66b2; /* Make background darker for readability */
        color: white;
        opacity: 0;
        transition: opacity 0.3s;
        padding: 10px;
    }

        /* Ensure only the description appears on hover, not affecting the image */
    .post-card:hover .post-description {
        opacity: 1;
    }

    .sidebar-title {
        background-color: #ff66b2;
        color: white;
        padding: 10px;
    }

    .v-card-text {
        color: #333;
    }

    .v-btn {
        text-transform: none;
    }

    .my-4 {
        margin-top: 16px;
        margin-bottom: 16px;
    }

    .mx-2 {
        margin-left: 8px;
        margin-right: 8px;
    }

    .popular-post-item {
        border-bottom: 1px solid #eee;
        padding-bottom: 8px;
        margin-bottom: 8px;
    }
</style>
  