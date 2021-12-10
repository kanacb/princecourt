import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingtimeComponent } from './waitingtime.component';

describe('WaitingtimeComponent', () => {
  let component: WaitingtimeComponent;
  let fixture: ComponentFixture<WaitingtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingtimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
