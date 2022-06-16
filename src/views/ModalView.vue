<template>
    <div class="modals">
        <h1>Modals</h1>

        <button @click="showModel = true">Show Modals</button>
        <Modal 
        v-model="showModel"
      

        title = "My modal title ">
        
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut libero odit fugit, pariatur doloribus rem asperiores quo magni obcaecati iusto ea, blanditiis vitae voluptatem sequi? Voluptas excepturi pariatur nostrum eos!</p>

        </Modal>
       
        
     
    </div>

</template>



<script setup>
/*
import

*/
import { ref } from 'vue'
 import Modal from '@/components/modal.vue'

const showModel = ref(false)
 
</script>





