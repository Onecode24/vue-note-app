<template>
    <div>
        <input type="text" :placeholder="placeholder" class="rounded-lg h-[40px] text-white bg-signup pl-5 my-3 border"
        :value="modelValue" @input="$emit('update:modelValue',$event.target.value)"
        >
    </div>
</template>

<script>
    export default {
        props: {
            placeholder: {
                type: String,
                default: '',
            },
            modelValue: String
        },
    }
</script>

<style scoped>
.bg-field{
    background-color: #bec8d3;
}

</style>