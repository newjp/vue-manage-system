<template>
    <div class="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <div class="main">
            <transition name="fade" mdoe="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import Header from '../components/common/Header'
    import Sidebar from '../components/common/SideBar'

    export default {
        components: {
            Header,
            Sidebar
        }
    }
</script>

<style scoped>
    /*页面切换动画*/
    /* .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-leave {
        opacity: 1;
    }

    .fade-leave-active {
        opacity: 0;
    } */
</style>