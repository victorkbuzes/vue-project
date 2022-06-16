import { reactive , computed , watch, onMounted,  nextTick} from 'vue';

const counterData = reactive({
    count: 0,
    title : 'My Counter'

  })
export function useCounter(){


      watch(() =>  counterData.count, (newCount) => {
        if (newCount == 20) {
          alert("We are there")
          
        }
        console.log("newCount",  newCount)
        })
    
      const oddOrEven =  computed (() => {
        if (counterData.count %2 == 0) return 'even'
        return 'odd'
    
    
    
    
        })
        const increaseCounter = async (amount, e) => {
           
            counterData.count += amount
            await nextTick()
            console.log("Counter has updated");
    
          
          }
        const decreaseCounter = amount => {
            counterData.count -= amount
          }

        
          onMounted(() => {
            console.log("Counter reached");
   
         })


         return{
             counterData,
             oddOrEven,
             increaseCounter,
             decreaseCounter
         }
}