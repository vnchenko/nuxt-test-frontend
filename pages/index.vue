<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const Design1 = defineAsyncComponent(() => import('@/components/offer-page/design-1.vue'))
const Design2 = defineAsyncComponent(() => import('@/components/offer-page/design-2.vue'))

import { getRandomBoolean } from '~/utils'

const route = useRoute()
const router = useRouter()

enum EDesignName {
  FIRST = 'first',
  SECOND = 'second'
}

enum EQueryParam {
  VAR1 = 'var1',
  VAR2 = 'var2',
  TEST = 'test',
}

// Ofc, I could use local storage, but I prefer to keep things simple.
// The URL allows sharing the link to another device while keeping the state, LS - no.
const getRandomDesign = () => {
  const design = getRandomBoolean() ? EDesignName.FIRST : EDesignName.SECOND
  const query = { ...route.query, design }
  router.replace({ query })
}

const currentComponent = computed(() => {
  const { design, abtest } = route.query
  if (design) {
    return design === EDesignName.FIRST ? Design1 : Design2
  }
  switch (abtest) {
    case EQueryParam.VAR2:
      return Design2
    case EQueryParam.TEST:
      getRandomDesign()
      break
    case EQueryParam.VAR1:
    default:
      return Design1
  }
})
</script>

<template>
  <component :is="currentComponent" />
</template>