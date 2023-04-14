<template>
    <div class="other-block-wrap">
        <div class="other-block-inputs-wrap">
            <div class="other-block-select-wrap custom-input">
                <h3>Часовой пояс</h3>
                <el-select v-model="city" placeholder="Select">
                    <el-option v-for="item in options" :key="item.city" :label="item.city" :value="item.city">
                    </el-option>
                </el-select>
            </div>

            <div class="other-block-chekbox-item-wrap">
                <el-checkbox v-model="autoTransition">Автоматически переходить к новым объявлениям</el-checkbox>
                <styled-tooltip text="Лента будет автоматически обновляться 1 раз в 3 секунды">
                    <info-icon />
                </styled-tooltip>
            </div>

            <div class="other-block-chekbox-item-wrap">
                <el-checkbox v-model="colors">Включить цвета в ленте</el-checkbox>
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
            options: [
                {
                    city: "Калининград",
                },
                {
                    city: "Москва",
                },
                {
                    city: "Самара",
                },
                {
                    city: "Екатеринбург",
                },
                {
                    city: "Омск",
                },
                {
                    city: "Красноярск",
                },
                {
                    city: "Иркутск",
                },
                {
                    city: "Якутск",
                },
                {
                    city: "Владивосток",
                },
                {
                    city: "Магадан",
                },
                {
                    city: "Камчатка",
                },
            ],
            city: "Москва",
            autoTransition: false,
            colors: false,
        };
    },
};
</script>

<style>
.other-block-wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: -6px;
}

.other-block-inputs-wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 370px;
}

.other-block-chekbox-item-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
}

.other-block-select-wrap {
    display: flex;
    align-items: center;
    gap: 20px;
}

.custom-input input:focus {
    border-color: #61c27c;
}


</style>
