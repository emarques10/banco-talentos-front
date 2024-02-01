import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentosBuscarComponent } from './talentos-buscar.component';

describe('TalentosBuscarComponent', () => {
  let component: TalentosBuscarComponent;
  let fixture: ComponentFixture<TalentosBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentosBuscarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalentosBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
