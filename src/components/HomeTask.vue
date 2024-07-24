<template>
  <div class="container">
    <h2 class="titleApp">Ma To-do List</h2>
    <div class="input-group mt-4">
      <input
        v-model="task"
        type="text"
        class="form-control"
        placeholder="Nouvelle tâche"
      />
      <button class="btn btn-primary w-80" @click="submitTask">
        <font-awesome-icon icon="plus" class="icon" /> Ajouter
      </button>
    </div>
    <div class="task-list mt-4">
      <table class="table table-modern">
        <thead>
          <tr>
            <th scope="col">Tâches</th>
            <th scope="col">Status</th>
            <th scope="col" class="text-center">Modifier</th>
            <th scope="col" class="text-center">Supprimer</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index">
            <td>
              <span :class="{ finished: task.status === 'terminée' }">
                {{ task.name }}
              </span>
            </td>
            <td>
              <span
                @click="changeStatus(index)"
                class="pointer"
                :class="{
                  'text-danger': task.status === 'à faire',
                  'text-warning': task.status === 'en cours',
                  'text-success': task.status === 'terminée',
                }"
              >
                {{ firstCharUpper(task.status) }}
              </span>
            </td>
            -->
            <td>
              <div
                class="text-center pointer edit-icon"
                @click="editTask(index)"
              >
                <font-awesome-icon icon="pen" class="icon" />
              </div>
            </td>
            <td>
              <div
                class="text-center pointer delete-icon"
                @click="deleteTask(index)"
              >
                <font-awesome-icon icon="trash" class="icon" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoApp",
  data() {
    return {
      task: "",
      editedTask: null,
      avaibleStatuses: ["à faire", "en cours", "terminée"],
      tasks: [
        {
          name: "SécuQuizz application mobile et web.",
          status: "à faire",
        },
        {
          name: "Site graphiste.",
          status: "en cours",
        },
      ],
    };
  },
  methods: {
    submitTask() {
      if (this.task.trim().length === 0) return;

      if (this.editedTask === null) {
        this.tasks.push({
          name: this.task.trim(),
          status: "à faire",
        });
      } else {
        this.tasks[this.editedTask].name = this.task.trim();
        this.editedTask = null;
      }
      this.task = "";
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
    changeStatus(index) {
      let newIndex = this.avaibleStatuses.indexOf(this.tasks[index].status);
      if (++newIndex >= this.avaibleStatuses.length) newIndex = 0;
      this.tasks[index].status = this.avaibleStatuses[newIndex];
    },
    firstCharUpper(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
}

.titleApp {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  gap: 10px;
}

.form-control {
  border-radius: 8px;
  border: 1px solid #ced4da;
  transition: border-color 0.3s;
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.25);
}

button {
  border-radius: 8px;
  font-weight: bold;
}

.btn-primary {
  background-color: #007bff;
  border: none;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.btn-primary:hover {
  background-color: #0056b3;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.icon {
  margin-right: 5px;
}

.pointer {
  cursor: pointer;
  transition: color 0.3s;
}

.pointer:hover {
  color: #007bff;
}

.finished {
  text-decoration: line-through;
  color: #6c757d;
}

.task-list .table-modern {
  margin-top: 20px;
  border-collapse: separate;
  border-spacing: 0;
}

.table-modern thead th {
  background-color: #343a40;
  color: #fff;
  font-weight: bold;
  border-bottom: 2px solid #007bff;
}

.table-modern tbody tr {
  border-bottom: 1px solid #dee2e6;
}

.table-modern tbody td {
  vertical-align: middle;
  padding: 10px;
}

.table-modern tbody tr:hover {
  background-color: #f1f1f1;
}

.edit-icon:hover {
  color: #28a745;
}

.delete-icon:hover {
  color: #dc3545;
}
</style>
