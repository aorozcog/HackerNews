import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerNewsComponent } from './news/components/ver-news/ver-news.component';
import { PageNotFoundComponent } from './news/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: VerNewsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
