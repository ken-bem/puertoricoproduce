<template>
    <div class="w-full">
            <div class=" bg-white ">

                <img src="../assets/home/home-header.jpg" alt="" class="w-full">


                <div class="p-6">

                    <h2 class="text-2xl font-black">Bienvenido a nuestro HomeBox Community Blog</h2>

                    <p class="">Creemos que la reconexión entre productores y consumidores viene atada a la comunicación y educación de todas las partes.</p>
                </div>


            </div>

            <div class="w-full p-6">
                <post-list :posts="posts" v-if="posts"></post-list>
            </div>
    </div>
</template>

<script>
    import PostList from "@/components/post/PostList";
    export default {
        name: "Home",
        components: {PostList},
        data() {
            return {
                posts: null
            }
        },
        mounted(){
            this.getBlogPosts();
        },
        methods: {
            async getBlogPosts(){
                let data  = await this.$http.get("posts?_embed&per_page=20");
                this.posts = data.data
            }
        }
    }
</script>

<style scoped>

</style>