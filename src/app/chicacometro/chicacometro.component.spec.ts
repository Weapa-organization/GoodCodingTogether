import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChicacometroComponent } from './chicacometro.component';

describe('ChicacometroComponent', () => {
  let component: ChicacometroComponent;
  let fixture: ComponentFixture<ChicacometroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChicacometroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChicacometroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
