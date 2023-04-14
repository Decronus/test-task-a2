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

            <el-radio :label="2">Email</el-radio>
            <hr />

            <el-radio :label="1">
                <a href="https://avclick.me/v/AVinfoBot">Telegram ID</a>
            </el-radio>
        </el-radio-group>
    </div>
</template>

<script>
import InfoIcon from "../icons/InfoIcon.vue";
import StyledTooltip from "../styled/StyledTooltip.vue";

export default {
    components: { InfoIcon, StyledTooltip },
    name: "notifications-block",

    computed: {
        notification: {
            get() {
                return this.$store.state.userData?.sendMethod;
            },
            set(value) {
                this.$store.commit("updateNotification", value);
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
</style>
