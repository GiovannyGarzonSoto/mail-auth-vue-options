<template>
  <Message />
</template>

<script>
import authApi from '../../../api/authApi'
import Message from '../../ui/components/Message.vue'
import { mapMutations } from 'vuex'

export default {
    name: 'ActivateMailView',
    components: {
        Message
    },
    methods: {
        ...mapMutations('ui', ['setMessage']),

        async activateMail() {
            try{
                const data = await authApi.put('/auth/email-activate', {token: this.$router.currentRoute.value.params.token})
                if(!data.data.success){
                    this.setMessage({type: 'alert', message: data.data.message})
                    this.$router.push({name: 'SigninView'})
                    return
                }
                this.setMessage({type: 'success', message: data.data.message})
                this.$router.push({name: 'SigninView'})
            }catch(err){
                console.log(err)
                this.$router.push({name: 'SigninView'})
            }
        }
    },
    created() {
        this.activateMail()
    }
}
</script>