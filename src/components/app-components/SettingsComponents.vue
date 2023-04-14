<template>
    <div class="settings-wrap">
        <settings-block-template title="Звонок через SIP">
            <template #element>
                <el-switch style="display: block" v-model="callType" active-color="#2dc574" inactive-color="#BABABA">
                </el-switch>
            </template>

            <p>
                Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет выглядеть так,
                будто звонки совершаются с разных номеров.
            </p>
        </settings-block-template>

        <settings-block-template title="Учётная запись">
            <account-block />
        </settings-block-template>

        <settings-block-template title="Оповещения о новых подборках">
            <notifications-block />
        </settings-block-template>

        <settings-block-template title="Переход в карточку">
            <transition-block />
        </settings-block-template>

        <settings-block-template title="Прочие настройки">
            <other-block />
        </settings-block-template>
    </div>
</template>

<script>
import SettingsBlockTemplate from "../settings-block/SettingsBlockTemplate.vue";
import AccountBlock from "../settings-block/AccountBlock.vue";
import NotificationsBlock from "../settings-block/NotificationsBlock.vue";
import TransitionBlock from "../settings-block/TransitionBlock.vue";
import OtherBlock from "../settings-block/OtherBlock.vue";

export default {
    components: { SettingsBlockTemplate, AccountBlock, NotificationsBlock, TransitionBlock, OtherBlock },
    name: "settings-component",

    data() {
        return {
            sipChecked: true,
        };
    },

    computed: {
        callType: {
            get() {
                return Boolean(+this.$store.state.userData?.calltype);
            },
            set(value) {
                this.$store.commit("switchCallType", String(+value));
            },
        },
    },
};
</script>

<style>
.settings-wrap {
    padding: 24px 14px;
    display: flex;
    flex-direction: column;
    gap: 40px;
}
</style>
