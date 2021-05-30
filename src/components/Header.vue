<template>
    <div class="header">
        <div class="images">
            <img src="../assets/images/logo.png" alt="Portfólio logo">
            <img class="github_icon" src="../assets/images/github.png" alt="Github logo">
        </div>
        <div class="buttons">
            <button class="menu_button"><span>PROJETOS</span></button>
            <button class="menu_button"><span>SOBRE NÓS</span></button>
            <button class="menu_button"><span>CONTATO</span></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    .header {
        width: 90%;
        padding-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: initial;
    }

    .images {
        width: 15%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .github_icon {
        width: 30px;
        height: 30px;
    }

    .buttons {
        width: 25%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .menu_button {
        width: 100px;
        height: 40px;
        background: transparent;
        border: none;
    }

    .menu_button :hover {
        background: rgba(0, 0, 0, 0.123);
    }
</style>