<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <label>
      <input v-model="data.email" type="email" class="form-control" placeholder="Email" required>
    </label>

    <label>
      <input v-model="data.password" type="password" class="form-control" placeholder="Password" required>
    </label>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
</template>

