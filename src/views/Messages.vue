<template>
  <div class="about">
    <h1>Liste des messages</h1>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Nom</th>
        <th>Categorie</th>
        <th>Description</th>
        <th>Date</th>
        <th class="col-sm-2">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr  v-for="message in messages" :key="message.id">
        <td>
          <router-link :to="{name:'Messages', params: {id: message.id}}"></router-link>
          {{ message.titre }}
        </td>
        <td> {{message.categories}}</td>
        <td>
          {{message.message}}

        </td>
          <td>{{moment(message.date).format('LLLL') }}</td>
        <td>
          <a class="btn btn-warning btn-xs" v-link="{name: 'product-edit', params: {product_id: message.id}}">Edit</a>
          <a class="btn btn-danger btn-xs" v-link="{name: 'product-delete', params: {product_id: message.id}}">Delete</a>
        </td>

      </tr>
      </tbody>
    </table>
<!--    <table class="tableau">-->
<!--      <tr>-->
<!--        <th>Catégorie</th>-->
<!--        <th>Titre</th>-->
<!--        <th>Message</th>-->
<!--        <th>Date de publication</th>-->
<!--      </tr>-->
<!--      <tr v-for="message in messages" :key="message.id">-->
<!--        <td>{{message.categorie}}</td>-->
<!--        <td>{{message.titre}}</td>-->
<!--        <td>{{message.message}}</td>-->
<!--        <td>{{message.date_publi}}</td>-->
<!--      </tr>-->
<!--    </table>-->
    <ul>






    </ul>
  </div>
</template>

<script>

import {getMessage} from "@/api/message.js";
import moment from "moment";


export default {
  name:'Messages',
  data (){
    return{
      messages: null
    }
  },
  methods: {
    moment(date) {
      moment.locale();
      return moment(date);
    }
  },
  async mounted() {
    this.messages = await getMessage().then((response) => {
      return response.data['hydra:member']
    })
  }
}

</script>
<style>

</style>