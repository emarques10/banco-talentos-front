import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasCadastrarComponent } from './vagas-cadastrar.component';

describe('VagasCadastrarComponent', () => {
  let component: VagasCadastrarComponent;
  let fixture: ComponentFixture<VagasCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VagasCadastrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VagasCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
