<script lang="ts" setup>
import { ref } from 'vue'
import vClickOutside from '@/utils/directives/click-outside'

import type { IDropdownOption } from '@/types/common'

const model = defineModel({ type: Number, default: 0 })
const props = defineProps<{
  optionList: IDropdownOption[],
  label?: string,
  dark?: boolean,
}>()
const emit = defineEmits(['on-change'])

const isOpened = ref<boolean>(false)
const toggleDropdown = () => {
  isOpened.value = !isOpened.value
}
const closeDropdown = () => {
  isOpened.value = false
}


const selectedOption = ref()
const selectOption = (option: IDropdownOption) => {
  selectedOption.value = option
  model.value = option.value
  emit('on-change', option.value)
  closeDropdown()
}
const isSelectedOption = (optionValue: IDropdownOption['value']) => {
  return optionValue === selectedOption.value?.value
}

const labelStyles = computed(() => {
  return props.dark ? 'tw-bg-blue-200 tw-text-white tw-rounded-[30px]' : 'tw-bg-white tw-text-grey-500'
})

const selectedOptionStyles = computed(() => {
  return props.dark ? 'tw-bg-blue-200 tw-border-0 tw-text-white' : 'tw-border-grey-100 tw-bg-white'
})

const isOpenedselectedOptionStyles = computed(() => {
  if (!isOpened.value) {
    return ''
  }
  return props.dark ? '!tw-border-blue-500 tw-rounded-b-none' : '!tw-border-green-100 tw-rounded-b-none'
})

const selectedOptionPlaceholderStyles = computed(() => {
  if (selectedOption.value?.label) {
    return ''
  }
  return props.dark ? 'tw-text-white' : 'tw-text-grey-400'
})

const optionListStyles = computed(() => {
  return props.dark ? 'tw-border-grey-930 tw-bg-blue-200' : 'tw-border-grey-100 tw-bg-white'
})

const optionListItemStyles = computed(() => {
  return props.dark ? 'tw-border-t-grey-930' : 'tw-border-t-grey-100'
})

const optionListItemButtonStyles = computed(() => {
  return props.dark ? 'hover:tw-bg-blue-600 tw-text-white hover:tw-text-white' : 'hover:tw-bg-green-100 tw-text-grey-400 hover:tw-text-white'
})

const isSelectedOptionListItemButtonStyles = (optionValue: IDropdownOption['value']) => {
  if (!isSelectedOption(optionValue)) {
    return ''
  }
  return props.dark ? 'tw-bg-blue-600' : 'tw-bg-green-100 tw-text-white'
}

</script>

<template>
  <div @click="toggleDropdown" v-click-outside="closeDropdown" class="tw-relative">
    <label v-if="label" :class="labelStyles"
      class="tw-absolute tw-left-12 tw-bottom-full tw-translate-y-[50%] tw-px-5 tw-font-nova tw-font-bold tw-text-12">
      {{ label }}
    </label>
    <div :class="[selectedOptionStyles, isOpenedselectedOptionStyles, selectedOptionPlaceholderStyles]"
      class="tw-py-14 tw-pr-12 tw-pl-16 tw-flex tw-justify-between tw-items-center tw-gap-12 tw-text-12 tw-border tw-rounded-lg">
      {{ selectedOption?.label || 'Select' }}
      <nuxt-icon name="caret-down" class="tw-text-18" />
    </div>
    <ul v-if="isOpened" :class="optionListStyles"
      class="tw-border tw-border-t-0 tw-absolute tw-rounded-b-lg tw-z-10 tw-overflow-hidden tw-w-full">
      <li v-for="option in optionList" :key="option.value" class="tw-border-t" :class="optionListItemStyles">
        <button @click.stop="selectOption(option)" type="button"
          :class="[optionListItemButtonStyles, isSelectedOptionListItemButtonStyles(option.value)]"
          class="tw-pl-16 tw-py-8 tw-pr-8 tw-text-12 tw-w-full tw-text-left tw-flex tw-justify-between tw-items-center tw-gap-12">
          {{ option.label }}
          <nuxt-icon v-if="isSelectedOption(option.value)" name="check" class="tw-text-20" />
        </button>
      </li>
    </ul>
  </div>

</template>