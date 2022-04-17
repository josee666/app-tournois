import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NousJoindreComponent } from './nous-joindre.component';

describe('NousJoindreComponent', () => {
  let component: NousJoindreComponent;
  let fixture: ComponentFixture<NousJoindreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NousJoindreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NousJoindreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
