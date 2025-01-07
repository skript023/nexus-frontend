<template>
    <v-row>
        <!-- Post Card -->
        <v-col cols="12" md="6">
            
        </v-col>
    </v-row>
</template>
<script lang="ts">
import '#root/styles/blog.css';

import { ref } from 'vue';
import Post from '#root/services/post/dto/post.dto';
import post from '#root/services/post/post.service';

export default {
    setup() {
        const hover = ref(false);
        return { hover };
    },
    data() {
        return {
            slug: '',
            post: {} as Post
        };
    },
    created() {
            this.slug = this.$route.params.slug as string;
    },
    watch: {
        '$route.params.slug': function(newId) {
            this.slug = newId;
        }
    },
    mounted() {
        post.read_more(this.slug).then((response) => {
            if (response.success)
            {
                this.post = response.data;
            }
        });
    },
    methods: {
        readMore(post: Post) {
            this.$router.push(`/post/${post.slug}`);
        }
    }
}
</script>