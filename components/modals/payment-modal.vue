<script setup lang="ts">
import vClickOutside from '@/utils/directives/click-outside'
import CButton from '@/components/ui/c-button.vue'
import Dropdown from '@/components/ui/dropdown.vue'
import CInput from '@/components/ui/c-input.vue'
import { validateCardNumber } from '@/utils'

import { vMaska } from "maska/vue"

const model = defineModel({ type: Boolean, default: false })
const cardNumber = ref<string>('')

const props = defineProps<{
  dark?: boolean
}>()

const optionMonthList = [
  { label: 'January', value: 1 },
  { label: 'February', value: 2 },
  { label: 'March', value: 3 },
  { label: 'April', value: 4 },
  { label: 'May', value: 5 },
  { label: 'June', value: 6 },
  { label: 'July', value: 7 },
  { label: 'August', value: 8 },
  { label: 'September', value: 9 },
  { label: 'October', value: 10 },
  { label: 'November', value: 11 },
  { label: 'December', value: 12 }
];

const optionYearList = [
  { label: '2010', value: 2010 },
  { label: '2011', value: 2011 },
  { label: '2012', value: 2012 },
  { label: '2013', value: 2013 },
  { label: '2014', value: 2014 },
  { label: '2015', value: 2015 },
];


const emit = defineEmits(['update:modelValue', 'on-submit'])

const closeModal = () => {
  emit('update:modelValue', false)
}

const cardNumberErrorMessage = ref<string>('')
const isCardNumberValid = ref<boolean>(false)
const onInputValidation = () => {
  const isValid = validateCardNumber(cardNumber.value)
  if (isValid) {
    isCardNumberValid.value = true
    return cardNumberErrorMessage.value = ''
  }
  isCardNumberValid.value = false
  cardNumberErrorMessage.value = 'Invalid number'
}

const modalStyles = computed(() => {
  return props.dark ? 'tw-bg-blue-700' : 'tw-bg-white'
})

const titleStyles = computed(() => {
  return props.dark ? 'tw-text-white' : 'tw-text-black'
})

const selectedMonth = ref<number>(0)
const selectedYear = ref<number>(0)
const CCV = ref<string>('')

const isActiveSubmitButton = computed(() => {
  return isCardNumberValid.value && selectedMonth.value && selectedYear.value && CCV.value.length === 3
})

</script>

<template>
  <div v-if="model">
    <teleport to="body">
      <div
        class="tw-fixed tw-z-50 tw-top-0 tw-bottom-0 tw-left-0 tw-right-0 tw-bg-grey-60 tw-px-12 tw-flex tw-items-center tw-justify-center">
        <div v-click-outside="closeModal" :class="modalStyles"
          class="tw-max-w-[400px] tw-w-full tw-mx-auto tw-flex tw-flex-col tw-p-16 tw-py-24 md:tw-pb-16 tw-shadow-100 tw-rounded-xl tw-justify-center tw-items-center">
          <h2 :class="titleStyles" class="tw-font-nova tw-text-21 tw-mb-24 tw-font-extrabold">
            Payment method
          </h2>
          <c-input @input="onInputValidation" v-model="cardNumber" v-maska="'#### #### #### ####'" is-card-number
            :dark="dark" :error-message="cardNumberErrorMessage" placeholder="••••  ••••  ••••  ••••"
            label="Card number" class="tw-w-full" :class="{ '!tw-border-green-100': isCardNumberValid }" />
          <div class="tw-flex tw-gap-10 tw-w-full tw-mt-30">
            <dropdown v-model="selectedMonth" class="tw-w-full" label="Month" :option-list="optionMonthList"
              :dark="dark" />
            <dropdown v-model="selectedYear" class="tw-w-full" label="Year" :option-list="optionYearList"
              :dark="dark" />
            <c-input v-model="CCV" label="CVV" maxlength="3" class="tw-w-full" type="password" v-maska="'###'"
              placeholder="•••" :dark="dark" />
          </div>
          <c-button :dark="dark" :disabled="!isActiveSubmitButton"
            class="tw-mt-40 tw-mx-auto tw-w-full disabled:tw-opacity-50 tw-max-w-[300px]">
            Submit
          </c-button>
          <button @click="closeModal"
            class="tw-py-10 tw-px-16 tw-mt-12 tw-font-nova tw-font-bold tw-text-16 tw-text-grey-40">
            Close
          </button>
        </div>
      </div>
    </teleport>
  </div>
</template>