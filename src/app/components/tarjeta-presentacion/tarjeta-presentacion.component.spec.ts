import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPresentacionComponent } from './tarjeta-presentacion.component';

describe('TarjetaPresentacionComponent', () => {
  let component: TarjetaPresentacionComponent;
  let fixture: ComponentFixture<TarjetaPresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaPresentacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
