import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoireComponent } from './foire.component';

describe('FoireComponent', () => {
  let component: FoireComponent;
  let fixture: ComponentFixture<FoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
