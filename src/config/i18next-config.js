import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
        es: {
            translation: {
                nav: {
                'aboutme': 'Sobre mi',
                'services': 'Servicios',
                'proyects': 'Proyectos',
                'contact' : 'Contacto'
                },
                form: {
                    'hi':'Hola!',
                    'name': 'Me llamo, Jonathan Darakdjian',
                    'dev': 'Desarrollador'
                },
                skills:{
                    'name': 'Soy Jonathan Darakdjian, Desarrollador Web',
                    'paragraph' : 'Soy  desarrollador de software con experiencia en la creación de sitios web y aplicaciones web. Me especializo en JavaScript tengo experiencia trabajando con React.',
                    'paragraph-2' : 'Siempre busco mejorar mis habilidades, seguir creciendo profesionalmente para poder hacer aportes valiosos en el grupo de trabajo del que formo parte. Por lo tanto, utilizo el  trabajo de desarrollo moderno para aumentar la productividad y mejorar la comunicación dentro de nuestro equipo de desarrollo.',
                    'download': 'Descargar CV',
                    'skills': 'Mis habilidades'
                },
                service:{
                    'services':'Servicios',
                    'services-p': 'Servicios que ofrezco a mis clientes',
                    'responsive': 'Totalmente Responsivo',
                    'responsive-p': 'Su sitio se mostrará correctamente en cualquier dispositivo, incluidas computadoras de escritorio, tabletas y teléfonos móviles.',
                    'design': 'Diseño creativo',
                    'design-p': 'Un diseño web atractivo ayuda a mantener sus clientes potenciales en su sitio, que es la cara digital de su negocio.',
                    'development': 'Desarrollo',
                    'development-p': 'Conozco la importancia del diseño web y puedo ayudarte a crear un sitio web que te encantará.',
                    'social': 'Integración de redes sociales',
                    'social-p':'Existen muchas plataformas sociales, y debe integrar la promoción de su citio web en ellas.',
                    'performance-p' :'Retener a los usuarios es crucial para mejorar las visualizaciones. Los sitios de alto rendimiento atraen y retienen a los usuarios.',
                    'seo':'Optimizaré su sitio con una estrategia inteligente de optimización de motores de búsqueda para generar clientes potenciales.'
                },
                cards:{
                    'portfolio':'Proyectos',
                    'portfolio-p':'Aquí puedes ver los proyectos en los que he trabajado.',
                    'quoter':'Cotizador',
                    'spending':'Gasto Semanal',
                    'turn':'App de Peliculas',
                },
                contact:{
                    'contact':'Contacto',
                    'contact-p':'Contáctame si quieres que trabajemos juntos.',
                    'mail':'Escribeme',
                    'github':'Sígueme',
                    'linkedin':'Contáctame'
                }
            }
        },
        en : {
            translation: {
                nav:{
                'aboutme': 'About me',
                'services': 'Service',
                'proyects': 'Proyects',
                'contact' : 'Contact'
                },
                form: {
                    'hi':'Hi!',
                    'name': 'I’m Jonathan, Darakdjian',
                    'dev': 'Software Developer'
                },
                skills: {
                    'name': 'I’m Jonathan Darakdjian, Web Developer',
                    'paragraph' : 'I am a software developer with experience building websites and web applications. I specialize in JavaScript, and have experience working with React.',
                    'paragraph-2' : ' I am always seeking to improve my skills and continue growing professionally in order to make valuable contributions at the working group I am part of. Therefore I use the modern development workflow to increase productivity and improve communication inside our development team.',
                    'download': 'Download Resume',
                    'skills': 'My skills'
                },
                service:{
                    'services':'Services',
                    'services-p': 'Services I offer to my clients',
                    'responsive': 'Fully Responsive',
                    'responsive-p': 'Our site is fully responsive, displaying properly on any device, including desktop computers, tablets, and mobile phones.',
                    'design': 'Creative Design',
                    'design-p': 'A good and attractive web design helps you keep your leads on your site, which is the digital face of your business.',
                    'development': 'Development',
                    'development-p': 'I offer web development services that will help you create a website you’ll love.',
                    'social': 'Social Media integration',
                    'social-p':'There are a lot of social platforms out there, and you should promote your presence on them on your website.',
                    'performance-p' :'Retaining users is crucial to improving conversions. High-performing sites engage and retain users.',
                    'seo':'I will optimize your site with intelligent Search Engine Optimization strategy to generate leads.'
                },
                cards:{
                    'portfolio':'Portfolio',
                    'portfolio-p':'Here you can see the projects I have worked on.',
                    'quoter':'Quoter',
                    'spending':'Weekly expense',
                    'turn':'Movie App'
                },
                contact:{
                    'contact':'Contact',
                    'contact-p':'Contact me if you want us to work together.',
                    'mail':'Mail Me',
                    'github':'Follow Me',
                    'linkedin':'Contact Me'
                }
            }
        }
    }

})