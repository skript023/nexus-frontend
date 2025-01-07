<template>
    <v-row>
        <!-- Post Card -->
        <v-col cols="12" md="6" v-for="(post, index) in posts" :key="index" class="mb-4">
            <v-card class="post-card" @mouseover="hover = true" @mouseleave="hover = false">
                <v-img :src="post.image ? post.image : 'https://via.placeholder.com/600x400'"></v-img>
                <v-card-title class="post-title">{{ post.title }}</v-card-title>
                <div v-if="hover" class="hover-content">
                <p class="article">{{ post.article }}</p>
                <div class="actions">
                    <v-btn small>{{ post.comments.length }} Comments</v-btn>
                    <v-btn small @click="readMore(post)">Read More</v-btn>
                </div>
                </div>
            </v-card>
        </v-col>
    </v-row>
    <!-- Pagination -->
    <div v-if="posts.length > 0" class="text-center my-4">
        <v-btn class="mx-2" outlined color="#ff66b2">Prev</v-btn>
        <v-btn class="mx-2" outlined color="#ff66b2">Next</v-btn>
    </div>
</template>
<script lang="ts">
import '#root/styles/blog.css';

import { ref } from 'vue';
import Post from '#root/services/post/dto/post.dto';
import post from '#root/services/post//post.service';

export default {
    setup() {
        const hover = ref(false);
        return { hover };
    },
    data() {
        return {
            posts: [] as Post[],
        };
    },
    mounted() {
        post.get_all().then((response) => {
            if (response.success)
            {
                this.posts = response.data;
            }
        })
    },
    methods: {
        readMore(post: Post) {
            this.$router.push(`/post/${post.slug}`);
        }
    }
}
</script>