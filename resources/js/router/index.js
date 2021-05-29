export const routes = [
    {
        path: "",
        component: () =>
            import(/* webpackChunkName: "Theme" */ "../components/theme/Theme.vue"),
        children: [
            {
                path: "/",
                name: "Welcome",
                component: () =>
                    import(/* webpackChunkName: "Welcome" */ "../pages/Welcome.vue"),
                meta: {
                    breadcrumb: [{
                        name: "Welcome",
                        icon: "bx bx-home"
                    }],
                },
            },
        ]
    },
]
