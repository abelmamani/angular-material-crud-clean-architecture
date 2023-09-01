import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusDeleteDialogComponent } from './bus-delete-dialog.component';

describe('BusDeleteDialogComponent', () => {
  let component: BusDeleteDialogComponent;
  let fixture: ComponentFixture<BusDeleteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusDeleteDialogComponent]
    });
    fixture = TestBed.createComponent(BusDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
