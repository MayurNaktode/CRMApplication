import { Routes } from "@angular/router";

export const AUTH_ROUTES: Routes = [
    {
        path: 'login',
        loadComponent: () => import("./login/login.component").then(m => m.LoginComponent)
    },
    {
        path: "register",
        loadComponent: () => import("./registration/registration.component").then(m => m.RegistrationComponent)
    }
];