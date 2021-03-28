import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacItemCardComponent } from './transac-item-card.component';

describe('TransacItemCardComponent', () => {
  let component: TransacItemCardComponent;
  let fixture: ComponentFixture<TransacItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransacItemCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
