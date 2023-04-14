<template>
    <div class="settings-wrap">
        <settings-block-template title="Звонок через SIP">
            <template #element>
                <el-switch style="display: block" v-model="sipChecked" active-color="#61C27C" inactive-color="#BABABA">
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
