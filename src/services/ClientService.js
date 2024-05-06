import api from "@/api/axios"

export default {
    getClients(){
        return api.get('/clients')
    },

    getClient(id){
        return api.get('/clients/' + id)
    },

    addClients(data){
        return api.post('/clients', data)
    },

    updateClient(id, data){
        return api.patch('/clients/' + id, data)
    },

    changeState(id, state){
        return api.patch('/clients/' + id, state)
    },

    deleteClient(id){
        return api.delete('/clients/' + id)
    }
}