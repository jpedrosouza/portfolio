<template>
  <div id="carouselExampleIndicators" class="carousel" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner" v-on:click="go_link('ouv-me')">
      <div class="carousel-item active">
        <img
          src="../assets/images/first_slide.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item" v-on:click="go_link('calculator')">
        <img
          src="../assets/images/second_slide.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item" v-on:click="go_link('letter')">
        <img
          src="../assets/images/third_slide.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Slider",
  methods: {
    go_link: function(destiny) {
      if (destiny == "ouv-me") {
        window.open("http://ouvme.com/");
      } else if (destiny == "calculator") {
        window.open(
          "https://uzaha.github.io/calculators/compoundInterestCalculator/"
        );
      } else if (destiny == 'letter') {
        window.open('https://paulohenr945.github.io/atividade-2/')
      }
    },
  },
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css");

.carousel-inner {
  cursor: pointer;
}
</style>
