import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificProDisplayComponent } from './specific-pro-display.component';

describe('SpecificProDisplayComponent', () => {
  let component: SpecificProDisplayComponent;
  let fixture: ComponentFixture<SpecificProDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificProDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificProDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
