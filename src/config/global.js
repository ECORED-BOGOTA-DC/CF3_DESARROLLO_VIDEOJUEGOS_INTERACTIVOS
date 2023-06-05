export default {
  global: {
    componenteFormativo: 'Animación y edición de sonidos',
    descripcionCurso:
      'Se explican conceptos básicos de <em>rigging</em>, animación y sonido.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<i>Rigging</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Introducción al <i>rigging</i>',
            hash: 't1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Creación de esqueleto y sistemas de control',
            hash: 't1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '<i>Skinning</i>',
            hash: 't1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Curvas de control',
            hash: 't1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: '<em>Rig</em> facial y <i>blendshapes</i>',
            hash: 't1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Ajustes finales y <i>scripting</i>',
            hash: 't1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: '<i>Addon riggify</i>',
            hash: 't1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: '<i>Autorig</i> con Mixamo ',
            hash: 't1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: '<i>Skinning</i> y pesos',
            hash: 't1_9',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Animación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Historia de la animación',
            hash: 't2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas de animación',
            hash: 't2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Principios de animación',
            hash: 't2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Animaciones básicas',
            hash: 't2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fundamentos básicos de sonido',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Características del sonido',
            hash: 't3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'El sonido en los videojuegos',
            hash: 't3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Formatos de sonido',
            hash: 't3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Exportación objetos y sonidos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Animaciones básicas (<em>attack</em>)',
      referencia:
        'Games, T. f. (2017). <em>Skeleton Attack Animations Pack</em>.',
      tipo: 'Video',
      link: 'https://youtu.be/D70hSa5zA78',
    },
    {
      tema: '<em>Artnatomya</em>',
      referencia: 'Artnatomy. (2019). <em>Home</em>.',
      tipo: 'Aplicación web',
      link: 'http://www.artnatomia.net/uk/artnatomya.html',
    },
    {
      tema: 'Descarga de sonidos gratuitos',
      referencia: 'Freesound. (2021). <em>Freesound</em>.',
      tipo: 'Sitio web',
      link: 'https://freesound.org',
    },
    {
      tema: 'Escardó',
      referencia:
        'Escardo Club de Animación 3d. (2014). <em>Tutorial de animación 3D: Brazos IK FK en Personajes / Rigs en Maya, Blender, 3DsMax, C4D</em>.',
      tipo: 'Video',
      link: 'https://youtu.be/oEHBqiq97jA',
    },
    {
      tema: '<em>Stop staring: facial modeling and animation done rigth</em>',
      referencia:
        'Osipa, J. (2021). <em>Stop staring: facial modeling and animation done rigth. Serious Skill</em>.',
      tipo: 'Sitio web',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000062162',
    },
    {
      tema: 'Tutorial <em>Audacity</em>',
      referencia:
        'Instituto Cardan. (2016). <em>Cómo funciona Audacity (software gratis). Tutorial español</em>.',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=ge6s3ZSO26U',
    },
    {
      tema: 'Práctica con archivos prediseñados',
      referencia: 'SENA. (2021). <em>Actividades. SENA</em>.',
      tipo: 'Documento',
      descarga: '/downloads/CF003_Actividad_1.zip',
    },
  ],
  glosario: [
    {
      termino: 'Atmósfera',
      significado:
        'ambiente visual y sonoro creado para un videojuego, de tal manera que el jugador se sienta inmerso en el juego.',
    },
    {
      termino: 'Blender',
      significado:
        'programa multiplataforma de software libre (gratis) utilizado para el modelado, texturizado, renderizado, animación, edición y diseño de objetos tridimensionales.',
    },
    {
      termino: 'Decibeles',
      significado:
        'unidad física utilizada para medir la intensidad de un sonido, presión y tensión sonora.',
    },
    {
      termino: 'Frame',
      significado:
        'secuencia ordenada de imágenes estáticas que logran crear la ilusión de movimiento.',
    },
    {
      termino: 'Hertzios o Hertz ',
      significado:
        'unidad utilizada para medir la frecuencia de unas ondas y oscilaciones electromagnéticas.',
    },
    {
      termino: '<em>Loops</em>',
      significado:
        'repeticiones que se pueden dar de un mismo elemento animado. Ejemplo, un hámster corriendo en una jaula.',
    },
    {
      termino: 'Perceptor',
      significado:
        'mecanismo que poseen los animales o humanos para captar información por medio de sus sentidos ya sea a través de su visión, audición, tacto, gusto u olfato.',
    },
    {
      termino: '<em>Rigging</em>',
      significado:
        'proceso de construir una estructura esquelética y articulada, para que un personaje u objeto se mueva correctamente al animarlo.',
    },
    {
      termino: '<em>Skinning</em>',
      significado:
        'proceso de aplicación de una malla o piel, a la estructura metálica (<em>rigging</em>) del objeto o personaje, de manera que permita una correcta deformación al seguir el movimiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Animacam. (2016). Los inicios de la animación: Émile Reynaud. Animacam',
      link: 'http://animacam.tv/los-inicios-de-la-animacion-emile-reynaud/',
    },
    {
      referencia: 'Bitable. (2020). What is Motion Graphics? Bitable.',
      link: 'https://biteable.com/blog/what-is-motion-graphics/',
    },
    {
      referencia:
        'Bloop Animation Studios LLC. (2020). The 5 Types of Animation. Bloop Animation Studios LLC.',
      link: 'https://www.bloopanimation.com/types-of-animation/',
    },
    {
      referencia:
        'Franch, A., T. (2014). Introducción al diseño de los videojuegos. Universitat Oberta de Catalunya (UOC).',
    },
    {
      referencia:
        'Gutman, D., y Risso, H. (2013). El sonido: conceptos básicos. CePIA. ',
    },
    {
      referencia:
        'Laybourne. (1998). The Animation Book: a Complete Guide to Animated Filmmaking - From Flip-books to Sound Cartoons to 3-D Animation. Three Rivers Press.',
    },
    {
      referencia:
        'León, G., D., y Acero, O., H. (2020). Fundamentos de sonido: conociendo el sonido y sus aplicaciones. Poligran.',
      link: '',
    },
    {
      referencia:
        'Oh my Disney. (2016). The 12 Principles of Animation as Illustrated Through Disney and Disney Pixar Films. Oh my Disney.',
      link: '',
    },
    {
      referencia:
        'Osipa, J. (2010). Stop Staring, Facial Modeling and Animation Done Right. Wiley Publishing, Inc.',
    },
    {
      referencia:
        'Pluralsight. (2014). Understanding Skinning - The Vital Step for Any Rigging Project. Pluralsight.',
      link:
        'https://www.pluralsight.com/blog/film-games/understanding-skinning-vital-step-rigging-project ',
    },
    {
      referencia: 'Selby, A. (2013). La animación. Editorial Blume.',
    },
    {
      referencia:
        'Thomas, F., y Johnston, O. (1981). The Ilussion of Life Disney Animation. Disney Editions.',
    },
    {
      referencia:
        'Williams, R. (2009). The animator’s Surviva Kit. Faber and Faber.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricía Aristizábal Gutiérrez',
          cargo: 'Líder ecosistema de recursos educativos digitales (RED)',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'John Alexander García Ángel',
          cargo: 'Experto temático',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Oscar Andrés Martín Moreno',
          cargo: 'Experto temático',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Fabián Andrés Gómez Pico',
          cargo: 'Experto temático 3D',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Johnier Felipe Perafán Ledezma',
          cargo: 'Experto temático 3D',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Luz Aida Quintero Velásquez',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Oscar Absalón Guevara',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Centro para la Industria de las Artes Gráficas - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuadora instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodólogo para la formación virtual - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñador de contenidos digitales - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Zuleidy Maria Ruiz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y ServiciosRegional Tolima',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animador y productor multimedia - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador full-stack - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jhana Johanna Bustillo Ardila',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Perez Manchego',
          cargo: 'Validadora de recursos digitales - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validador de recursos digitales - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
