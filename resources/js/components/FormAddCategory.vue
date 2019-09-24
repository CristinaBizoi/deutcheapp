<template>
    <div>
        <form action="" @submit.prevent = "onSubmit()">
            <input type="text" name="name" id="name" v-model="form.name" placeholder="name">
            <input type="text" name="description" id="description" v-model="form.description" placeholder="description">
            <button >Submit Category</button>
        </form>
    </div>

</template>
<script>
    export default {
        data(){
            return {
                form: new Form ({name:'', description:''})
            }
        },
        methods: {
            onSubmit(){
                this.form.post('/api/categories').then(category=> this.$emit('completed', category));
            }
        }
    }
</script>
