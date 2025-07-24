import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrrusel2Component } from './carrrusel2.component';

describe('Carrrusel2Component', () => {
  let component: Carrrusel2Component;
  let fixture: ComponentFixture<Carrrusel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carrrusel2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carrrusel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
