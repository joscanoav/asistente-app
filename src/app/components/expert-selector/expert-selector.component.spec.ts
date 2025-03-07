import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertSelectorComponent } from './expert-selector.component';

describe('ExpertSelectorComponent', () => {
  let component: ExpertSelectorComponent;
  let fixture: ComponentFixture<ExpertSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
