import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribersWatchtimeChartComponent } from './subscribers-watchtime-chart.component';

describe('SubscribersWatchtimeChartComponent', () => {
  let component: SubscribersWatchtimeChartComponent;
  let fixture: ComponentFixture<SubscribersWatchtimeChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribersWatchtimeChartComponent]
    });
    fixture = TestBed.createComponent(SubscribersWatchtimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
