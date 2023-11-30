import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnredesComponent } from './btnredes.component';

describe('BtnredesComponent', () => {
  let component: BtnredesComponent;
  let fixture: ComponentFixture<BtnredesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnredesComponent]
    });
    fixture = TestBed.createComponent(BtnredesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
