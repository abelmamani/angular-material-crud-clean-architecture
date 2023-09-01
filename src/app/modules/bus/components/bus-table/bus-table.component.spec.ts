import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusTableComponent } from './bus-table.component';

describe('BusTableComponent', () => {
  let component: BusTableComponent;
  let fixture: ComponentFixture<BusTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BusTableComponent]
    });
    fixture = TestBed.createComponent(BusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
