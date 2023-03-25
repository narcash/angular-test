import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeTestComponent } from './welcome-test.component';

describe('WelcomeTestComponent', () => {
  let component: WelcomeTestComponent;
  let fixture: ComponentFixture<WelcomeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
