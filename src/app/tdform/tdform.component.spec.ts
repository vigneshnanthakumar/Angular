import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdformComponent } from './tdform.component';

describe('TdformComponent', () => {
  let component: TdformComponent;
  let fixture: ComponentFixture<TdformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TdformComponent]
    });
    fixture = TestBed.createComponent(TdformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
