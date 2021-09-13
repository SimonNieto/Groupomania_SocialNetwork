<template>
      <div class="container pt-3 py-2">
        <div class="row justify-content-around">
            <nav class="">
                <router-link to="/home">
                    <img src="../assets/logo_black.svg" alt="logo groupomania" height="37" class="m-0 p-0"/>
                </router-link>
            </nav>
            <nav class="">
                <router-link to="/compte">
                    <div class="nav-item dropdown m-0 p-0">
                <a class="nav-item nav-link m-0 p-0" href="#" id="my_account" aria-haspopup="true" aria-expanded="false">
                    <img src="../assets/images/home.png" alt="Image de profile" height="37" class="my-0 rounded-circle"/>
                </a>
            </div>
                </router-link>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style>

</style>