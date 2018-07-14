import index from './components/index.vue';

export default {
    routes: [{
        path: '/',
        component: index
    }, {
        path: '/index',
        component: index
    // }, {
    //     path: '/async',
    //     component: () =>
    //         import ( /* webpackChunkName: "async" */ './components/async.vue')
    }, {
        path: '/button',
        component: (resolve) => require(['./components/button.vue'], resolve)
    }]
};
