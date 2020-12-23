import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidPageComponent } from './covid-page.component';

describe('CovidPageComponent', () => {
  let component: CovidPageComponent;
  let fixture: ComponentFixture<CovidPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
