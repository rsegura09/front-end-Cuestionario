import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcuestionarioComponent } from './crearcuestionario.component';

describe('CrearcuestionarioComponent', () => {
  let component: CrearcuestionarioComponent;
  let fixture: ComponentFixture<CrearcuestionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearcuestionarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearcuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
