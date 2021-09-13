<template>
      <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8">
                <div class="card bg-light">
                    <h5 class="my-3 text-center">Bienvenue sur le réseau social </h5>
                    <div
              class="card-header bg-light d-flex flex-column justify-content-center"
            >
              <img
                src="../assets/logo_black.svg"
                class="m-0 p-0"
                height="50"
                alt="logo groupomania"
              />
              
            </div>
                    <div class="card-body d-flex justify-content-between">
                        <bouton id="style-btn" class="btn btn-dark"><router-link to="/connexion">Connexion</router-link></bouton>
                        <bouton id="style-btn" class="btn btn-dark"><router-link to="/inscription">Inscription</router-link></bouton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    Name: "Accueil"
}
</script>

<style>
#style-btn {
    color: #ffffff;
    text-decoration: none;
    background-color: transparent;
}
</style>