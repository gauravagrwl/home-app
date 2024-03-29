import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerHomeComponent } from './tracker-home.component';

describe('TrackerHomeComponent', () => {
  let component: TrackerHomeComponent;
  let fixture: ComponentFixture<TrackerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackerHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
