<template>
    <div class="container">
        <div class="row pt-4 justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ module.title  }}</div>
                    <div class="card-body">
                        {{ module.subtitle }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    computed: {
      ...mapState(['module'])
    },
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
