<template>
    <el-tooltip class="tooltip" effect="dark" content="Можно установить только в приложении" placement="bottom"
        ><slot></slot
    ></el-tooltip>
</template>

<script>
export default {
    name: "styled-tooltip",
};
</script>

<style>
.el-tooltip__popper.is-dark {
    background: #61c27c;
}

.el-tooltip__popper.is-dark[x-placement^="bottom"] .popper__arrow,
.el-tooltip__popper.is-dark[x-placement^="bottom"] .popper__arrow::after {
    border-bottom-color: #61c27c;
}
</style>
