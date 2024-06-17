import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankUpageComponent } from './thank-upage.component';

describe('ThankUpageComponent', () => {
  let component: ThankUpageComponent;
  let fixture: ComponentFixture<ThankUpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThankUpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThankUpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
