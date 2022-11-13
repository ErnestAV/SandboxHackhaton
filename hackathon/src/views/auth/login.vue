<template>
    <div>
        <div class="w-screen flex md:justify-center">
            <form class="bg-white w-full mt-20 md:w-1/3 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="flex justify-center">
                    <img height="auto" width="240" src="../../../public/images/Logo-2-cropped.svg" alt="" srcset="" class="py-2">
                </div>
                <div v-if="error.status" class="mb-6 flex flex-row justify-between bg-red-200 rounded">
                    <div class="font-bold text-red-900 py-2 px-2">
                        {{error.message}}
                    </div>
                    <div @click="error.status = false" class="text-red-900 py-2 px-2">
                        Close
                    </div>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input v-model="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                </div>
                
                <div class="flex items-center justify-between">
                    <button @click="signIn" class="bg-blue-600 hover:bg-blue-700 rounded-full w-full  text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="button">
                        Log In
                    </button>
                </div>
                <p class="mt-6 text-center break-words rounded-full italic text-xs">
                    Don't have an account?
                    <router-link class=" ml-1 py-1 text-white px-4 bg-blue-600 hover:bg-blue-700 rounded-full not-italic" to="/signup">Sign Up</router-link>
                </p>
            </form>
        </div>
    </div>
</template>
<script>
import { login } from '../../services/api'
export default {
    name:'login',
    data() {
        return {
            username:null,
            password:null,
            error:{
                active:false,
                message:null
            }
        }
    },
    methods: {
        async signIn(){
            try {
                const data = await login(this.username, this.password)
                if(data.status){
                    localStorage.setItem('user', JSON.stringify(data.user))
                    localStorage.setItem('token', data.token)
                    this.$router.push('/')
                }else{
                    this.error.status = true
                    this.error.message = "Username or password failed."
                }
            } catch (error) {
                this.error.status = true
                this.error.message = "Username or password failed."
            }
        }
    },
}
</script>