import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamResultsOverviewComponent } from './team-results-overview.component';

describe('TeamResultsOverviewComponent', () => {
  let component: TeamResultsOverviewComponent;
  let fixture: ComponentFixture<TeamResultsOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamResultsOverviewComponent]
    });
    fixture = TestBed.createComponent(TeamResultsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
