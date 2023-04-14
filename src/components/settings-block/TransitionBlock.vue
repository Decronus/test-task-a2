<template>
    <div class="transition-block-wrap">
        <p>Выберите, каким образом будет открываться детальное представление выбранного вами транспорта.</p>

        <el-radio-group v-model="redirect" class="transition-block-radio-wrap">
            <el-radio :label="0">В карточку в текущем окне</el-radio>
            <hr />

            <el-radio :label="1">В карточку в отдельном окне</el-radio>
            <hr />

            <div class="transition-block-radio-item-wrap">
                <el-radio :label="2">На источник</el-radio>
                <styled-tooltip text="Прямой переход в объявление на источнике">
                    <info-icon />
                </styled-tooltip>
            </div>
        </el-radio-group>
    </div>
</template>

<script>
import InfoIcon from "../icons/InfoIcon.vue";
import StyledTooltip from "../styled/StyledTooltip.vue";

export default {
    components: { InfoIcon, StyledTooltip },
    name: "transition-block",

    computed: {
        redirect: {
            get() {
                return this.$store.state.userData?.redirecttarget;
            },
            set(value) {
                this.$store.commit("updateRedirect", value);
            },
        },
    },
};
</script>

<style>
.transition-block-wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.transition-block-radio-wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 370px;
}

.transition-block-radio-item-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
