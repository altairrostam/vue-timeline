<script setup lang="ts">
import TimelineStep from '@/components/TimelineStep.vue'
import { useStepStore } from '@/stores/step'

const steps = useStepStore()
</script>
<template>
  <div>
    <h1>Timeline</h1>
    <button @click="steps.increment">Test</button>
    <li v-for="index in steps.step" :key="index">
      <TimelineStep :index="index" />
    </li>
  </div>
</template>
