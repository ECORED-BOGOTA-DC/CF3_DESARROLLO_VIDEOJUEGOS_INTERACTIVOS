<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #fff")
          i.fas.fa-info
      h1 Introducción
    figure.mb-5(data-aos="fade-right")
      img(src="@/assets/curso/intro/img_intro.jpg", style="width: 850px").m-auto
    p.mb-0(data-aos="fade-left")
      | Después de tener un modelo 3D y si se quiere animarlo, una de las técnicas es la incorporación de huesos para que las mallas de los modelos se adapten al elemento, gracias al 
      i skin 
      | y los pesos; después de este tema, se presentan los 12 principios de la animación y las más usadas en el segmento de los videojuegos. A su vez se verán algunos conceptos del sonido, entre ellos, se analizará el sonido de ambientación y efectos de sonidos en los juegos. Por último, se verán tipos de exportación, de audio, objetos 3D y animaciones.
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
