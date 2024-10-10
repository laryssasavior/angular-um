import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteUmComponent } from './teste-um.component';

describe('TesteUmComponent', () => {
  let component: TesteUmComponent;
  let fixture: ComponentFixture<TesteUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesteUmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TesteUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
