import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasBuscarComponent } from './vagas-buscar.component';

describe('VagasBuscarComponent', () => {
  let component: VagasBuscarComponent;
  let fixture: ComponentFixture<VagasBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VagasBuscarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VagasBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
