<script lang="ts" setup>
const props = defineProps<{
  label?: string,
  dark?: boolean,
  errorMessage?: string,
  isCardNumber?: boolean
}>()
const model = defineModel({ type: String, default: '' })

const labelStyles = computed(() => {
  return props.dark ? 'tw-bg-blue-200 tw-text-white tw-rounded-[30px]' : 'tw-bg-white tw-text-grey-500'
})

const inputStyles = computed(() => {
  return props.dark ? 'tw-bg-blue-200 tw-border-0 tw-text-white' : 'tw-border-grey-100'
})

</script>

<template>
  <label class="tw-relative">
    <span v-if="label" :class="labelStyles"
      class="tw-absolute tw-left-12 tw-bottom-full tw-translate-y-[50%] tw-px-5 tw-font-nova tw-font-bold tw-text-12">
      {{ label }}
    </span>
    <span v-if="errorMessage"
      class="tw-font-nova tw-font-bold tw-text-red-100 tw-text-11 tw-absolute tw-right-[50px] tw-top-1/2 -tw-translate-y-[50%]">
      {{ errorMessage }}
    </span>
    <img v-if="isCardNumber" src="@/assets/img/mc.svg"
      class="tw-absolute tw-right-12 tw-top-1/2 -tw-translate-y-[50%]" />
    <input v-bind="$attrs" v-model="model" :class="[inputStyles, { 'tw-border-red-100': errorMessage }]"
      class="tw-py-14 tw-px-16 tw-w-full tw-text-12 tw-font-nova tw-border  tw-rounded-lg tw-outline-none" />
  </label>
</template>