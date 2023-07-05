<script>
import Modal from "./UI/Modal.vue";

export default {
  components: {
    Modal
  }
};
</script>

<template>
  <Modal></Modal>
  <header>
    <div>
      <router-link to="/users" class="nav-button">Пользователи</router-link>
    </div>
    <div>
      <router-link to="/payments" class="nav-button">Платежи</router-link>
    </div>
  </header>
  <router-view></router-view>
</template>

<style></style>
