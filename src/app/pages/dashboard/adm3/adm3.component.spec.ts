import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adm3Component } from './adm3.component';

describe('Adm3Component', () => {
  let component: Adm3Component;
  let fixture: ComponentFixture<Adm3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adm3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Adm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
