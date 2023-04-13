<template>
    <div class="settings-block">
        <div class="settings-block-title">
            <h2>{{ title }}</h2>
            <slot name="element"></slot>
        </div>

        <div class="settings-block-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "settings-block-template",
    props: {
        title: {
            type: String,
        },
    },
};
</script>

<style>
.settings-block {
    display: flex;
    align-items: flex-start;
    gap: 20px;
}

.settings-block-title {
    display: flex;
    gap: 10px;
    align-items: center;
    width: 270px;
}

.settings-block-content {
    width: 500px;
}
</style>
