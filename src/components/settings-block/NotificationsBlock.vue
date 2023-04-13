<template>
    <div class="notifications-block-wrap">
        <p>
            Выберите, куда будут приходить уведомления при появлении автомобилей, которые подходят под критерии вашей
            подборки.
        </p>

        <h3 class="notification-header">Уведомления</h3>

        <div class="notifications-block-radio-wrap">
            <el-radio v-model="notificationsRadio" label="off">Выкл</el-radio>

            <div class="notifications-block-radio-item-wrap">
                <el-radio v-model="notificationsRadio" label="push" disabled>Push</el-radio>
            </div>

            <el-radio v-model="notificationsRadio" label="emain">Email</el-radio>

            <el-radio v-model="notificationsRadio" label="telegramId"
                ><a href="https://avclick.me/v/AVinfoBot">Telegram ID</a></el-radio
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "notifications-block",

    data() {
        return {
            notificationsRadio: 1,
        };
    },
};
</script>

<style>
.notifications-block-wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 410px;
}

.notification-header {
    font-size: 15px;
    font-weight: 600;
}

.notifications-block-radio-wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
