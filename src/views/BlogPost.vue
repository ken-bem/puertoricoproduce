<template>
    <div v-if="post">
        <div class="w-full ">
            <img :src="image" class=" h-64 w-full object-cover">
        </div>
        <div class="p-4">
            <div class="bg-white p-4 w-1/2">
                <h2 class="text-xl font-black">{{post.title.rendered}} </h2>
                <div class="flex flex-wrap">
                    <p v-for="(category, index) in categories" :key="index">{{category}}</p>
                </div>
                <div>
                    <span class="text-sm">{{post._embedded.author[0].name}}</span> &bullet; <span class="text-xs">{{post.date | humanDate}}</span>
                </div>
            </div>

            <div class="-ml-2 wordpress">
                <div v-html="post.content.rendered"></div>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "BlogPost",
        data() {
            return {
                post: null,
            }
        },
        mounted(){
            this.loadPost()
        },

        computed: {
            image(){
                if(!('wp:featuredmedia' in this.post._embedded)) return 'https://source.unsplash.com/800x600/?produce';

                return this.post._embedded['wp:featuredmedia']['0'].source_url
            },
            categories() {
                let terms = this.post._embedded['wp:term'][0];

                return terms.map(term => term.name);
            },
            tags() {
                let terms = this.post._embedded['wp:term'][1];

                return terms.map(term => term.name);
            }
        },

        methods: {
            async loadPost(){
                let data = await this.$http.get(`/posts/${this.$route.params.id}?_embed`);
                this.post = data.data;
            },

        }
    }
</script>

<style scoped>


</style>