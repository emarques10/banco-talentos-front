import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: 'vagas', loadChildren: () => import('./components/vagas/vagas.module').then(m => m.VagasModule) },
                    { path: 'talentos', loadChildren: () => import('./components/talentos/talentos.module').then(m => m.TalentosModule) },
                    { path: 'habilidades', loadChildren: () => import('./components/habilidades/habilidades.module').then(m => m.HabilidadesModule) },
                ]
            },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
