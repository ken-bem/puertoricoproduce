<template>
    <div class="bg-white rounded-lg shadow" >

        <div class="relative overflow-hidden" v-if="image">
            <img :src="image" alt="" class="h-64 w-full object-cover overflow-hidden">
        </div>

        <div class="p-4">
            <div class="flex-wrap flex my-2">
                <span v-for="(category, index) in categories" :key="index"
                      class=" mt-1 text-white font-black text-teal-500 capitalize italic text-sm ">{{category}}</span>
            </div>
            <div class="flex flex-wrap justify-between align-center items-center">
                <a v-html="post.title.rendered" :href="`/post/${post.id}`" class="text-xl font-black truncate w-64"></a>
                <p class="text-xs italic">{{post.date | humanDate}}</p>
            </div>
            <div class="mt-1 ">
                <p v-html="post.excerpt.rendered" class=" whitespace-pre-line "></p>
            </div>

            <div class=" mt-4 flex flex-wrap items-center align-baseline">
                <span v-for="(tag, index) in tags" :key="index"
                      class=" mt-1 p-2 mx-3 bg-teal-500 text-white font-black text-xs lowercase">{{tag}}</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "BlogPostCard",
        props: ['post'],
        data() {
            return {}
        },
        computed:{
            image(){
                if(!('wp:featuredmedia' in this.post._embedded)) return 'https://source.unsplash.com/800x600/?produce';

                return this.post._embedded['wp:featuredmedia']['0'].source_url
            },
            tags(){
                if (this.post._embedded['wp:term'][1] === null) return [];
                let terms = this.post._embedded['wp:term'][1];

                return terms.map(term => term.name);
            },
            categories(){

                if(this.post._embedded['wp:term'][0] === null) return [];

                let terms = this.post._embedded['wp:term'][0];

                return terms.map(term => term.name);
            }
        },
        mounted(){

        },
        methods: {
        }

    }
</script>

<style scoped>

</style>