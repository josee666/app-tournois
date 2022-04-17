import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLibreComponent } from './detail-libre.component';

describe('DetailLibreComponent', () => {
  let component: DetailLibreComponent;
  let fixture: ComponentFixture<DetailLibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLibreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
