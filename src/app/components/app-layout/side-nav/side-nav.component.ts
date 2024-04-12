import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  items: { icon: string; title: string; link: string }[] = [
    { icon: 'team_dashboard', title: 'Dashboard', link: 'dashboard' },
    { icon: 'content_copy', title: 'Content', link: 'content' },
    { icon: 'pie_chart', title: 'Analytics', link: 'analytics' },
    { icon: 'chat', title: 'Comments', link: 'comments' },
  ];
}
