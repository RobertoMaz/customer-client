<script setup>
    import { computed } from 'vue'
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        client: {
            type: Object,
        }
    })

    defineEmits(['update-state', 'delete-client'])

    const completeName = computed(() => {
        return props.client.name + " " + props.client.lastName
    })

    const clientState = computed(() => {
        return props.client.state
    })
</script>
    
<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ completeName }}</p>
            <p class="text-gray-500">{{ client.email }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{ client?.company }}</p>
            <p class="text-gray-600">{{ client?.position }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{ client?.phone }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm">
            <button
                class="inline-flex rounded-full px-2 text-xs font-semibold leading-5"
                :class="[clientState ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']"
                @click="$emit('update-state', {id: client._id, state: client.state})"
            >
                {{ clientState ? "Activo" : "Inactivo" }}
            </button>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <RouterLink 
                :to="{name: 'edit-client', params: { id: client._id }}"
                class="text-indigo-600 hover:text-indigo-900 mr-5"
            >Editar</RouterLink>
            <button
                class="text-red-600 hover:text-red-900"
                @click="$emit('delete-client', client._id)"
            >
                Eliminar
            </button>
        </td>
    </tr>
</template>
