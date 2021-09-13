<template>
     <div id="modalDropMessage" tabindex="-1" aria-labelledby="modalDropMessage" aria-hidden="false">
        <div class="modal-dialog">
            <div class="modal-content border border-danger">
                <form enctype="multipart/form-data">
                    <div class="modal-header d-flex flex-column flex-md-row align-items-center justify-content-start">
                        <p class="modal-title h5 mr-1 text-danger">Supprimer le message ?</p>
                        <p class="modal-title mt-1" :class="editorColor">{{editorTag}}</p>
                    </div>
                    <div class="row modal-body">
                        <div class="col-12 justify-content-center form-group">
                            <label for="editMessage" class="sr-only">Message :</label>
                            <textarea class="form-control" v-model="editMessage" id="editMessage" name="message" rows="10" ></textarea>
                        </div>
                        <div class="col-12 justify-content-center text-center">
                            <img :src="newImage" class="w-50 rounded">
                            <p class="small text-center">Image à partager</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="row w-100 justify-content-spacebetween">
                            <div class="col-6"><a href="/home" class="btn btn-secondary btn-block">Annuler</a></div>
                            <div class="col-6"><button type="submit" @click.prevent="deleteMessage()" class="btn btn-success btn-block">Valider</button></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>