<template>
<div class="post-detail">
    <h1>This is a posts page</h1>
    <p>Display the content of posts with id of {{ $route.params.id}}</p>
    <button @click="showPostid">Show Post ID</button>
    <div>
        <button @click="goHome">Bac to home page</button>
        <button @click="goFirstPage">Go to first post</button>
    </div>

    <p><RouterLink to="/posts">&lt;Back</RouterLink></p>
</div>
</template>

<script setup>

    import { useRoute, useRouter } from 'vue-router';
    


    const route = useRoute()
    const router = useRouter()
        const showPostid = () => {
            alert(`the id of this post is: ${route.params.id}`)
        }

    const goHome = () => {
        setTimeout(() => {
            router.push({ name: 'home' })
            
        }, 200);
    }
    const goFirstPage = () => {
        router.push({ 
            name: 'postsDetail',
            params: {
                id: 'id1'
            }
        })

    }

</script>







