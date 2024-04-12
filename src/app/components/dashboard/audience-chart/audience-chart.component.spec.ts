import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceChartComponent } from './audience-chart.component';

describe('AudienceChartComponent', () => {
  let component: AudienceChartComponent;
  let fixture: ComponentFixture<AudienceChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudienceChartComponent]
    });
    fixture = TestBed.createComponent(AudienceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
