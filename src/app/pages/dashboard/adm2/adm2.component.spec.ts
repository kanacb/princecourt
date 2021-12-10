import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adm2Component } from './adm2.component';

describe('Adm2Component', () => {
  let component: Adm2Component;
  let fixture: ComponentFixture<Adm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Adm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
