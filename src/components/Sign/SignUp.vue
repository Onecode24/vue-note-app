<template>
    <div class="text-center py-12 md:flex ">
        <div class="logo flex justify-center md:ml-[50px]">
            <img src="../../assets/images/sticky-note.jpg" alt="logo" class="w-1/3 md:w-1/2 md:rounded-[60px] rounded-[40px] mb-7" >
        </div>
       <div class="text-center md:ml-[100px]">
            <div class="text-3xl font-medium text-left px-[18%] text-white">
                <h1 v-if="!login" class=""> Sign Up</h1>
                <h1 v-else class=""> Sign In</h1>
            </div>
            <InputField placeholder="username" v-model.trim="user.username" />
            <InputField placeholder="Password" v-model.trim="user.password"/>
            <InputField placeholder="e-mail" v-if="!login" v-model="user.password2"/>
            <div class="flex justify-center mt-3 mb-2">
                <ButtonField class=" text-center text-xl w-[275px]" @click="checkInput">
                    <span v-if="!login">Sign Up</span>
                    <span v-else>Sign In</span>
                </ButtonField>
            </div>
        <div class="text-white " v-if="login">
            <span @click="getUrl">Don't have an account ? <a href="/signup" class="font-bold" >Sign Up</a></span>
        </div>
        <div class="text-white " v-if="!login">
            <span @click="getUrl">Have an account ? <a href="/login" class="font-bold" >Sign In</a></span>
        </div>
       </div>
    </div>
</template>

<script>
import InputField from '../Global/InputField.vue';
import ButtonField from '../Global/ButtonField.vue';
import {instanceAxios} from '../../utils/instanceAxios'

    export default {
        name: 'SignUp',
        data() {
            return {
                login: !false,
                path: '',
                user: {
                    username: '',
                    password: '',
                    password2: ''
                }
            };
        },
        components: { InputField, ButtonField },
        methods : {
            getUrl(){
            const url = window.location.href;
            const splitUrl =  url.split('/');
            const path = splitUrl[splitUrl.length-1]

            path=='signup' ? this.login = false : this.login = true;
            this.path=path;

            },
            checkInput(){
                if(this.user.username == ''){
                    console.log("username is empty");
                }else if(this.user.password== ''){
                    console.log("password is empty");
                }else if(this.path=='signup' && this.user.password2==''){
                    console.log("password2 is empty");
                }else{
                    console.log('send request');
                    this.userRequest()
                }
                
            },
            async  userRequest(){
                if(this.path=='signup'){
                    try {
                        let response = await instanceAxios({
                            method: 'POST',
                            url: 'http://localhost:3000/api/users/new-user',
                            data: {
                                username: this.user.username,
                                password: this.user.password,
                                email: this.user.password2,
                            },
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Accept' : 'application/json, text/plain, */*',
                                'Access-Control-Allow-Methods' : 'GET, PUT, POST, DELETE, OPTIONS',
                                'Access-Control-Allow-Credentials' : true
                            },
                            responseType: 'json',
                        })
                         if(response.data.user){
                            this.$storage.setStorageSync('user',response.data.user)
                            window.location.href='admin'
                         }
                         console.log(response.data.user);

                    } catch (error) {
                        console.log("[CATCH ERROR]:: ",error);
                    }
                    
                }else{
                    try {
                        let response = await instanceAxios({
                            method: 'POST',
                            url: 'http://localhost:3000/api/users/login',
                            data: {
                                username: this.user.username,
                                password: this.user.password,
                                // email: this.user.password2,
                            },
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Accept' : 'application/json, text/plain, */*',
                                'Access-Control-Allow-Methods' : 'GET, PUT, POST, DELETE, OPTIONS',
                                'Access-Control-Allow-Credentials' : true
                            },
                            responseType: 'json',
                        })
                                 
                        console.log(response.data.user);
                        if(response.data.user){
                            this.$storage.setStorageSync('user',response.data)
                            window.location.href='admin'
                        }
                           

                    } catch (error) {
                        console.log("[CATCH ERROR]:: ",error);
                    }
                }
            }
            
        },
        beforeMount(){
            this.getUrl();
        }
    }   
</script>

<style lang="scss" scoped>

</style>