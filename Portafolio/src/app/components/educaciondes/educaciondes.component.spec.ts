import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducaciondesComponent } from './educaciondes.component';

describe('EducaciondesComponent', () => {
  let component: EducaciondesComponent;
  let fixture: ComponentFixture<EducaciondesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducaciondesComponent]
    });
    fixture = TestBed.createComponent(EducaciondesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
