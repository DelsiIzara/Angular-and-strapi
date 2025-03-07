import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsArticle } from '../models/news';
import { ModalComponent } from '../modal/modal.component';
import { NewsServiceService } from '../news-service.service';
import { Router, RouterLink } from '@angular/router';
import { CreateNewsAppComponent } from '../create-news-app/create-news-app.component';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [FormsModule, RouterLink, ModalComponent, CreateNewsAppComponent],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {
newsArticles: any = [];
  news!: any;
  createModalOpen: boolean = false;

  constructor(
    private newsService: NewsServiceService,
    private router: Router
  ) {
    
  }

  ngOnInit() {
    this.getNews();
  }

  onReadMore(idDocument: any) {
    this.router.navigate(['/articles', idDocument]);
  }

  create() {
    this.createModalOpen = true;
  }

  createModalToggle(open: boolean) {
    this.createModalOpen = open;
  }

  getNews() {
    this.newsService.getNews().subscribe(p=>{
      console.log(p)
      this.newsArticles = p.data;
    })
    /*this.newsService.getLocalState().subscribe((latestNews) => {
      console.log(latestNews.data);
      this.newsArticles = latestNews.data;
    });*/
  }

  closeFromCreate(open: boolean) {
    this.createModalOpen = open;
  }
}
