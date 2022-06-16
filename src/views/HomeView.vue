

<template>
  <div class="home">
  <h1> {{appTitle}}</h1>
  <h3> {{ counterData.title }}: </h3>
    <button  @click="increaseCounter(2, $event)" class="btn">+</button>
      <span class="counter">{{counterData.count}}</span>
    <button @click="decreaseCounter(3)" class="btn">-</button>
     <span class="counter"></span>
     <p>This counter is {{oddOrEven}}</p>
  <div class="edit">
    <h3>Edit counter Title</h3>
    <input v-model = "counterData.title" type="text" v-autofocus>

  </div>
  </div>

</template>
<script setup>
  import { ref , onMounted } from 'vue';

  import { vAutofocus } from '@/directives/vAutofocus';

  import { useCounter } from  '@/use/useCounter'


  const appTitle = "My Computer App Counter"

  const appTitleRef = ref(null)
  onMounted(() => {
     console.log(`The app title is ${appTitleRef.value} `)

  })

  const { counterData, oddOrEven, increaseCounter, decreaseCounter } = useCounter()
 


</script>






<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn, .counter{
  margin: 20px;
  font-size: 40px;
}
.edit{
  margin-top: 40px;

}
</style>
