<template>
  <center class="mdf">
    <div>
      <table v-if="tasks.length" class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Status</th>
            <th>Open</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, idx) of Tasks" :key="task.id">
            <td>{{ idx + 1 }}</td>
            <td>{{ task.title }}</td>
            <td>{{ task.status }}</td>
            <td>
              <router-link
                tag="button"
                class="btn btn"
                :to="'/EditTask/' + task.id"
              >
                Open
              </router-link>
            </td>
            <td>
              <button class="btn btn" type="button" @click="deletetask(task)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <center>
          <div v-if="tasks.length">
            <select ref="select" v-model="filter">
              <option value="">All</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option> </select
            ><br />
            <label>Task filter</label>
          </div>
        </center>
      </div>
    </div>
  </center>
</template>
<script>
export default {
  data() {
    return {
      filter: null,
      task: [],
    };
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
    Tasks() {
      return this.tasks.filter((t) => {
        if (!this.filter) {
          return true;
        }
        return t.status === this.filter;
      });
    },
  },
  methods: {
    saveLocalStorageTodos() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      this.tasks = JSON.parse(localStorage.getItem("tasks"));
    },
    deletetask(task) {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
      this.saveLocalStorageTodos();
    },
  },
};
</script>
<style scoped>
table {
  width: 70%; /*Ширина таблицы*/
  margin-bottom: 18px; /*Отступ снизу от таблицы*/
  padding: 0; /*Отступы внутри таблицы*/
  font-size: 13px; /*Размер шрифта*/
  border: 1px solid #dddddd; /*Граница таблицы*/
  border-spacing: 0; /*Отступы между границами ячеек*/
  border-collapse: separate; /*Границы ячеек не склеиваются*/
  -webkit-border-radius: 5px; /*Радиус скругления углов у таблицы Safari, Chrome*/
  -moz-border-radius: 5px; /*Радиус скругления углов у таблицы Mozilla*/
  border-radius: 5px; /*Радиус скругления углов у таблицы*/
  color: #666666; /*Цвет текста в таблице*/
  font-family: Arial; /*Семейство шрифтов*/
}
table th,
table td {
  padding: 10px 10px 9px; /*Отступы внутри ячеек*/
  line-height: 18px; /*Межстрочный интервал*/
  text-align: left; /*Выравнивание текста по левому краю*/
}
table th {
  padding-top: 9px; /*Отступы внутри ячеек*/
  font-weight: bold; /*Установка жирного начертания шрифта*/
  vertical-align: middle; /*Выравнивание по вертикали. Текст находится по середине*/
  color: black; /*Черный цвет в ячейках заголовков таблицы*/
}
table td {
  vertical-align: top; /*Выравнивание содержимого ячейки по верхнему краю*/
  border-top: 1px solid #ddd; /*Верхняя граница ячейки*/
}
table th + th,
table td + td,
table th + td {
  border-left: 1px solid #ddd; /*Стиль для левой границы между двумя ячейками*/
}
table thead tr:first-child th:first-child, /*Первая строка первая ячейка в заголовке таблицы*/
table tbody tr:first-child td:first-child /*Первая строка первая ячейка в теле таблицы*/ {
  -webkit-border-radius: 5px 0 0 0;
  -moz-border-radius: 5px 0 0 0;
  border-radius: 5px 0 0 0;
}
table thead tr:first-child th:last-child, /*Первая строка последняя ячейка в заголовке таблицы*/
table tbody tr:first-child td:last-child /*Первая строка последняя ячейка в теле таблицы*/ {
  -webkit-border-radius: 0 5px 0 0;
  -moz-border-radius: 0 5px 0 0;
  border-radius: 0 5px 0 0;
}
table tbody tr:last-child td:first-child  /*Последняя строка первая ячейка в теле таблицы*/ {
  -webkit-border-radius: 0 0 0 5px;
  -moz-border-radius: 0 0 0 5px;
  border-radius: 0 0 0 5px;
}
table tbody tr:last-child td:last-child  /*Последняя строка последняя ячейка в теле таблицы*/ {
  -webkit-border-radius: 0 0 5px 0;
  -moz-border-radius: 0 0 5px 0;
  border-radius: 0 0 5px 0;
}
table tr:hover {
  background-color: #f2f2f2; /*Цвет строки при наведении курсора мыши*/
}
.table-list {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  flex-direction: row;
}
.mdf {
  margin-top: 100px;
}
</style>
