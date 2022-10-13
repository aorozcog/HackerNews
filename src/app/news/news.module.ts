import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerNewsComponent } from 'src/app/news/components/ver-news/ver-news.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [VerNewsComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule
  ],
  exports:
  [
    VerNewsComponent,
    PageNotFoundComponent
  ]
})
export class NewsModule { }
