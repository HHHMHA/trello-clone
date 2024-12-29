<template>
    <nav class="core-nav">
        <div class="core-nav__branding">
            BaqBaq
        </div>
        <div class="core-nav__buttons">
            <button class="core-nav__button" @click="toggleMenu($event, 0)">
                Plans
                <svg fill="currentColor" height="8" viewBox="0 0 13 8" width="13" xmlns="http://www.w3.org/2000/svg">
                    <path d="m11.7305.59279c.3626.362629.3885.93447.0777 1.32699l-.0777.08722-4.99999 4.99999c-.36263.36263-.93446.38853-1.32697.0777l-.08725-.0777-4.999959-4.99997c-.3905249-.39052-.3905242-1.023685 0-1.414209.362629-.36263.934469-.388553 1.326989-.077728l.08722.077728 4.29292 4.292139 4.29284-4.29216c.3626-.36263.9345-.388532 1.327-.077707z"></path>
                </svg>
            </button>
            <!--            <button class="core-nav__button">test</button>-->
        </div>
        <div class="core-nav__trail">
            <a href="">Login</a>
            <a href="">Register</a>
            <input type="search" name="" id="">
        </div>
    </nav>
    <section class="nav-menu" :class="{'active': showMenu}">
        <div v-show="activeMenuIndex == 0">
            <h1>Plans</h1>
            <hr>
            <div class="nav-menu__links">
                <a href="">
                    Standard
                </a>
                <a href="">
                    Premium
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import {ref} from "vue";

let activeMenuIndex = ref(0)
let showMenu = ref(false)

const toggleMenu = (event, index) => {
    activeMenuIndex.value = index
    showMenu.value = !showMenu.value
    const menuButton = event.target;
    menuButton.classList.toggle("active")
    const arrowIcon = menuButton.children[0]
    arrowIcon.style = menuButton.classList.contains("active") ? "transform: rotate(180deg)" : "transform: rotate(0)";
}
</script>

<style scoped>

</style>