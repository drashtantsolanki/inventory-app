import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../Containers/header/header.component';
import { LayoutService } from '../Services/layout.service';
import { RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, HeaderComponent, RouterOutlet, MatListModule, MatIconModule, CdkAccordionModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  //@ts-ignore
  protected sideNav: MatSidenav
  showFiller = false;

  @ViewChild('sidenav', { static: false }) set sideNave(content: MatSidenav) {
    if (!content)
      return
    this.sideNav = content;
  }

  /**
   *
   */
  constructor(private layoutService: LayoutService) {
    layoutService.sideBarToggle.subscribe(() => {
      this.sideNav.toggle();
    });
  }

  men=["T-Shirts & Polos","Shirts","Jeans","Trousers","Shorts","Sports & Activewear"]
  women = ["Top Wear", "Kurtas, Kurtis & Tops", "Indianwear Dresses", "Bottom Wear", "Indianwear Sets", "Sarees & Blouses", "Dupattas", "Scarf & Stoles"]

}
