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
            <InputField placeholder="Re-enter Password" v-if="!login" v-model="user.password2"/>
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
            
        },
        beforeMount(){
            this.getUrl();
        }
    }   
</script>

<style lang="scss" scoped>

</style>