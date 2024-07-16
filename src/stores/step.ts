import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStepStore = defineStore('step', () => {
  const step = ref(0)
  function increment() {
    step.value++
  }

  return { step, increment }
})
