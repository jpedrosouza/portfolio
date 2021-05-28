<template>
  <div class="home">
    <div class="welcome-container">
      <div class="welcome_message">
         <span class="message_welcome">Bem-vindo <span class="non_negrite">ao</span></span>
         <span class="message_below">nosso portfolio</span>
      </div>
      <div class="photos">
        <img class="author_image" src="../assets/images/pedro.png" alt="Imagem de Pedro Henrique">
        <img class="author_image" src="../assets/images/joao.png" alt="Imagem de João Pedro">
        <img class="author_image" src="../assets/images/henrique.png" alt="Imagem de Henrique">
        <img class="author_image" src="../assets/images/default_image.png" alt="Imagem default">
        <img class="author_image" src="../assets/images/default_image.png" alt="Imagem default">
        <img class="author_image" src="../assets/images/default_image.png" alt="Imagem default">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style>
    .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .welcome-container {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 40px;

  }

  .welcome_message {
    width: 40%;
    display: flex;
    flex-direction: column;
    font-weight: 700;
  }

  .non_negrite {
    font-weight: 300;
  }

  .message_below {
    font-weight: 300;
  }

  .photos {
    width: 47%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .author_image {
    width: 100px;
    height: 100px;
    padding-bottom: 10px;
  }
</style>