import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceGiftCardComponent } from './place-gift-card.component';

describe('PlaceGiftCardComponent', () => {
  let component: PlaceGiftCardComponent;
  let fixture: ComponentFixture<PlaceGiftCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceGiftCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
