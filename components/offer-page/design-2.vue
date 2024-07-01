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
  <div
    class="tw-bg-[url('@/assets/img/bg-planets-blue.jpg')] tw-bg-opacity-50 tw-bg-center tw-bg-cover tw-flex tw-flex-col tw-items-center">
    <div class="md:tw-max-w-[1170px] tw-w-full tw-overflow-hidden tw-px-16">
      <header class="tw-py-8 tw-px-4 md:tw-px-20 tw-w-full">
        <img src="@/assets/img/logo_dark.svg" alt="logotype">
      </header>
      <div
        class="tw-bg-grey-60 tw-p-16 tw-rounded-3xl md:tw-bg-transparent tw-flex tw-flex-wrap tw-justify-center tw-gap-32 md:tw-gap-y-[46px] md:tw-gap-24 tw-w-full md:tw-mx-auto tw-mt-[50px] tw-mb-40 md:tw-mt-[65px]">
        <div class="md:tw-max-w-[475px] tw-w-full">
          <h1
            class="tw-font-extrabold tw-font-nova md:tw-font-intro md:tw-uppercase tw-text-white tw-text-40 tw-leading-[48px]">
            <span class="tw-text-blue-400">Start</span> your learning journey
            <span class="tw-text-blue-400">now</span>
          </h1>
          <p class="tw-text-24 tw-mt-16 md:tw-mt-24 tw-text-white">
            Get a <strong><span class="tw-text-blue-400">Smart</span>Study</strong> plan to rock
            self-learning
          </p>
          <c-button @click.stop="openPaymentModal" dark class="md:tw-max-w-[275px]  tw-w-full tw-mt-32">
            Get my plan
          </c-button>
        </div>

        <div class="tw-relative md:tw-max-w-[475px] tw-w-full">
          <img src="@/assets/img/ball.svg" alt="ball"
            class="tw-hidden md:tw-block md:tw-absolute tw-left-0 tw-top-0 -tw-translate-y-1/2 -tw-translate-x-1/2 -tw-z-1">
          <div
            class="md:tw-max-w-[475px] md:tw-shadow-100  tw-w-full md:tw-border-4 tw-border-grey-940 md:tw-min-h-[515px] tw-z-[2] md:tw-pt-[135px] tw-flex tw-flex-col tw-gap-24 md:tw-bg-grey-40 md:tw-rounded-3xl md:tw-backdrop-blur-sm md:tw-px-24">
            <img src="@/assets/img/rocket.svg" alt="rocket"
              class="tw-hidden md:tw-block md:tw-absolute tw-bottom-full tw-w-[250px] tw-left-full tw-top-[80px] -tw-translate-x-1/2">
            <ul class="tw-flex tw-flex-col tw-gap-16">
              <li class="tw-flex tw-items-center tw-gap-10 tw-text-blue-300">
                <nuxt-icon name="star" class="tw-text-24 tw-text-blue-300" />
                <p>
                  Exclusive access to <strong>350+</strong> learning programs
                </p>
              </li>
              <li class="tw-flex tw-items-center tw-gap-10 tw-text-white">
                <nuxt-icon name="star" class="tw-text-24 tw-text-blue-300" />
                <p>
                  Personalized course plan
                </p>
              </li>
              <li class="tw-flex tw-items-center tw-gap-10 tw-text-white">
                <nuxt-icon name="star" class="tw-text-24 tw-text-blue-300" />
                <p>
                  Comfy learning schedule made by you
                </p>
              </li>
              <li class="tw-flex tw-items-center tw-gap-10 tw-text-blue-300">
                <nuxt-icon name="star" class="tw-text-24 tw-text-blue-300" />
                <p>
                  <strong>24/7</strong> tutor support in a secure chat
                </p>
              </li>
              <li class="tw-flex tw-items-center tw-gap-10 tw-text-white">
                <nuxt-icon name="star" class="tw-text-24 tw-text-blue-300" />
                <p>
                  Lifetime access to materials
                </p>
              </li>
            </ul>
            <c-button invert dark class="tw-w-full">
              <span class="tw-flex tw-gap-8 tw-items-center tw-font-semibold">
                <nuxt-icon name="lock" class="tw-text-24 tw-text-blue-300" />
                Safe & secure payment
              </span>
            </c-button>
          </div>
        </div>
      </div>
    </div>
    <payment-modal v-model="isShownPaymentModal" dark />
  </div>
</template>