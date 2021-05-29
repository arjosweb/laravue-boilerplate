<template>
    <div id="theme">
        <transition name="view">
            <router-view />
        </transition>
    </div>
</template>

<script>
export default {
    name: "Theme"
}
</script>

<style scoped>
    #theme {
        background-color: #d5ffcb;
        min-height: 100vh;
        display: flex;
        align-items: center;

    }
</style>
