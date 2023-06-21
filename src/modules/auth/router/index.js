export default {
    name: 'auth',
    component: () => import(/* webpackChunkName: "loginLayout" */ '../layouts/LoginLayout.vue'),
    children: [
        {
            name: 'SigninView',
            path: 'signin',
            component: () => import(/* webpackChunkName: "signinView" */ '../views/SigninView.vue'),
        },
        {
            name: 'SignupView',
            path: 'signup',
            component: () => import(/* webpackChunkName: "signupView" */ '../views/SignupView.vue'),
        },
        {
            name: 'ForgotPassView',
            path: 'forgotpass',
            component: () => import(/* webpackChunkName: "forgotPassView" */ '../views/ForgotPassView.vue'),
        },
        {
            name: 'ResetPassView',
            path: 'resetpass/:id',
            component: () => import(/* webpackChunkName: "resetPassView" */ '../views/ResetPassView.vue'),
        },
        {
            name: 'ActivateMailView',
            path: 'activate/:token',
            component: () => import(/* webpackChunkName: "activateMailView" */ '../views/ActivateMailView.vue'),
        }
    ]
}