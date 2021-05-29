<template>
    <div id="app">
        <transition name="view">
            <router-view />
        </transition>
    </div>
</template>

<script>
export default {
    name: "App"
}
</script>

<style scoped>

</style>
