<script setup>
    import { computed, onMounted, ref} from 'vue'
    import ClientService from '../services/ClientService'
    import RouterLink from '../components/UI/RouterLink.vue'
    import Heading from '@/components/UI/Heading.vue'
    import Client from '@/components/Client.vue'

    defineProps({
        title: {
            type: String
        }
    })

    const clients = ref([])

    onMounted(() => {
        ClientService.getClients()
            .then(({data}) => clients.value = data)
            .catch( error => console.log("Hubo un error"))
    })

    const existClients = computed(() => {
        return clients.value.length > 0
    })
    
    const deleteClient = (id) => {
        ClientService.deleteClient(id)
            .then(() => {
                clients.value = clients.value.filter( client => client.id !== id)
            })
            .catch(error => console.log(error))
    }

    const updateState = ({id, state}) => {
        ClientService.changeState(id, {state: !state})
            .then(() => {
                const index = clients.value.findIndex( client => client.id === id)
                clients.value[index].state = !state
            })
            .catch(error => console.log(error))
    }
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="add-client">
                Agregar Cliente
            </RouterLink>
        </div>
        <Heading>{{title}}</Heading>
        <div v-if="existClients" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                        <tr>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Nombre</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Empresa</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Estado</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <Client 
                                v-for="client in clients"
                                :key="client.id"
                                :client="client"
                                @update-state="updateState"
                                @delete-client="deleteClient"
                            />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <p v-else class="text-center mt-10">No hay clientes</p>
    </div>
</template>