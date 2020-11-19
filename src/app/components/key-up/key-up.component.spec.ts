import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyUpComponent } from './key-up.component';

describe('KeyUpComponent', () => {
  let component: KeyUpComponent;
  let fixture: ComponentFixture<KeyUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
