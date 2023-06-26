<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span(style="color: #fff") 4
        h1 Exportación de objetos
    .row.justify-content-center
      .col-lg-10.mb-4 
        .cajon.color-acento-contenido.BG03.p-4.mb-4(data-aos="fade-right")
          p.mb-0 Cómo llevar un modelo Blender a Unity, y #[em tips] para tener en cuenta para llevar todo en orden. Aquí se indican los pasos a seguir:
    .row.justify-content-center
      .col-lg-11.mb-5
        SlyderA(data-aos="fade-left")
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 38]
                p.mb-0 Archivo exportar
              figure.mb-4
                img(src='@/assets/curso/tema4/img01.png', alt='Texto que describa la imagen')
              p Seleccionar el objeto a exportar, luego ir a #[em File - Export - FBX]. Se exporta en la carpeta donde se usará.
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 39]
                p.mb-0 Selected Objects
              figure.mb-4
                img(src='@/assets/curso/tema4/img02.png', alt='Texto que describa la imagen')
              p Se escoge la casilla Selected Objects, si la intención es exportar solo lo que se tiene seleccionado en el escenario. Esto se hace muy útil pues en ocasiones hay en el escenario objetos ocultos o luces y planos, que, si no se activa la casilla mencionada, se exportan todos esos elementos que no se necesitan.
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 40]
                p.mb-0 Preset
              figure.mb-4
                img(src='@/assets/curso/tema4/img03.png', alt='Preset')
              p Para dejar guardada esta configuración para futuros proyectos, se puede crear el Preset en la exportación y asignarle un nombre.
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 41]
                p.mb-0 Path Mode
              figure.mb-4
                img(src='@/assets/curso/tema4/img04.jpg', alt='Path mode')
              p Si se quieren exportar las texturas junto al modelo, lo que se debe hacer es el Path Mode cambiarlo a Copy y activar Embed Textures.
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 42]
                p.mb-0 Inspector Extract
              figure.mb-4
                img(src='@/assets/curso/tema4/img05.png', alt='Inspector Extract')
              p Luego de ello, en Unity, una vez importado el personaje, se le da en #[em Inspector - Extract textures, Extract Materiales], que abrirá una ruta donde almacenar los materiales que, una vez guardados, se aplicarán automáticamente al modelo.
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 43]
                p.mb-0 Import
              figure.mb-4
                img(src='@/assets/curso/tema4/img06.png', alt='Inmport')
              p Ahora se puede probar cómo el modelo queda en Unity, de la siguiente manera: se abre la pestaña #[em Assets – Import New Asset], se clica y busca el archivo en el computador.
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 44]
                p.mb-0 Malla no sólida
              figure.mb-4
                img(src='@/assets/curso/tema4/img07.png', alt='Malla no sólida')
              p Se puede observar que hay un problema en la malla del personaje, en su capucha en la parte interna no se está leyendo que haya malla sólida, para corregirlo se vuelve a Blender.
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 45]
                p.mb-0 Solidify
              figure.mb-4
                img(src='@/assets/curso/tema4/img08.png', alt='Solidify')
              p En el modo de edición, se selecciona la malla y se agrega el modificador solidificar.
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 46]
                p.mb-0 Import FBX
              figure.mb-4
                img(src='@/assets/curso/tema4/img09.png', alt='Import Fbx')
              p Para finalizar, se vuelve a exportar el #[i FBX] a Unity y ya se habrá corregido la lectura de la malla.
    .BG03.p-4(data-aos="fade-right")
      p.mb-4 Para finalizar, se puede realizar la práctica con archivos prediseñados de animación y movimiento de personajes utilizando los programas Blender y Mixamo:
      .row.justify-content-center
        .col-md-6
          a.anexo(:href="obtenerLink('downloads/CF003_Actividad_1.zip')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-zip.svg")
            .anexo__texto
              p Anexo. Programas Blender y Mixano - Actividad

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
