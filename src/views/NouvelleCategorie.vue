<template>
  <div class="about">
    <h1>Création d'une catégorie</h1>
    <div v-if="confirm">
      Catégorie ajoutée avec succès !
    </div>
    <div>
      <label for="Nom">Nom</label>
      <input type="text" name="Nom" v-model="nom"  id="Nom"/>
    </div>
    <div>
      <label for="couleur">Couleur</label>
      <input type="text" name="couleur" v-model="couleur"  id="couleur"/>
    </div>
    <div>
      <button @click="ajoutCategorie">Ajouter</button>
    </div>
  </div>
</template>

<script>
import {postCategorie} from '@/api/categorie.js'

export default {
  name: 'NouvelleCategorie',
  data () {
    return {
      couleur: '',
      nom: '',
      confirm: false
    }
  },
  methods: {
    async ajoutCategorie() {
      await postCategorie({
        couleur: this.couleur,
        nom: this.nom
      }).then((reponse) => {
        console.log(reponse)
        //this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/categories') //redirection
      })
    }
  }
}
</script>