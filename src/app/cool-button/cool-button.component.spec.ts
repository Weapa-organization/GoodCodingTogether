import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolButtonComponent } from './cool-button.component';

describe('CoolButtonComponent', () => {
  let component: CoolButtonComponent;
  let fixture: ComponentFixture<CoolButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
