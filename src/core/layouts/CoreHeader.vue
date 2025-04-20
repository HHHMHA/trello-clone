<template>
    <nav class="core-nav">
        <div class="core-nav__branding">
            BaqBaq
        </div>
        <!-- Hidden on mobile, shown on desktop -->
        <div class="core-nav__buttons hide-on-mobile">
            <button class="core-nav__button menu-button" :class="{ 'active': showMenu }" @click="toggleMenu($event, 0)">
                Plans
                <svg :style="{ transform: showMenu ? 'rotate(180deg)' : 'rotate(0deg)' }" fill="currentColor" height="8" viewBox="0 0 13 8" width="13" xmlns="http://www.w3.org/2000/svg">
                    <path d="m11.7305.59279c.3626.362629.3885.93447.0777 1.32699l-.0777.08722-4.99999 4.99999c-.36263.36263-.93446.38853-1.32697.0777l-.08725-.0777-4.999959-4.99997c-.3905249-.39052-.3905242-1.023685 0-1.414209.362629-.36263.934469-.388553 1.326989-.077728l.08722.077728 4.29292 4.292139 4.29284-4.29216c.3626-.36263.9345-.388532 1.327-.077707z"></path>
                </svg>
            </button>
            <!--            <button class="core-nav__button">test</button>-->
        </div>
        <div class="core-nav__trail hide-on-mobile">
            <a href="">Login</a>
            <a href="">Register</a>
            <input type="search" name="search" placeholder="Search...">
        </div>

        <!-- Hamburger Button (Shown on mobile) -->
        <button class="hamburger" @click="toggleSidebar">
            ☰
        </button>
    </nav>

  <!-- Sidebar Navigation for Mobile -->
    <div class="sidebar" :class="{ 'open': showSidebar }">
        <div class="sidebar-header">
            <button class="sidebar__btn" @click="toggleSidebar">✕</button>
            <h2 v-if="!showSubMenu">Menu</h2>
            <button class="sidebar__btn" v-if="showSubMenu" @click="closeSubMenu">← Back</button>
        </div>

        <!-- Main Sidebar Menu -->
        <ul v-if="!showSubMenu">
            <li class="sidebar__btn" @click="openSubMenu(0)"><a href="javascript:void(0)">Plans</a></li>
            <li class="sidebar__btn"><a href="#">Login</a></li>
            <li class="sidebar__btn"><a href="#">Register</a></li>
            <li>
                <input type="search" name="search" placeholder="Search...">
            </li>
        </ul>

        <!-- Submenu Contents (Replaces Main Menu) -->
        <div v-if="showSubMenu">
            <h2>Plans</h2>
            <ul v-show="activeMenuIndex == 0">
                <li class="sidebar__btn"><a href="#">Standard</a></li>
                <li class="sidebar__btn"><a href="#">Premium</a></li>
            </ul>
        </div>
    </div>
    <section class="nav-menu hide-on-mobile" :class="{'active': showMenu}">
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

let showSidebar = ref(false);
let showSubMenu = ref(false);

// Toggle Sidebar (For Mobile)
const toggleSidebar = () => {
    showSidebar.value = !showSidebar.value;
    showSubMenu.value = false; // Reset submenu when opening main sidebar

    showMenu.value = false;
};

// Open Submenu
const openSubMenu = (index) => {
    showSubMenu.value = true;
    activeMenuIndex.value = index;
};

// Close Submenu (Back Button)
const closeSubMenu = () => {
    showSubMenu.value = false;
};

let activeMenuIndex = ref(0)
let showMenu = ref(false)

const toggleMenu = (event, index) => {
    activeMenuIndex.value = index
    showMenu.value = !showMenu.value
}
</script>

<style scoped>
@import "@/assets/core-nav.scss";
</style>