<script setup>
    import { RouterLink } from 'vue-router'

    defineProps({
        to: {
            type: String
        }
    })
</script>

<template>
    <div>
        <RouterLink 
            :to="{ name: to}"
            class="block md:inline-block rounded bg-blue-600 py-2 px-3 uppercase font-bold text-white text-sm shadow hover:bg-blue-500"
        >
            <slot></slot>
        </RouterLink>
    </div>
</template>
