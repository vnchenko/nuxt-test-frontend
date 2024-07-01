<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import CButton from '@/components/ui/c-button.vue'
const PaymentModal = defineAsyncComponent(() => import('@/components/modals/payment-modal.vue'))

const isShownPaymentModal = ref<boolean>(false)
const openPaymentModal = () => {
  timer.value && clearTimeout(timer.value)
  isShownPaymentModal.value = true
}

const timer = ref<number | null>(null)
onMounted(() => {
  timer.value && clearTimeout(timer.value)
  timer.value = window.setTimeout(openPaymentModal, 3 * 60 * 1000)
})
</script>

<template>
  <div class="first-template tw-bg-opacity-50 tw-bg-center tw-bg-cover tw-flex tw-flex-col tw-items-center">
    <div class="md:tw-max-w-[1170px] tw-w-full">
      <header class="tw-py-8 tw-px-20 tw-w-full">
        <img src="@/assets/img/logo.svg" alt="logotype">
      </header>
      <div
        class="tw-px-20 tw-flex tw-flex-wrap tw-justify-center tw-gap-32 md:tw-gap-y-40 md:tw-gap-24 tw-w-full tw-mx-auto tw-mt-[50px] tw-mb-40 md:tw-mt-[65px]">
        <div class="tw-max-w-[475px] tw-w-full">
          <h1 class="tw-font-nova tw-font-extrabold tw-text-48 tw-leading-[58px]">Start your learning journey
            now
          </h1>
          <p class="tw-font-nova tw-text-24 tw-mt-16 md:tw-mt-24">
            Get a <strong><span class="tw-text-orange-100">Planet</span>Learn</strong> plan to rock
            self-learning
          </p>
          <c-button @click.stop="openPaymentModal" class="md:tw-max-w-[275px] tw-font-nova tw-w-full tw-mt-32">
            Get my plan
          </c-button>
        </div>
        <div
          class="tw-max-w-[475px] md:tw-shadow-100 tw-relative tw-w-full md:tw-border tw-border-grey-300 md:tw-min-h-[515px] md:tw-pt-[135px] tw-flex tw-flex-col tw-gap-24 md:tw-bg-white md:tw-rounded-3xl md:tw-px-24">
          <img src="@/assets/img/asteroid.svg" alt="asteroid"
            class="tw-hidden md:tw-block md:tw-absolute tw-bottom-full tw-translate-y-[25px] tw-right-20">
          <ul class="tw-flex tw-flex-col tw-gap-16">
            <li class="tw-flex tw-items-center tw-gap-10">
              <nuxt-icon name="star" class="tw-text-24 tw-text-orange-100" />
              <p class="tw-font-nova">
                Exclusive access to <strong class="tw-text-orange-100">350+</strong> learning programs
              </p>
            </li>
            <li class="tw-flex tw-items-center tw-gap-10">
              <nuxt-icon name="star" class="tw-text-24 tw-text-orange-100" />
              <p class="tw-font-nova">
                Personalized course plan
              </p>
            </li>
            <li class="tw-flex tw-items-center tw-gap-10">
              <nuxt-icon name="star" class="tw-text-24 tw-text-orange-100" />
              <p class="tw-font-nova">
                Comfy learning schedule made by you
              </p>
            </li>
            <li class="tw-flex tw-items-center tw-gap-10">
              <nuxt-icon name="star" class="tw-text-24 tw-text-orange-100" />
              <p class="tw-font-nova">
                <strong class="tw-text-orange-100">24/7</strong> tutor support in a secure chat
              </p>
            </li>
            <li class="tw-flex tw-items-center tw-gap-10">
              <nuxt-icon name="star" class="tw-text-24 tw-text-orange-100" />
              <p class="tw-font-nova">
                Lifetime access to materials
              </p>
            </li>
          </ul>
          <c-button invert class="tw-w-full">
            <span class="tw-flex tw-gap-8 tw-items-center tw-font-nova tw-font-semibold">
              <nuxt-icon name="lock" class="tw-text-24 tw-text-green-200" />
              Safe & secure payment
            </span>
          </c-button>
        </div>
      </div>
    </div>
    <payment-modal v-model="isShownPaymentModal" />
  </div>
</template>

<style lang="scss" scoped>
.first-template {
  background-image: linear-gradient(rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.96)), url('@/assets/img/bg-planets.jpg');
}
</style>