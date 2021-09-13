<template>
      <div id="navbarContent" class="m-0 p-0 justify-content-end align-self-center">
        <div class="nav-item dropdown m-0 p-0">
            <a class="nav-item nav-link m-0 p-0" href="#" data-toggle="dropdown" id="my_account" aria-haspopup="true" aria-expanded="false">
                <img :src="avatar" alt="Image de profile" height="37" class="my-0 rounded-circle"/>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="my_account">
                <p class="h5 dropdown-item-text">{{ username }}</p>
                <div class="dropdown-divider"></div>
                <div class="d-flex"><img src="/images/edit.svg" fill="text-primary" alt="Mon compte" class="pl-4"><router-link to="/compte" class="dropdown-item pl-2">Mon compte</router-link></div>
                <div class="d-flex"><img src="/images/mail.svg" fill="text-primary" alt="Ecrire un message" class="pl-4"><router-link to="/compte/messages" class="dropdown-item pl-2">Mes messages</router-link></div>
                <div class="dropdown-divider"></div>
                <div class="d-flex"><img src="/images/pass.svg" fill="text-primary" alt="se deconnecter" class="pl-4"><a class ="dropdown-item pl-2 text-danger" @click="deconnexion" href="#">Déconnexion</a></div>
            </div>
        </div>            
    </div>
</template>

<script>
export default {
data() {
        return {
            username: "", 
            avatar: "../assets/images/"
        }
    },
}
</script>

<style>

</style>