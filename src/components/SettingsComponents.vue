<template>
    <div class="settings-wrap">
        <settings-block-template title="Звонок через SIP">
            <template #element>
                <el-switch style="display: block" v-model="sipChecked" active-color="#13ce66" inactive-color="#ff4949">
                </el-switch>
            </template>
            <template #content>
                <p>
                    Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет выглядеть так,
                    будто звонки совершаются с разных номеров.
                </p>
            </template>
        </settings-block-template>

        <settings-block-template title="Учётная запись">
            <template #content>
                <p>
                    Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет выглядеть так,
                    будто звонки совершаются с разных номеров.
                </p>
            </template>
        </settings-block-template>

        <settings-block-template title="Оповещения о новых подборках">
            <template #content>
                <p>
                    Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет выглядеть так,
                    будто звонки совершаются с разных номеров.
                </p>
            </template>
        </settings-block-template>

        <settings-block-template title="Переход в карточку">
            <template #content>
                <p>
                    Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет выглядеть так,
                    будто звонки совершаются с разных номеров.
                </p>
            </template>
        </settings-block-template>

        <settings-block-template title="Прочие настройки">
            <template #content>
                <p>
                    Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет выглядеть так,
                    будто звонки совершаются с разных номеров.
                </p>
            </template>
        </settings-block-template>
    </div>
</template>

<script>
import { BFormCheckbox } from "bootstrap-vue";
import SettingsBlockTemplate from "./SettingsBlockTemplate.vue";

export default {
    components: { SettingsBlockTemplate, BFormCheckbox },
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
