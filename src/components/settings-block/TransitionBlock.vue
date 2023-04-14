<template>
    <div class="transition-block-wrap">
        <p>Выберите, каким образом будет открываться детальное представление выбранного вами транспорта.</p>

        <div class="transition-block-radio-wrap">
            <el-radio v-model="transitionRadio" label="current">В карточку в текущем окне</el-radio>
            <hr />

            <el-radio v-model="transitionRadio" label="blank">В карточку в отдельном окне</el-radio>
            <hr />

            <div class="transition-block-radio-item-wrap">
                <el-radio v-model="transitionRadio" label="source">На источник</el-radio>
                <styled-tooltip text="Прямой переход в объявление на источнике">
                    <info-icon />
                </styled-tooltip>
            </div>
        </div>
    </div>
</template>

<script>
import InfoIcon from "../icons/InfoIcon.vue";
import StyledTooltip from "../styled/StyledTooltip.vue";
export default {
    components: { InfoIcon, StyledTooltip },
    name: "transition-block",

    data() {
        return {
            transitionRadio: "current",
        };
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

hr {
    height: 1px;
    background-color: #e9e9ea;
    border: none;
}

.transition-block-radio-item-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
