<template>
    <div class="notifications-block-wrap">
        <p>
            Выберите, куда будут приходить уведомления при появлении автомобилей, которые подходят под критерии вашей
            подборки.
        </p>

        <h3 class="notification-header">Уведомления</h3>

        <el-radio-group v-model="notification" class="notifications-block-radio-wrap">
            <el-radio :label="-1">Выкл</el-radio>
            <hr />

            <div class="notifications-block-radio-item-wrap">
                <el-radio :label="3" disabled>Push</el-radio>
                <styled-tooltip text="Можно установить только в приложении">
                    <info-icon />
                </styled-tooltip>
            </div>
            <hr />

            <div class="notifications-block-radio-item-wrap custom-input">
                <el-radio :label="2">Email</el-radio>

                <div class="notifications-block-hidden-input-wrap">
                    <p v-if="$store.state.userData?.email && !emailInput">
                        {{ $store.state.userData.email }}
                    </p>
                    <edit-icon @click="emailInput = true" v-if="!emailInput" />
                    <el-input v-model="email" class="hidden-input" v-else></el-input>
                </div>
            </div>
            <hr />

            <div class="notifications-block-radio-item-wrap custom-input">
                <el-radio :label="1">
                    <a href="https://avclick.me/v/AVinfoBot">Telegram ID</a>
                </el-radio>

                <div class="notifications-block-hidden-input-wrap">
                    <p v-if="$store.state.userData?.telegramChat && !telegramInput">
                        {{ $store.state.userData.telegramChat }}
                    </p>
                    <edit-icon @click="telegramInput = true" v-if="!telegramInput" />
                    <el-input v-model="telegramChat" class="hidden-input" v-else></el-input>
                </div>
            </div>
        </el-radio-group>
    </div>
</template>

<script>
import InfoIcon from "../icons/InfoIcon.vue";
import EditIcon from "../icons/EditIcon.vue";
import StyledTooltip from "../styled/StyledTooltip.vue";

export default {
    components: { InfoIcon, EditIcon, StyledTooltip },
    name: "notifications-block",

    data() {
        return {
            emailInput: false,
            telegramInput: false,
        };
    },

    computed: {
        notification: {
            get() {
                return this.$store.state.userData?.sendMethod;
            },
            set(value) {
                this.$store.commit("updateNotification", value);
            },
        },

        email: {
            get() {
                return this.$store.state.userData?.email;
            },
            set(value) {
                this.$store.commit("updateEmail", value);
            },
        },

        telegramChat: {
            get() {
                return this.$store.state.userData?.telegramChat;
            },
            set(value) {
                this.$store.commit("updateTelegramChat", value);
            },
        },
    },
};
</script>

<style>
.notifications-block-wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.notification-header {
    font-size: 15px;
    font-weight: 600;
}

.notifications-block-radio-wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 370px;
}

.notifications-block-radio-item-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.notifications-block-hidden-input-wrap {
    display: flex;
    gap: 10px;
    align-items: center;
}

.notifications-block-hidden-input-wrap p {
    color: #000000;
}

.hidden-input.el-input {
    width: 200px;
}
</style>
