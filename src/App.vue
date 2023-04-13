<template>
    <div id="app">
        <header-component />
        <settings-components />
    </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import SettingsComponents from "./components/SettingsComponents.vue";

export default {
    name: "App",
    components: { HeaderComponent, SettingsComponents },

    data() {
        return {
            selected: [], // Must be an array reference!
            options: [
                { text: "Red", value: "red" },
                { text: "Green", value: "green" },
                { text: "Yellow (disabled)", value: "yellow", disabled: true },
                { text: "Blue", value: "blue" },
            ],
        };
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000000;
}

h1 {
    font-size: 30px;
    font-weight: 600;
}

h2 {
    font-size: 18px;
    font-weight: 600;
}

h3 {
    font-size: 14px;
    font-weight: 500;
}

p {
    font-size: 14px;
    font-weight: 300;
    line-height: 150%;
}

a {
    font-size: 14px;
    font-weight: 400;
    color: #61c27c;
}

.el-radio {
    font-weight: 400;
}
</style>
