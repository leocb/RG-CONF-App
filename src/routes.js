import Home from './assets/vue/pages/home.vue';
import Horarios from './assets/vue/pages/horarios.vue';
import Lineup from './assets/vue/pages/lineup.vue';
// import Login from './assets/vue/pages/login.vue';
import Musicas from './assets/vue/pages/musicas.vue';
import Notificacoes from './assets/vue/pages/notificacoes.vue';
// import Perfil from './assets/vue/pages/perfil.vue';
import Sobre from './assets/vue/pages/sobre.vue';

export default [{
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/horarios/',
    component: Horarios,
    name: 'Horarios'
  },
  {
    path: '/lineup/:pag',
    component: Lineup,
    name: 'LINE UP'
  },
  {
    path: ['/musicas/', '/musicas/:id'],
    component: Musicas,
    name: 'Musicas'
  },
  {
    path: '/Sobre/',
    component: Sobre
  },
  {
    path: ['/notificacoes/', '/notificacoes/:id/'],
    component: Notificacoes
  }
]
