<template>
    <v-app  id="content">
        <blog/>
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
import Blog from './Blog/Blog.vue';

export default {
    components: {
        Blog
    },
    data() {
        return {
            
        };
    },
};
</script>