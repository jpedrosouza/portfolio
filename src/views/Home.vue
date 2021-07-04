<template>
  <div class="home">
    <Header />

    <div class="welcome-container">
      <div class="welcome_message">
        <span class="message_welcome"
          >Bem-vindo <span class="non_negrite">ao</span></span
        >
        <span class="message_below">nosso portfolio</span>
      </div>
      <div class="photos">
        <img
          class="author_image"
          src="../assets/images/pedro.png"
          alt="Imagem de Pedro Henrique"
        />
        <img
          class="author_image"
          src="../assets/images/joao.png"
          alt="Imagem de João Pedro"
        />
        <img
          class="author_image"
          src="../assets/images/henrique.png"
          alt="Imagem de Henrique"
        />
        <img
          class="author_image"
          src="../assets/images/vinicius.jpg"
          alt="Imagem default"
        />
        <img
          class="author_image"
          src="../assets/images/emanuel.jpg"
          alt="Imagem default"
        />
        <img
          class="author_image"
          src="../assets/images/mauricio.png"
          alt="Imagem default"
        />
      </div>
    </div>

    <img
      class="down_icon"
      src="../assets/icons/chevron-down.svg"
      alt="Mais conteúdo abaixo"
    />

    <Slider class="projects_slider" />

    <div class="about_us">
      <span class="about_title">Sobre nós</span>

      <p class="about_text">
        Somos um grupo de estudantes da Universidade do Vale do Itajaí |
        Univali, cursando Análise e Desenvolvimento de Sistemas. Reunimos nesse
        portfólio alguns de nossos projetos.
      </p>
    </div>

    <div class="contact">
      <span class="contact_title">
        Contato
      </span>

      <div class="users_contacts">
        <div class="contact_container">
          <div class="image_buttons">
            <img
              class="author_image"
              src="../assets/images/pedro.png"
              alt=""
              srcset=""
            />
            <div class="buttons">
              <img
                class="github_social_icon"
                src="../assets/icons/github.svg"
                alt="GitHub"
              />
            </div>
          </div>
          <div class="email">
            <img src="../assets/icons/mail.svg" alt="" srcset="" />
            <span>psouza.1650@gmail.com</span>
          </div>
        </div>

        <div class="contact_container">
          <div class="image_buttons">
            <img
              class="author_image"
              src="../assets/images/joao.png"
              alt=""
              srcset=""
            />
            <div class="buttons">
              <img
                class="github_social_icon"
                src="../assets/icons/github.svg"
                alt="GitHub"
              />
            </div>
          </div>
          <div class="email">
            <img src="../assets/icons/mail.svg" alt="" srcset="" />
            <span>jsouza.1650@gmail.com</span>
          </div>
        </div>

        <div class="contact_container">
          <div class="image_buttons">
            <img
              class="author_image"
              src="../assets/images/henrique.png"
              alt=""
              srcset=""
            />
            <div class="buttons">
              <img
                class="github_social_icon"
                src="../assets/icons/github.svg"
                alt="GitHub"
              />
            </div>
          </div>
          <div class="email">
            <img src="../assets/icons/mail.svg" alt="" srcset="" />
            <span>Paulo.Henrique.tjk@gmail.com</span>
          </div>
        </div>

        <div class="contact_container">
          <div class="image_buttons">
            <img
              class="author_image"
              src="../assets/images/emanuel.jpg"
              alt=""
              srcset=""
            />
            <div class="buttons">
              <img
                class="github_social_icon"
                src="../assets/icons/github.svg"
                alt="GitHub"
              />
            </div>
          </div>
          <div class="email">
            <img src="../assets/icons/mail.svg" alt="" srcset="" />
            <span>emanuelricardokichel@hotmail.com</span>
          </div>
        </div>

        <div class="contact_container">
          <div class="image_buttons">
            <img
              class="author_image"
              src="../assets/images/vinicius.jpg"
              alt=""
              srcset=""
            />
            <div class="buttons">
              <img
                class="github_social_icon"
                src="../assets/icons/github.svg"
                alt="GitHub"
              />
            </div>
          </div>
          <div class="email">
            <img src="../assets/icons/mail.svg" alt="" srcset="" />
            <span>viniaviana@gmail.com</span>
          </div>
        </div>

        <div class="contact_container">
          <div class="image_buttons">
            <img
              class="author_image"
              src="../assets/images/mauricio.png"
              alt=""
              srcset=""
            />
            <div class="buttons">
              <img
                class="github_social_icon"
                src="../assets/icons/github.svg"
                alt="GitHub"
              />
            </div>
          </div>
          <div class="email">
            <img src="../assets/icons/mail.svg" alt="" srcset="" />
            <span>mauriciocasanova@yahoo.com.br</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Slider from "../components/Slider";

export default {
  name: "Home",
  components: {
    Slider,
    Header,
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.welcome-container {
  width: 60%;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 40px;
}

.welcome_message {
  width: 35%;
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
  width: 30%;
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

.projects_slider {
  width: 50%;
  padding-top: 30px;
}

.down_icon {
  padding-bottom: 40px;
}

.about_us {
  width: 40%;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about_title {
  padding-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
}

.about_text {
  text-align: center;
  font-size: 18px;
}

.contact {
  width: 90%;
  align-items: center;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
}

.users_contacts {
  width: 70%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.contact_container {
  width: 280px;
  padding-left: 50px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
}

.contact_title {
  padding-bottom: 20px;
  font-weight: bold;
  font-size: 30px;
}

.image_buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
}

.github_social_icon {
  padding-left: 20px;
}

.email {
  width: 230px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
