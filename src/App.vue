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
    color: #2c3e50;
}

h1 {
    font-size: 30px;
    font-weight: 600;
    color: #000000;
}

h2 {
    font-size: 18px;
    font-weight: 600;
    color: #000000;
}

p {
    font-size: 14px;
}
</style>
