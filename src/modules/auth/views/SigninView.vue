<template>
  <section class="container">
    <h2 class="title">Bienvenido a App!</h2>
    <p class="subtitle">Hola!, si eres nuevo por aqui puedes comenzar registrandote para utilizar la aplicacion</p>
    <input type="text" class="input" v-model="email" placeholder="Correo">
    <input type="password" class="input" v-model="password" placeholder="Contraseña">
    <button class="button" @click="doSignin">
        Iniciar Sesion
    </button>
    <p class="bottom-text" @click="$router.push({name: 'SignupView'})">Aun no tienes una cuenta? Registrate</p>
    <p class="bottom-text" @click="$router.push({name: 'ForgotPassView'})">Olvidaste tu contraseña?</p>
    <Message />
  </section>
</template>

<script>
import authApi from '../../../api/authApi'
import Message from '../../ui/components/Message.vue'
import { mapActions ,mapMutations } from 'vuex'

export default {
    name: 'SigninView',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    computed: {
        
    },
    components: {
        Message
    },
    methods: {
        ...mapActions('auth', ['saveUser']),
        ...mapMutations('ui', ['setMessage']),

        async doSignin(){
            if(this.email === '' || this.password === ''){
                this.setMessage({type: 'alert', message: 'Rellene todos los campos'})
                return
            }
            if(!this.email.includes('@')){
                this.setMessage({type: 'alert', message: 'Escribe un correo valido'})
                return
            }
            try {
                const user = {
                    email: this.email,
                    password: this.password
                }
                const data = await authApi.post('/auth/signin', user)
                if(!data.data.success){
                    this.setMessage({type: 'alert', message: data.data.message})
                    return
                }
                console.log('authenticated...')
                
                this.saveUser(user.email)
                this.$router.push({name: 'home'})
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>