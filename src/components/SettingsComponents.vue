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
            <p>
                Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет выглядеть так,
                будто звонки совершаются с разных номеров.
            </p>
        </settings-block-template>

        <settings-block-template title="Прочие настройки">
            <p>
                Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет выглядеть так,
                будто звонки совершаются с разных номеров.
            </p>
        </settings-block-template>
    </div>
</template>

<script>
import { BFormCheckbox } from "bootstrap-vue";
import SettingsBlockTemplate from "./SettingsBlockTemplate.vue";
import AccountBlock from "./settings-block/AccountBlock.vue";
import NotificationsBlock from "./settings-block/NotificationsBlock.vue";

export default {
    components: { SettingsBlockTemplate, BFormCheckbox, AccountBlock, NotificationsBlock },
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
