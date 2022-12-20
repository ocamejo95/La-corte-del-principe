import {Component, HostListener, Input, OnInit} from '@angular/core';
import {InfoPagesService} from '../../../services/info-pages.service';
import {InfoPages} from '../../../models/info-pages';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public year: number = new Date().getFullYear();
  public info: InfoPages = {};

  constructor(private infoPagesService: InfoPagesService) {
  }

  @Input() layout: number | string;
  @Input() logo: number | string;

  ngOnInit(): void {
    this.getInfoPage();
  }

  ScrolltoTop() {
    const navbar = document.getElementById('backToTop');
    if (document.body.scrollTop >= 300 || document.documentElement.scrollTop > 300) {
      navbar.classList.add('active');
    } else {
      navbar.classList.remove('active');
    }
  }

  isShow: boolean;
  topPosToStartShowing = 300;

  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  getInfoPage(): any {
    this.infoPagesService.getInfoPage()
      .subscribe((response: InfoPages) => {
        this.info = response;
      });
  }

}
