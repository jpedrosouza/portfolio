<template>
    <div class="header">
        <div class="images">
            <img src="../assets/images/logo.png" alt="Portfólio logo">
            <img class="github_icon" src="../assets/images/github.png" alt="Github logo">
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
        width: 20%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .github_icon {
        width: 30px;
        height: 30px;
    }
</style>