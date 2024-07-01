<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  invert?: boolean,
  dark?: boolean,
}>()

const buttonStyles = computed(() => {
  if (!props.invert && !props.dark) {
    return 'tw-bg-black active:tw-bg-green-100 disabled:tw-bg-grey-200 tw-text-white'
  }
  if (props.invert && !props.dark) {
    return 'tw-bg-white tw-text-green-200 tw-border tw-border-grey-20'
  }
  if (!props.invert && props.dark) {
    return 'tw-bg-white tw-text-blue-100 active:tw-bg-blue-100 active:tw-text-white disabled:tw-bg-blue-100 disabled:tw-text-white disabled:tw-opacity-40'
  }
  return 'tw-bg-grey-20 tw-text-blue-300'
})

</script>

<template>
  <button class="tw-rounded-xl tw-py-16 tw-font-bold tw-text-16 tw-flex tw-justify-center" :class="buttonStyles"
    type="button">
    <slot />
  </button>
</template>