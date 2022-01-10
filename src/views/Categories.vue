<template>
  <div class="about">
    <h1>Liste des catégories</h1>
    <router-link to="/nouvelle-categorie">Nouvelle catégorie</router-link>
    <ul>
      <li v-for="categorie in categories" :key="categorie.id">
        <router-link :to="{name:'categorie_messages', params: {id: categorie.id}}">
          {{ categorie.Nom }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import {getCategories} from '@/api/categorie.js'
export default {
  name: 'Categories',
  data () {
    return {
      categories: null
    }
  },
  async mounted () {
    this.categories = await getCategories().then((response) => {
      return response.data['hydra:member']
    })
  }
}
</script>