<script setup>
    import ClientService from '../services/ClientService'
    import RouterLink from '../components/UI/RouterLink.vue'
    import Heading from '@/components/UI/Heading.vue'
    import { FormKit } from '@formkit/vue'
    import { useRouter } from 'vue-router'

    defineProps({
        title: {
            type: String
        }
    })

    const router = useRouter()

    const handleSubmit = (data) => {
        data.state = 1
        ClientService.addClients(data)
            .then(response => {
                router.push({name: 'home'})
            })
            .catch(error => console.log(error))
    }
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="home">
                Volver
            </RouterLink>
        </div>
        <Heading>{{ title  }}</Heading>
        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit
                    type="form"
                    submit-label="Agregar Cliente"
                    incomplete-message="Error campos obligatorios incompletos"
                    @submit="handleSubmit"
                >
                    <FormKit 
                        type="text"
                        label="Nombre"  
                        name="name" 
                        placeholder="Nombre del cliente*" 
                        validation="required"
                        :validation-messages="{ required: 'El Nombre del cliente es obligatorio' }"
                    />
                    <FormKit 
                        type="text"
                        label="Apellido" 
                        name="lastName"  
                        placeholder="Apellido del cliente*" 
                        validation="required"
                        :validation-messages="{ required: 'El Apellido del cliente es obligatorio' }"
                    />
                    <FormKit 
                        type="email"
                        label="Email"  
                        name="email" 
                        placeholder="Email del cliente*" 
                        validation="required | email"
                        :validation-messages="{ 
                            required: 'El Email del cliente es obligatorio', 
                            email: 'El correo ingresado no es válido' 
                        }"
                    />
                    <FormKit 
                        type="text"
                        label="Teléfono"
                        name="phone"   
                        placeholder="Teléfono: XXX-XXX-XXXX" 
                        validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                        :validation-messages="{ matches: 'El formato no es válido'}"
                    />
                    <FormKit 
                        type="text"
                        label="Empresa"  
                        name="company" 
                        placeholder="Empresa del cliente" 
                    />
                    <FormKit 
                        type="text"
                        label="Puesto" 
                        name="position"  
                        placeholder="Puesto del cliente" 
                    />
                    <p class="flex justify-end">* Los campos son obligatorios</p>    
                </FormKit>
            </div>
        </div>
    </div>
</template>

<style>
    .formkit-wrapper {
        max-width: 100%;
    }
</style>