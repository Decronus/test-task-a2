<template>
    <div class="account-block-wrap">
        <div class="account-block-input-wrap custom-input">
            <h3>Компания</h3>
            <el-input v-model="companyName" disabled></el-input>
        </div>

        <div class="account-block-input-wrap custom-input">
            <h3>Логин</h3>
            <el-input v-model="login" disabled></el-input>
        </div>

        <div class="account-block-input-wrap custom-input">
            <h3>Номер телефона</h3>
            <el-input v-model="phone"></el-input>
        </div>

        <div class="account-block-input-wrap custom-input">
            <h3>Имя</h3>
            <el-input v-model="name"></el-input>
        </div>

        <div class="account-block-input-wrap custom-input">
            <h3 style="margin-bottom: 20px">Фамилия</h3>
            <el-input v-model="surname" class="input-with-note"></el-input>
        </div>
    </div>
</template>

<script>
export default {
    name: "account-block",

    computed: {
        companyName: {
            get() {
                return this.$store.state.userData?.companyname;
            },
            set(value) {
                this.$store.commit("updateCompanyName", value);
            },
        },

        login: {
            get() {
                return this.$store.state.userData?.login;
            },
            set(value) {
                this.$store.commit("updateLogin", value);
            },
        },

        phone: {
            get() {
                return this.$store.state.userData?.phone;
            },
            set(value) {
                this.$store.commit("updatePhone", value);
            },
        },

        name: {
            get() {
                return this.$store.state.userData?.fname;
            },
            set(value) {
                this.$store.commit("updateName", value);
            },
        },

        surname: {
            get() {
                return this.$store.state.userData?.lname;
            },
            set(value) {
                this.$store.commit("updateSurname", value);
            },
        },
    },
};
</script>

<style>
h3 {
    width: 150px;
}

.account-block-wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 370px;
}

.account-block-input-wrap {
    display: flex;
    align-items: center;
    gap: 20px;
}

.input-with-note {
    margin-bottom: 20px;
}

.input-with-note::after {
    content: "* Не обязательно";
    position: absolute;
    bottom: -20px;
    left: 0;
    font-size: 12px;
    color: #a3a3a3;
}
</style>
