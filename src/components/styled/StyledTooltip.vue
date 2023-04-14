<template>
    <el-tooltip class="tooltip" effect="dark" :content="text" placement="bottom"><slot></slot></el-tooltip>
</template>

<script>
export default {
    name: "styled-tooltip",
    props: {
        text: {
            type: String,
            required: true,
        },
    },
};
</script>

<style>
.el-tooltip__popper.is-dark {
    background: #2dc574;
    font-weight: 500;
}

.el-tooltip__popper.is-dark[x-placement^="bottom"] .popper__arrow,
.el-tooltip__popper.is-dark[x-placement^="bottom"] .popper__arrow::after {
    border-bottom-color: #2dc574;
}

.el-tooltip__popper.is-dark[x-placement^="top"] .popper__arrow,
.el-tooltip__popper.is-dark[x-placement^="top"] .popper__arrow::after {
    border-top-color: #2dc574;
}
</style>
