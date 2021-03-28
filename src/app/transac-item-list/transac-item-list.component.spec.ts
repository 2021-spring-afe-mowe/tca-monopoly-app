import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacItemListComponent } from './transac-item-list.component';

describe('TransacItemListComponent', () => {
  let component: TransacItemListComponent;
  let fixture: ComponentFixture<TransacItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransacItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
