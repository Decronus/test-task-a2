<template>
    <div class="other-block-wrap">
        <div class="other-block-inputs-wrap">
            <div class="other-block-select-wrap custom-input">
                <h3>Часовой пояс</h3>
                <el-select v-model="timezone" placeholder="Загрузка...">
                    <el-option v-for="item in options" :key="item.label" :label="item.city" :value="item.index">
                    </el-option>
                </el-select>
            </div>

            <div class="other-block-chekbox-item-wrap">
                <el-checkbox v-model="lockLent">Автоматически переходить к новым объявлениям</el-checkbox>
                <styled-tooltip text="Лента будет автоматически обновляться 1 раз в 3 секунды">
                    <info-icon />
                </styled-tooltip>
            </div>

            <div class="other-block-chekbox-item-wrap">
                <el-checkbox v-model="colorLent">Включить цвета в ленте</el-checkbox>
                <styled-tooltip text="Прямой переход в объявление на источнике">
                    <info-icon />
                </styled-tooltip>
            </div>

            <div class="other-block-button_wrap">
                <el-button
                    type="primary"
                    :loading="loadingButton"
                    @click="updateUserData"
                    :disabled="!$store.state.userData"
                    >Сохранить
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
import InfoIcon from "../icons/InfoIcon.vue";
import StyledTooltip from "../styled/StyledTooltip.vue";
import Queries from "../../services/queries.services";
import { USER_ID } from "@/utils/consts";

export default {
    components: { InfoIcon, StyledTooltip },
    name: "other-block",

    data() {
        return {
            loadingButton: false,

            options: [
                {
                    city: "Калининград",
                    label: "Kaliningrad",
                    index: -1,
                },
                {
                    city: "Москва",
                    label: "Moskva",
                    index: 0,
                },
                {
                    city: "Самара",
                    label: "Samara",
                    index: 1,
                },
                {
                    city: "Екатеринбург",
                    label: "Ekaterinburg",
                    index: 2,
                },
                {
                    city: "Омск",
                    label: "Omsk",
                    index: 3,
                },
                {
                    city: "Красноярск",
                    label: "Krasnoyarsk",
                    index: 4,
                },
                {
                    city: "Иркутск",
                    label: "Irkutsk",
                    index: 5,
                },
                {
                    city: "Якутск",
                    label: "Yakutsk",
                    index: 6,
                },
                {
                    city: "Владивосток",
                    label: "Vladivostok",
                    index: 7,
                },
                {
                    city: "Магадан",
                    label: "Magadan",
                    index: 8,
                },
                {
                    city: "Камчатка",
                    label: "Kamchatka",
                    index: 9,
                },
            ],
        };
    },

    methods: {
        updateUserData() {
            this.loadingButton = true;

            Queries.putUpdateUserData(USER_ID, this.$store.state.userData)
                .then(() => {
                    this.loadingButton = false;

                    this.$message({
                        message: "Данные успешно сохранены",
                        type: "success",
                    });
                })
                .catch((err) => {
                    this.loadingButton = false;

                    this.$message({
                        message: "Ошибка при сохранении данных, попробуйте еще раз",
                        type: "error",
                    });
                });
        },
    },

    computed: {
        timezone: {
            get() {
                const index = +this.$store.state.userData?.timezone;
                const city = this.options.find((el) => el.index === index);

                return city?.city;
            },
            set(value) {
                this.$store.commit("updateTimezone", value);

                const city = this.options.find((el) => el.index === value);
                this.$store.commit("updateTimezoneString", city.label);
            },
        },

        lockLent: {
            get() {
                return !this.$store.state.userData?.locklentaupdate;
            },
            set(value) {
                this.$store.commit("switchLockLent", !value);
            },
        },

        colorLent: {
            get() {
                return this.$store.state.userData?.colorlenta;
            },
            set(value) {
                this.$store.commit("switchColorLent", value);
            },
        },
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
    border-color: #2dc574;
}

.other-block-button_wrap {
    margin-top: 10px;
    padding: 14px 0 50px;
    border-top: 1px solid #e9e9ea;
    width: 130%;
}

.el-button.el-button--primary {
    background-color: #2dc574;
    border-color: #2dc574;
    width: 100%;
}
</style>
