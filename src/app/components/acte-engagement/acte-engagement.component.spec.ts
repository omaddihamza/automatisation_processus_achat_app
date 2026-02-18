import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActeEngagementComponent } from './acte-engagement.component';

describe('ActeEngagementComponent', () => {
  let component: ActeEngagementComponent;
  let fixture: ComponentFixture<ActeEngagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActeEngagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActeEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
