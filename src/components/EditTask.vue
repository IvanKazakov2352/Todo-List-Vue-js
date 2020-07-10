<template>
  <div class="margin">
    <div v-if="task" class="col s6 offset-s3">
      <h1 class="h1-notes">{{ task.title }}</h1>
      <form @submit.prevent="UpdateTask">
        <input
          class="input-div"
          v-model="title"
          type="text"
          placeholder="Введите новое имя задачи"
        />
        <button class="btn btn" type="submit">Update</button>
        <div v-if="task.status !== 'completed'">
          <button class="btn btn" type="button" @click="completeTask">
            Complete task
          </button>
        </div>
      </form>
    </div>
    <p v-else>Task not found</p>
  </div>
</template>
<script>
export default {
  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id);
    },
  },
  data() {
    return {
      title: "",
    };
  },
  mounted() {
    this.title = this.task.title;
  },
  methods: {
    UpdateTask(title) {
      this.$store.dispatch("updateTask", {
        id: this.task.id,
        title: this.title,
      });
      this.$router.push("/ListTask");
    },
    completeTask() {
      this.$store.dispatch("completeTask", this.task.id);
      this.$router.push("/ListTask");
    },
  },
};
</script>
