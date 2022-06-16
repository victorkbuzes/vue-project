<template>
    <div class="post">
    <h1>Posts</h1>
    <ul>
        <li
        v-for="post in posts"
        :key="post.id"
         >
            <RouterLink  :to="`/postsDetail/${post.id}`"> {{ post.title}}</RouterLink>
        </li>
       
    </ul>

<textarea v-autofocus>
</textarea>

    <div>
        <button
        @click="increaseCounter(1)"
        class= "{  'yellow' : oddOrEven == 'odd'}"
        >


        {{ counterData.count }}
        </button>
    </div>
</div>
</template>

<script setup>
/*
Imports

*/
 import { vAutofocus } from '@/directives/vAutofocus'
 import { ref } from 'vue'
 import { useCounter } from "@/use/useCounter";
 const posts = ref([
        {
            id: 'id1',
            title: "Post 1"

        },
          {
            id: 'id2',
            title: "Post 2"

        },
          {
            id: 'id3',
            title: "Post 3"

        }
    ])

    const  { counterData , increaseCounter ,oddOrEven } = useCounter()
</script>





