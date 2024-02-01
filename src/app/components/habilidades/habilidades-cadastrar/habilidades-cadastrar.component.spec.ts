import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesCadastrarComponent } from './habilidades-cadastrar.component';

describe('HabilidadesCadastrarComponent', () => {
  let component: HabilidadesCadastrarComponent;
  let fixture: ComponentFixture<HabilidadesCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabilidadesCadastrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabilidadesCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
