<template>
    <div class="margin">
        <form @submit.prevent="AddTask">
            <div>
                <input v-model="title" type="text" name="firstname" placeholder="New task"><br>
                <div class="btn-margin">
                    <button class="btn btn" type="submit">Create</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'create',
    data: () => ({
        title: '',
    }),
    methods: {
        AddTask() {
            const task = {
                title: this.title,
                status: 'active',
                id: Date.now(),
            }
            this.$store.dispatch('createTask', task)
            this.$router.push('/ListTask')
        }
    },
}
</script>
<style>
.margin {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}
.btn {
    margin: 0 20px;
    padding: 15px 34px;
    overflow: hidden;
    font-family: 'Montserrat Alternates', sans-serif;
    color: white;
    letter-spacing: 1px;    
    text-transform: uppercase;
    font-weight: 600;
    border-width: 0;    
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    outline: none;
    cursor: pointer; 
}
.btn {
    background: linear-gradient(90deg, #a3ffb0, #2bd9e8);
    margin: 20px;
}
.btn:before, 
.btn:after {    
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    left: -110%;
    top: 0;
    opacity: 0.1;
    background: black;    
    transform: skewX(25deg);    
    transition: .5s ease;
}
.btn:hover:before {
    left: -10%;
    transition: .3s ease;
}
.btn:hover:after {
    left: -20%;
}
.btn-margin {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}  
* {
    box-sizing: border-box;
}
input[type=text], select, textarea {
    width: 450px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}
label {
    padding: 12px 12px 12px 0;
    display: inline-block;
}
input[type=submit]:hover {
    background-color: #45a049;
}
.col-25 {
    float: center;
    width: 25%;
    margin-top: 20px;
}
.col-75 {
    float: left;
    width: 75%;
    margin-top: 6px;
}
.row:after {
    content: "";
    display: table;
    clear: both;
}
@media screen and (max-width: 600px) {
    .col-25, .col-75, input[type=submit] {
        width: 100%;
        margin-top: 0;
    }
}
</style>