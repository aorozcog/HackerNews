import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/news/services/api.service';
import { News } from 'src/app/news/models/news';

@Component({
  selector: 'app-ver-news',
  templateUrl: './ver-news.component.html',
  styleUrls: ['./ver-news.component.css']
})
export class VerNewsComponent implements OnInit {

  newsIdList: any;
  fullNewsList: News[] = [];
  dataSource: MatTableDataSource<News> | undefined;
  pmin = 0;
  pmax = 50;
  pageEvent!: PageEvent;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadStories([0,500]);
    this.dataSource = new MatTableDataSource(this.fullNewsList);
    this.dataSource.paginator = this.paginator;
  }

  //User clicks on the paginator
  loadPage(event: PageEvent) {
    this.pmin = event.pageIndex * event.pageSize;
    this.pmax = this.pmin + event.pageSize;
  }

  loadStories(range: number[]) {
    //Get top news and put them on a list
    this.apiService.getTopNews().subscribe((data: any) => {
      this.newsIdList = data;
      this.newsIdList = this.newsIdList;

      //Iterate newsIdList and get the stories
      this.newsIdList.forEach((newsId: number) => {
        this.apiService.getStoryById(newsId).subscribe((data: any) => {
          this.fullNewsList.push(data);
        });
      });
    });
  }

}
