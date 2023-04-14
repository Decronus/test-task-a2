<template>
    <div class="other-block-wrap">
        <p>Выберите, каким образом будет открываться детальное представление выбранного вами транспорта.</p>

        <div class="other-block-inputs-wrap">
            <div class="other-block-input-wrap custom-input">
                <h3>Часовой пояс</h3>
                <el-input v-model="login"></el-input>
            </div>

            <div class="other-block-chekbox-item-wrap">
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
    name: "other-block",

    data() {
        return {
            transitionRadio: "current",
        };
    },
};
</script>

<style>
.other-block-wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.other-block-radio-wrap {
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

.other-block-radio-item-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
