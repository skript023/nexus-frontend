<template>
    <v-col cols="12" md="4">
        <v-card class="mb-4">
            <v-card-title class="sidebar-title">Popular Post</v-card-title>
            <v-card-text>
                <v-list>
                    <v-list-item v-for="(popularPost, index) in popularPosts" :key="index" class="popular-post-item">
                        <v-row>
                            <v-col cols="4">
                                <v-img :src="popularPost.image" class="popular-post-image"></v-img>
                            </v-col>
                            <v-col cols="8">
                                <!-- <v-list-item-subheader> -->
                                    <v-list-item-title>{{ popularPost.title }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ popularPost.excerpt }}</v-list-item-subtitle>
                                <!-- </v-list-item-subheader> -->
                            </v-col>
                        </v-row>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>

        <v-card class="mb-4">
            <v-card-title class="sidebar-title">Blog Archive</v-card-title>
            <v-card-text>
                <!-- <v-treeview :items="archiveItems"></v-treeview> -->
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
</template>
<script lang="ts">
import '#root/styles/blog.css'
import { VTreeview } from 'vuetify/labs/components';

export default {
    components: {
        VTreeview
    },
    data() {
        return {
            popularPosts: [
                { title: 'Pindad SS2 V4 Mod for Resident Evil 4', excerpt: 'Some text here...', image: 'https://via.placeholder.com/600x400' },
                { title: 'Download Here Author: Sklrpt47', excerpt: 'Some text here...', image: 'https://via.placeholder.com/600x400' },
                { title: 'Percakapan Langsung (Quoted Speech)', excerpt: 'Some text here...', image: 'https://via.placeholder.com/600x400' },
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
    }
}
</script>