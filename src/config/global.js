export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Aspectos legales de la educación',
  },
  menuPrincipal: {
    menu: [
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
        titulo: 'Ámbitos de la legislación educativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '¿Qué es la legislación educativa?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Ámbitos internacionales, nacionales y locales, de la legislación',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Declaración Universal de los Derechos Humanos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Contexto histórico de la Declaración Universal de los Derechos Humanos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Artículos claves relacionados con la educación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Entidades Internacionales referentes en educación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Objetivos de la UNESCO en el ámbito educativo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'El papel de UNICEF en la promoción de los derechos de la infancia',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Otras entidades internacionales que influyen en la educación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cámara de Diputados del H. Congreso de la Unión. (2016). <i>Ley General de Educación</i>. Cámara de Diputados del H. Congreso de la Unión. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/30824',
    },
    {
      referencia:
        'Rodríguez Vega, D. Hadad Larios, I. & Rodríguez Vega, D. (2013). <i>Ideas pedagógicas: análisis de la normatividad sobre Educación Preescolar en Colombia</i>. Universidad del Norte. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69916',
    },
    {
      referencia:
        'Montero, G. (2015). Legislación educativa en asuntos curriculares de la educación básica secundaria en Colombia (1991-2015). <i>REDHECS: Revista electrónica de Humanidades, Educación y Comunicación Social, 10</i>(20), 157-175. ',
      link: 'https://dialnet.unirioja.es/descarga/articulo/6844566.pdf',
    },
    {
      referencia:
        'Beltrán-Villamizar, Y. I., Martínez-Fuentes, Y. L. & Vargas-Beltrán, Á. S. (2015). El sistema educativo colombiano en el camino hacia la inclusión: Avances y retos. <i>Educación y educadores, 18</i>(1), 62-75. ',
      link:
        'http://www.scielo.org.co/scielo.php?pid=s0123-12942015000100004&script=sci_arttext',
    },
    {
      referencia:
        'de la Rosa Ruiz, D., Armentia, P. G. & de la Calle Maldonado, C. (2019). Educación para el desarrollo sostenible: el papel de la universidad en la Agenda 2030. <i>Revista Prisma Social</i>, (25), 179-202. ',
      link: 'https://revistaprismasocial.es/article/view/2709',
    },
    {
      referencia:
        'Gómez Isa, F. (2013). <i>La declaración universal de Derechos Humanos</i>. Publicaciones de la Universidad de Deusto. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/33997',
    },
    {
      referencia:
        'UNHCR ACNUR. (s.f.). <i>Declaración Universal de Derechos Humanos</i>. Adoptada y proclamada por la Asamblea General en su resolución 217 A (III), de 10 de diciembre de 1948. ',
      link: 'https://www.refworld.org/es/leg/resol/agonu/1948/es/11563',
    },
    {
      referencia:
        'Ravetllat Ballesté, I. (2016). <i>Érase una vez los derechos de la infancia</i>. LA LEY Soluciones Legales S.A. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/42651',
    },
    {
      referencia:
        'Gonzalez Sarmiento, O. (2012). La educación transforma. <i>Educación</i>, (18), 54-59. ',
      link:
        'https://www.researchgate.net/publication/338618329_La_educacion_transforma',
    },
    {
      referencia:
        'Vaillant, D. & Rodríguez, E. (2018). <i>Perspectivas de UNESCO y la OEI sobre la calidad de la educación</i>. ',
      link:
        'https://ie.ort.edu.uy/innovaportal/file/73018/I/perspectivas-de-unesco-y-oei-vaillant-rodriguez.pdf ',
    },
    {
      referencia:
        'Jiménez, W. A. A. (2012). La infancia como sujeto de derechos, según UNICEF. Aportes para una lectura crítica y de extrañamiento. <i>Pedagogía y Saberes</i>, (37), 89-101. ',
      link: 'https://www.redalyc.org/pdf/6140/614064827008.pdf ',
    },
    {
      referencia:
        'de Pisón, J. M. (2004). <i>El derecho a la educación y la enseñanza</i>. Dykinson. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/60824',
    },
    {
      referencia:
        'Función pública. (1991). CONSTITUCIÓN POLÍTICA DE LA REPÚBLICA DE COLOMBIA 1991. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125',
    },
    {
      referencia:
        'Lerma Carreño, C. A. (2007). <i>El derecho a la educación en Colombia</i>. Fundación Laboratorio de Políticas Públicas. ',
      link: 'https://flacso.redelivre.org.br/files/2012/08/837.pdf ',
    },
    {
      referencia:
        'Jaimes-Reyes, A. M. (2016). EL DERECHO A LA   EDUCACIÓN EN COLOMBIA, DESDE LA PERSPECTIVA DE LOS DERECHOS HUMANOS. ',
      link:
        'https://revistas.santototunja.edu.co/index.php/piuris/article/view/1144/1110',
    },
    {
      referencia:
        'Montero Caro, M. D. (2021). Educación, Gobierno Abierto y progreso: los Objetivos de Desarrollo Sostenible (ODS) en el ámbito educativo. Una visión crítica de la LOMLOE. <i>Revista de educación y derecho</i>, (23). ',
      link: 'https://revistes.ub.edu/index.php/RED/article/view/34443',
    },
    {
      referencia:
        'Alvarado, C. E. & Mendoza Bautista, C. C. (Dir.). (2011). <i>Modelos de pensamiento y gestión escolar mediada por el Proyecto Educativo Institucional (PEI)</i>. Centro Internacional de Educación Continua - Universidad Pedagógica Experimental Libertador. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/177588',
    },
    {
      referencia:
        'Decreto 1411 de 2022. Por medio del cual se subroga el Capítulo 2 del Título 3, Parte 3 del Libro 2 del Decreto 1075 de 2015 y se adiciona la Subsección 4 a este Capítulo, con lo cual se reglamenta la prestación del servicio de educación inicial en Colombia y se dictan otras disposiciones. Ministerio de Educación Nacional.  ',
      link:
        'https://www.mineducacion.gov.co/1780/articles-411579_archivo_pdf.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Ámbitos de la legislación',
      significado:
        'Niveles en los que se aplican las normas jurídicas: internacional, nacional y local.',
    },
    {
      termino: 'Constitución Política',
      significado:
        'Norma suprema que organiza el Estado colombiano y consagra derechos fundamentales, incluida la educación.',
    },
    {
      termino: 'Decreto 1075 del 2015',
      significado:
        'Compilación normativa que regula el sistema educativo colombiano, en todos sus niveles.',
    },
    {
      termino: 'Derecho a la educación',
      significado:
        'Garantía fundamental que reconoce el acceso libre, equitativo y de calidad, a la educación para todos.',
    },
    {
      termino: 'Derechos Humanos',
      significado:
        'Principios universales que protegen la dignidad y libertad de todas las personas.',
    },
    {
      termino: 'Educación',
      significado:
        'Proceso formativo que desarrolla habilidades, conocimientos y valores en individuos y comunidades.',
    },
    {
      termino: 'Entidades internacionales',
      significado:
        'Organismos como UNESCO o UNICEF que promueven políticas educativas y el respeto al derecho a la educación.',
    },
    {
      termino: 'Estado Social de Derecho',
      significado:
        'Modelo político en el que se garantiza la protección de derechos fundamentales mediante la Ley.',
    },
    {
      termino: 'Gestión educativa',
      significado:
        'Acciones organizadas para dirigir, planificar y mejorar el funcionamiento de las instituciones educativas.',
    },
    {
      termino: 'Jerarquía normativa',
      significado:
        'Organización de las leyes, según su nivel de autoridad, desde la Constitución, hasta normas locales.',
    },
    {
      termino: 'Legislación educativa',
      significado:
        'Conjunto de normas que regulan la organización y funcionamiento del sistema educativo.',
    },
    {
      termino: 'Marco legal',
      significado:
        'Conjunto de disposiciones legales que orientan una actividad, como la educación.',
    },
    {
      termino: 'Marco normativo',
      significado:
        'Estructura compuesta por leyes y decretos que regulan un campo específico, como el educativo.',
    },
    {
      termino: 'Normas internacionales',
      significado:
        'Instrumentos legales emitidos por organizaciones globales para proteger derechos universales, incluidos los educativos.',
    },
    {
      termino: 'Política pública',
      significado:
        'Estrategia del Estado para garantizar derechos y servicios sociales, incluida la educación.',
    },
    {
      termino: 'Pirámide de Kelsen',
      significado:
        'Representación jerárquica del orden jurídico, donde la Constitución es la norma suprema.',
    },
    {
      termino: 'Sistema educativo',
      significado:
        'Estructura institucional y normativa que garantiza la prestación del servicio educativo.',
    },
    {
      termino: 'UNESCO',
      significado:
        'Organización de la ONU que fomenta la cooperación internacional en educación, ciencia y cultura.',
    },
    {
      termino: 'UNICEF',
      significado:
        'Fondo de las Naciones Unidas que vela por los derechos de la infancia, incluida la educación.',
    },
  ],
}
