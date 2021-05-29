<template>
    <section class="container-fluid">
        <div class="row">
            <div class="col-12 text-center">
                <img :src="logo_laravel" width="80" style="padding-right: 15px;" alt="Laravel">
                <img :src="logo_vue" width="80" alt="VueJS">
            </div>
        </div>
        <div class="row">
            <div class="col-12 pt-4">
                <div class="d-flex"
                     style="justify-content: center;">
                    <div>
                        <h3 style="margin-right: 5px;">LaraVue</h3>
                    </div>
                    <div>
                        <small>v1.0.0</small>
                    </div>
                </div>
            </div>
            <div class="col-12 text-center pt-0">
                <div>
                    <h6>
                        Boilerplate Start Kit
                    </h6>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <ExampleComponent/>
            </div>
        </div>
        <div class="row pt-3">
            <div class="col-12 text-center">
                <div>
                    <strong>
                        <i class="bx bx-code-alt pr-1"></i>
                        Core Includes:
                    </strong>
                </div>
                <div>
                    Vuex, VueRouter, Bootstrap, Bootstrap Vue, Vuetify, PortalVue, Popper.JS and jQuery.
                </div>
            </div>
            <div class="col-12 text-center">
                <div>
                    <strong>
                        <i class="bx bx-star pr-1"></i>
                        Other Includes:
                    </strong>
                </div>
                <div>
                    FontAwesome, BoxIcons and SweetAlert2.
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 pt-5 text-center">
                <span style="font-size: 12px;">
                    Coded by <a href="https://arjos.com.br" target="_blank">ARJOS</a>
                </span>
            </div>
        </div>
    </section>
</template>

<script>
import ExampleComponent from "../components/general/ExampleComponent";
import logo_laravel from "../assets/img/logo-laravel.png"
import logo_vue from "../assets/img/logo-vuejs.png"

export default {
    name: "Welcome",
    components: {
        ExampleComponent
    },
    data(){
        return {
            logo_laravel: logo_laravel,
            logo_vue: logo_vue
        }
    }
}
</script>

<style scoped>

</style>
