import type { DirectiveBinding } from 'vue'

interface ExtendedClickOutsideHTMLElement extends HTMLElement {
  clickOutsideEvent(event: Event): void
}

const vClickOutside = {
  mounted(el: ExtendedClickOutsideHTMLElement, binding: DirectiveBinding) {
    const clickOutsideEventHandler = (event: Event) => {
      if (!el.contains(event.target as HTMLElement) && el !== event.target) {
        event.stopPropagation()
        event.preventDefault()
        binding.value(event)
      }
    }
    el.clickOutsideEvent = clickOutsideEventHandler
    document.addEventListener('click', clickOutsideEventHandler)
    document.addEventListener('touchend', clickOutsideEventHandler)
  },
  unmounted(el: ExtendedClickOutsideHTMLElement) {
    document.removeEventListener('click', el.clickOutsideEvent)
    document.removeEventListener('touchend', el.clickOutsideEvent)
  },
}

export default vClickOutside
