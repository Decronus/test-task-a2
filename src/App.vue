<template>
    <div id="app">
        <header-component />
        <settings-components />
    </div>
</template>

<script>
import HeaderComponent from "./components/app-components/HeaderComponent.vue";
import SettingsComponents from "./components/app-components/SettingsComponents.vue";

export default {
    name: "App",
    components: { HeaderComponent, SettingsComponents },
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
    font-weight: 400;
    line-height: 150%;
    color: #686869;
}

a {
    font-size: 14px;
    font-weight: 400;
    color: #61c27c;
}

hr {
    height: 1px;
    background-color: #e9e9ea;
    border: none;
}

.el-radio {
    font-weight: 400;
    font-size: 14px;
}

.el-radio__input.is-checked + .el-radio__label {
    color: #000000;
}

.el-input__icon {
    line-height: 0;
}

.el-select .el-input .el-select__caret {
    color: #61c27c;
}

.el-scrollbar__view.el-select-dropdown__list {
    background: #61c27c;
}

.el-select-dropdown__item {
    color: #ffffff;
}

.el-select-dropdown__item.hover {
    background: #51a667;
    color: #ffffff;
}

.el-select-dropdown__item.selected {
    color: #ffffff;
}

.el-select-dropdown__item.hover::before {
    content: "✓ ";
}

.el-popper[x-placement^="top"] .popper__arrow {
    display: none;
}

.el-checkbox {
    display: flex;
    align-items: center;
}

.el-checkbox__label {
    font-size: 12px;
    white-space: normal;
    line-height: 120%;
}

.el-checkbox__input.is-checked + .el-checkbox__label {
    color: #000000;
}

.el-checkbox__inner {
    width: 18px;
    height: 18px;
    border-color: #61c27c;
}

.el-checkbox__inner:hover {
    border-color: #61c27c;
}

.el-checkbox__inner::after {
    height: 12px;
    left: 6px;
}

.el-checkbox__input.el-checkbox__inner {
    border-color: #61c27c;
}

.el-checkbox__input.is-checked .el-checkbox__inner {
    background: #61c27c;
    border-color: #61c27c;
}
</style>
