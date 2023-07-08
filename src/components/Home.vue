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

<style lang="scss" scoped>
@import "/src/styles/variables.scss";

$header-height: 90px;

header {
  align-self: center;
  display: flex;
  height: $header-height;
  gap: 70px;
  margin-bottom: 5vh;

  .nav-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 326px;
    height: 60px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    color: white;
    font-weight: bold;
    background-color: $grey;
    text-decoration: none;
    text-align: center;
    transition: background-color 0.3s ease-out, color 0.3s ease-out,
      height 0.3s ease-out;
  }

  .nav-button:hover {
    background-color: $light-grey;
    height: $header-height;
  }

  .router-link-exact-active {
    color: $yellow;
  }
}

@media (max-width: 1280px) {
}

@media (max-width: 770px) {
  header {
    gap: 20px;

    .nav-button {
      width: 250px;
    }
  }
}

@media (max-width: 610px) {
  header {
    flex-direction: column;
    gap: 0;
    margin-bottom: 10vh;

    .nav-button {
      width: 100vw;
      border-radius: 0;
    }

    .nav-button:hover {
      height: 60px;
    }
  }
}
</style>
