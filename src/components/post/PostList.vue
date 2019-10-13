<template>
    <div class="flex flex-wrap -mx-2">
        <div class="w-1/3 px-2 my-2 h-full" v-for="post in posts" :key="post.id">
            <blog-post-card :post="post"></blog-post-card>
        </div>
    </div>
</template>

<script>
    import BlogPostCard from "@/components/post/BlogPostCard";
    export default {
        name: "PostList",
        components: {BlogPostCard},
        props:['posts']
    }
</script>

<style scoped>

</style>